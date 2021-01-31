import React, {useState, useEffect} from 'react'
import { useSpring, animated as a } from 'react-spring'
import {Title} from '../components/title'
import {VideoWrapper,HeroSubtext,HeroWrapper,HeroDiv2,HeroVideoText,HeroDiv1,HeroText,HeroImg,BigNewsButton} from '../css/home'
import {Form,NewsButton,SearchWrapper} from '../css/news'
import { Heading, Loader,Spinner } from '../css/core';
import {Typography} from '@material-ui/core'
import '../css/spring.css'
import { RiArrowRightSLine } from "react-icons/ri"
import axios from 'axios'
import VideoThumbs from '../components/video-thumbs'
import CreatableSelect from 'react-select/creatable';

const Home = () => {

    const bingBaseUrl = `https://api.bing.microsoft.com/v7.0/videos/search?count=30&q=boxing`;
    const [tags, setTags] = useState([]);
    const [searchInput, setSearchInput] = useState([]);
	const [query, setQuery] = useState('');
    const [loading,setLoading] = useState(true);
    const [flipped, set] = useState(false);
    const [tonight, showTonight] = useState(false);
    const [videos, setVideos] = useState([]);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 400, friction: 80 }
    })
	let bingConfig = {
		headers: {
			'Ocp-Apim-Subscription-Key':'6a73128b44654f1fa4495445ffb5b927',
			'data':'jsonp'
		}
	};
    useEffect(() => {
        const getVideos = async () => {
			await axios(bingBaseUrl, bingConfig)
                .then(res => setVideos(res.data.value))
				.then(() => setLoading(false))
				.catch(err => console.log(err));
		}
		getVideos()
    },[]);
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
    const options = tags && tags.length > 0
		? createSelectOptions(tags)
		: [];
    // console.log('videos: ',videos)
    const createSelectOptions = tags => {
		// only using 10 tags for mobile.
		return tags.slice(0, 9).map(tag => ({value: tag, label:tag }));
    };
    const handleSearchSubmit = async (e) => {
		e.preventDefault();
		setLoading(x => !x);
		// console.log('35 searchInput: ',typeof searchInput);
		let query = searchInput.split(' ').join('+');
		let url = `${bingBaseUrl}+${query}`
        await axios(url, bingConfig)
			.then(res => setVideos(res.data.value))
			// .then(() => createTags())
			.catch(err => console.log(err));
		setSearchInput(x => !x);
		setLoading(x => !x);
	}
    return (
        <>
            <Title/>
            <HeroWrapper>
                <HeroDiv1>
                    <HeroText>Latest Boxing News</HeroText>
                    <HeroSubtext>Updated in Real Time</HeroSubtext>
                    <BigNewsButton to="/news">News<span style={{marginLeft: '1rem',marginTop: '8px'}}><RiArrowRightSLine /></span></BigNewsButton>
                </HeroDiv1>
                <HeroDiv2>
                    <HeroImg src="/boxer_in_ring.jpg"></HeroImg>
                </HeroDiv2>
            </HeroWrapper>
            <VideoWrapper>
            <HeroVideoText style={{display: 'block',width: '100%',padding:'2rem',marginLeft: '2rem',paddingBottom:'0'}}>Latest Boxing Videos</HeroVideoText>
            <SearchWrapper>
                <Form onSubmit={e => e.preventDefault()} className="search" style={{width: '40%',marginLeft:'3rem'}}>
                    <Typography variant='overline' htmlFor="shows-page-search-input">
                        Need more boxing Videos?
                    </Typography>
                    <CreatableSelect
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
            {loading 
                ? <Loader><Spinner src={'./spinner.svg'} alt="Spinner" /></Loader>
                : <VideoThumbs videos={videos}/>
            }
            </VideoWrapper>
        </>
    )
}
export default Home