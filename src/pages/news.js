import React, {useState, useEffect} from 'react';
import CreatableSelect from 'react-select/creatable';
import { Heading, Loader,Spinner } from '../css/core';
import {Form,NewsButton,SearchWrapper,NewsCard,NewsWrapper,TagsContainer,TagUl,Tag} from '../css/news'
import {Typography} from '@material-ui/core'
import axios from 'axios'
import {shortenBody} from '../helpers'

const News = () => {
	const bingBaseUrl = `https://api.bing.microsoft.com/v7.0/news/search?count=30&q=boxing`;
	const [loading,setLoading] = useState(true);
	const [news, setNews] = useState([]);
	const [tags, setTags] = useState([]);
	const [searchInput, setSearchInput] = useState([]);
	const [query, setQuery] = useState('');

	let bingConfig = {
		headers: {
			'Ocp-Apim-Subscription-Key':'6a73128b44654f1fa4495445ffb5b927',
			'data':'jsonp',
			'Access-Control-Allow-Origin':'*'
		}
	};

	useState(() => {
		const getArticles = async () => {
			await axios(bingBaseUrl, bingConfig)
				.then(res => setNews(res.data.value))
				.then(() => setLoading(false))
				.catch(err => console.log(err));
		}
		getArticles()
	},[])	
	const handleSearchSubmit = async (e) => {
		e.preventDefault();
		setLoading(x => !x);
		// console.log('35 searchInput: ',typeof searchInput);
		let query = searchInput.split(' ').join('+');
		let url = `${bingBaseUrl}+${query}`
        await axios(url, bingConfig)
			.then(res => setNews(res.data.value))
			// .then(() => createTags())
			.catch(err => console.log(err));
		setSearchInput(x => !x);
		setLoading(x => !x);
	}
    const handleSelectChange = inputs => {
        if(inputs == null){
            return setSearchInput('');
        }
		return setSearchInput(inputs.label)
	};
	const handleInputChange = input => {
		if(input == null)return;
        setQuery(input)
    };

	const createTags = () => {
		let array = news;
		let temp = array
			.filter(article => {
				return article.about;
			})
			.map(article => {
				return article.about.map(name => {
					return name.name;
				});
			});
		let tags = [].concat.apply([], temp);
		let tenTags = [...new Set(tags)].slice(0,9);
		return setTags(tenTags);
	};

	const handleTagClick = async name => {
		this.setState(state => ({ loading: true }));
		let transformedQuery = name.replace(' ', '+').trim();
		let newQuery =
			'https://api.bing.microsoft.com/v7.0/news/trendingtopics?q=boxing+' +
			transformedQuery +
			'&count=30&jsonp';
		let headers = {
			headers: bingConfig
		};
		await axios(newQuery, headers)
			.then(res => setNews(res.value))
			.then(() => createTags())
			.catch(err => console.error(err));
	}

	const createSelectOptions = tags => {
		// only using 10 tags for mobile.
		return tags.slice(0, 9).map(tag => ({value: tag, label:tag }));
	};
	
	const options = tags && tags.length > 0
		? createSelectOptions(tags)
		: [];

	const renderTags = tags && tags.length > 0
		? tags.map((tag, i) => (
			<Tag
				onClick={() => handleTagClick(tag)}
				key={i}>
				{tag}
			</Tag>
		))
		: [];

	const stories = news && news.length > 0 
		? news.map((story, i) => (
			<NewsCard key={i}>
				<a style={{textDecoration: 'none'}} href={story.url} target="_blank" rel="noopener noreferrer">
					<h2 style={{paddingTop: '1rem',paddingLeft: '1rem',color: '#333'}}>{story.name}</h2>
					<div>
						<img
							style={{margin: 'auto',padding: '0 2rem',float: 'left',display: 'block'}}
							// src={story.image ? story.image.thumbnail.contentUrl : boxerPic}
							// alt={boxerPic}
							src={story.image ? story.image.thumbnail.contentUrl : ''}
							/>
						<p style={{textAlign: 'left',color: '#333',margin: '0 auto'}}>{shortenBody(story.description)}</p>
						<h5 style={{textAlign: 'left',color: '#bf6f6d'}}>{story.provider ? story.provider[0].name : ''}</h5>
					</div>
				</a>
			</NewsCard>
		))
		: [];
		// console.log('tags: ',tags);
	return (
		<>
			<Heading variant="h3" style={{fontWeight:'bold',margin: '1rem auto'}}>The Latest Boxing News</Heading>
			{loading 
				? <Loader><Spinner src={'./spinner.svg'} alt="Spinner" /></Loader>
				:	<>
						<SearchWrapper>
							<Form onSubmit={e => e.preventDefault()} className="search">
								<Typography variant='overline' htmlFor="shows-page-search-input">
									Need more boxing News?
								</Typography>
								<CreatableSelect
									style={{width: '100%'}}
									autoFocus
									isClearable
									onChange={handleSelectChange}
									onInputChange={handleInputChange}
									options={options}
									placeholder="Select or type to search..."
									formatCreateLabel={() => query}
									/>
								<NewsButton
									onClick={e => handleSearchSubmit(e)}>
									Search
								</NewsButton>
							</Form>
						</SearchWrapper>
						<NewsWrapper>{stories}</NewsWrapper>
					</>
			}
			</>
		);
	}
	export default News
	{/* {!loading && (
		<TagsContainer style={{paddingBottom: '0'}}>
			<TagUl>
				<Heading style={{margin: '0'}} variant="h5">Trending Now</Heading>
					{renderTags}
			</TagUl>
		</TagsContainer>
	)} */}

	{/*<video src="http://dc8ybk017oo9b.cloudfront.net/mactown.mp4" autoPlay></video>*/}