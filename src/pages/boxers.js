import React, {useState, useEffect, useRef} from 'react';
import { API, Analytics, Storage, graphqlOperation } from 'aws-amplify';
import { S3Album, S3Image } from 'aws-amplify';
import Coverflow from 'react-coverflow';
import { getSelectedBoxer, makeImagesArr, makeLabelsArr } from '../helpers'
import {B as Button,PagesTitleH1, TitleSpan, Loader, Spinner} from '../css/core'
import {MapContainer, Marker, TileLayer, Popup} from 'react-leaflet'
import {SocialsContainer,Last5Container,AvgRankDiv,RatingReviewContainer,BoxerPageContainer,SubmitStarsButton,RankingsContainer,RatingContainer,ProfileP,ProfileImgDiv,ProfileImg,MapDiv,CoverflowContainer,ProfileContainer,BoxerLabel} from '../css/boxers'
import 'leaflet/dist/leaflet.css';
import Stars from '../components/stars'
import {Typography} from '@material-ui/core'
import Last5 from '../components/last5'
import ProfileAside from '../components/boxers/profile-aside'
import BoxerSocials from '../components/boxers/boxer-socials'
import axios from 'axios';

// import * as Query from '../../graphql/queries.js';
// Storage.configure({ level: 'public' });

const Boxers = () => {
    const geoApiKey = process.env.REACT_APP_GEOCODIO_API_KEY;
    const geocodioBaseUrl = `https://api.geocod.io/v1.6/geocode?api_key=${geoApiKey}&limit=1&q=`;
    const [boxers, setBoxers] = useState([{
        boxerName: 'Ryan Garcia',
        boxerRingname: 'King Ryan',
        boxerWins: 21,
        boxerLosses: 0,
        boxerDraws: 0,
        boxerKos: 18,
        boxerHometown:'LA, California, USA',
        boxerLatLong: [33.973951,-118.248405],
        boxerProfileImg: '/garcia-vs-campbell.png',
        socialsArr: [{social: 'Twitter',handle: 'https://twitter.com',social: 'Facebook',handle:'https://facebook.com/kingryang',social: 'IG',handle:'https://instagram.com/kingryan'}]
    },{
        boxerName: 'Luke Campbell',
        boxerRingname: 'Coolhand',
        boxerWins: 2,
        boxerLosses: 4,
        boxerDraws: 0,
        boxerKos: 16,
        boxerHometown:'Hull, Yokshire, United Kingdom',
        boxerLatLong: [41.893642,-89.393714],
        boxerProfileImg: '/boxer_in_ring.jpg',
        socialsArr: [{social: 'Twitter', handle: 'https://twitter.com/luke11campbell'},{social: 'Facebook', handle:'https://facebook.com/LukeCampbellOfficial'},{social:'IG',handle:'https://instagram.com/luke11campbell'}]
    }, {
        boxerName: 'Mike Tyson',
        boxerRingname: 'Iron',
        boxerWins: 50,
        boxerLosses: 6,
        boxerDraws: 0,
        boxerKos: 44,
        boxerHometown:'Brooklyn, New York, USA',
        boxerLatLong: [40.63122,-73.941542],
        boxerProfileImg: '/iron-mike.png',
        socialsArr: [{social: 'Twitter',handle: 'https://twitter.com/MikeTyson',social: 'Facebook',handle:'https://facebook.com/miketyson',social: 'IG',handle:'https://instagram.com/miketyson'}]
    }]);
    const [selectedBoxer, setSelectedBoxer] = useState(boxers[0]);
    const [starValue, setStarValue] = useState(0);
    const [attr, setAttr] = useState('');
    const [rankings,setRankings] = useState({
        speed:0,
        power:0,
        defense:0,
        stamina:0,
        ringGeneralship:0
    });

    const [loading, setLoading] = useState(false);
	const [userSub, setUserSub] = useState('');
	useEffect(() => {
        let rand = Math.floor(Math.random() * boxers.length);
        setSelectedBoxer(boxers[rand]);
    },[])
    // const convertAddressToLatLong = async (address) => {
    //     let url = `${geocodioBaseUrl}${address}`;
    //     axios(url)
    //         .then(res => console.log('res: ',res.data.results[0].location))
    //         .catch(err => console.log('err: ',err));
    // };
    // convertAddressToLatLong(selectedBoxer.boxerHometown);
	// const makeImagesArr = boxers => {
	// 	let arr = [];
	// 	return boxers.map(boxer => {
	// 		let imageUrl =
	// 			'https://s3.amazonaws.com/boxers/public/' + boxer.boxerProfilePic;
	// 		arr.push(imageUrl);
	// 		return arr;
	// 	});
	// };

    const handleCoverflowClick = (e) => {
        setSelectedBoxer(boxers[e.target.id])
    };
    const getSelectedBoxer = index => {
    	// console.log('index: ', index);
        let selectedBoxer = boxers[index];
        setSelectedBoxer(selectedBoxer);
    };
    const star = useRef();
    star.current = starValue;
    const starRating = rating => {
        setStarValue(rating);
    };
    const handleStarDivClick = e => {
        setAttr(e.currentTarget.id);
        let t = e.currentTarget.id;
        setTimeout(() => {
            let val = star.current;
            setRankings({...rankings,[t]:val});
        },10)
    }
    // console.log('rankings: ',rankings);
    const handleStarsSubmit = () => {
        console.log('handleStarsSubmit: ',rankings);
    }
    // console.log('boxers; ',boxers);
    // console.log('selectedBoxer: ',selectedBoxer)
    const {socialsArr,boxerName, boxerRingname,boxerWins,boxerLosses,boxerDraws,boxerHometown,boxerHometownLatLong,boxerProfileImg} = selectedBoxer;
    return (
        <BoxerPageContainer>
            {/* <Loader><Spinner src={'./spinner.svg'} alt="Spinner" /></Loader> */}
            <PagesTitleH1>Featured <TitleSpan> | </TitleSpan>Boxers</PagesTitleH1>
            {loading && <Loader><Spinner src={'./spinner.svg'} alt="Spinner" /></Loader>}
            <CoverflowContainer>
                <Coverflow width="100%" height="350"
                    displayQuantityOfSide={1}
                    // navigation
                    // infiniteScroll
                    enableScroll
                    clickable
                    active={1}>
                    {boxers && boxers.length > 0 
                        ? boxers.map((boxer,i) => {
                            let {boxerProfileImg, boxerRingname, boxerName} = boxer;
                            return (
                                <>
                                <ProfileImgDiv id={i} key={i} role='menuitem' tabIndex={i} alt={boxerRingname} onClick={handleCoverflowClick}>
                                    <ProfileImg id={i} src={boxerProfileImg} alt={boxerRingname} data-action="http://andyyou.github.io/react-coverflow/" />
                                    <BoxerLabel>{boxerName}</BoxerLabel>
                                </ProfileImgDiv>
                            </>)
                            })
                        :[]
                    }

                </Coverflow>
            </CoverflowContainer>
            <div style={{display: 'flex',flexDirection:'row'}}>
                <ProfileAside 
                    boxers={boxers} 
                    selectedBoxer={selectedBoxer} 
                    handleStarDivClick={handleStarDivClick}
                    handleStarsSubmit={handleStarsSubmit}
                />
                <MapDiv> 
                    <Typography variant='overline'>Hometown</Typography>
                    <MapContainer style={{width: '100%',height: '325px'}} center={[51.505, -0.09]} zoom={12} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        <Marker position={[51.505, -0.09]}>
                            <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                    <Last5Container>
                        <div>
                            <Typography variant="overline">Last 5 Opponents</Typography>
                        </div>
                        <div style={{display: 'flex'}}>
                            <Last5 />
                        </div>
                    </Last5Container>
                    <BoxerSocials socialsArr={socialsArr} />
                </MapDiv>
            </div>
        </BoxerPageContainer>
    );
}
export default Boxers;
