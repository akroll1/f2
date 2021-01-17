import React, {useState, useEffect} from 'react';
import CreatableSelect from 'react-select/creatable';
import { B as Button } from '../css/core';
import {Heading, Loader,Spinner} from '../css/core'
import {SearchWrapper,NewsCard,NewsWrapper,TagsContainer,TagUl,Tag} from '../css/news'
import axios from 'axios'
import {shortenBody} from '../helpers'

const News = () => {
	const bingUrl = `https://api.cognitive.microsoft.com/bing/v7.0/news/search/?q=boxing&count=30&jsonp`;
	let bingConfig = {
		headers: {
			'Ocp-Apim-Subscription-Key':'a894e8ffde684fb7916fd1152b055e2e',
			'data':'jsonp',
			'Access-Control-Allow-Origin':'*'
		}
	};
	const [loading,setLoading] = useState(true);
	const [news, setNews] = useState([]);
	const [tags, setTags] = useState([]);
	const [searchInput, setSearchInput] = useState([]);
	const [query, setQuery] = useState('');

	useState(() => {
		const getArticles = async () => {
			await axios(bingUrl, bingConfig)
				.then(res => setNews(res.data.value))
				.then(() => setLoading(false))
				.catch(err => console.log(err));
		}
		getArticles()
	},[news])	

    const handleSelectChange = inputs => {
        if(inputs == null){
            return setQuery('');
        }
        console.log('inputs: ',inputs);
		return setSearchInput(inputs.label)
	};
	const handleInputChange = input => {
        setQuery(input)
    };
    // console.log('query: ',query);
    // console.log('searchInput: ',searchInput);
	const handleSearchSubmit = async (e) => {
		e.preventDefault();
		let query = searchInput.split(' ').join('+');

		let newQuery = `https://api.cognitive.microsoft.com/bing/v7.0/news/search/?q=boxing+${query}&count=30&jsonp`;
		let headers = {
			headers: bingConfig
		};
        await axios(newQuery, bingConfig)
            // .then(res => console.log('res: ',res))
			.then(res => setNews(res.data.value))
			.then(() => createTags())
			.catch(err => console.log(err));
	}

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
			'https://api.cognitive.microsoft.com/bing/v7.0/news/search/?q=boxing+' +
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
			<Heading variant="h3" style={{margin: '1rem'}}>The Latest Boxing News</Heading>
			<SearchWrapper>
				<form onSubmit={e => e.preventDefault()} className="search">
					<label htmlFor="shows-page-search-input">
						Need more boxing News?
					</label>

					<CreatableSelect
                        isClearable
                        onChange={handleSelectChange}
                        onInputChange={handleInputChange}
						options={options}
                        placeholder="Select or type to search..."
                        formatCreateLabel={() => query}
					/>
					<Button
						style={{background:'lightgray',margin:'0.3rem 0rem'}}
						onClick={e => handleSearchSubmit(e)}>
						Search
					</Button>
				</form>
			</SearchWrapper>
			{loading && <Loader><Spinner src={'./spinner.svg'} alt="Spinner" /></Loader>}
			{!loading && (
				<TagsContainer style={{paddingBottom: '0'}}>
					<TagUl>
						<Heading style={{margin: '0'}} variant="h5">Trending Now</Heading>
						{/* {renderTags} */}
					</TagUl>
				</TagsContainer>
			)}

				<NewsWrapper>{stories}</NewsWrapper>
			{/*<video src="http://dc8ybk017oo9b.cloudfront.net/mactown.mp4" autoPlay></video>*/}
		</>
	);
}
export default News