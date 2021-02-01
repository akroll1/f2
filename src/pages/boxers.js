import React, {useState, useEffect, useRef} from 'react';
import { API, Analytics, Storage, graphqlOperation } from 'aws-amplify';
import { S3Album, S3Image } from 'aws-amplify';
import Coverflow from 'react-coverflow';
import { TwitterTimelineEmbed, TwitterShareButton } from 'react-twitter-embed';
import { getSelectedBoxer, makeImagesArr, makeLabelsArr } from '../helpers'
import {B as Button,PagesTitleH1, TitleSpan, Loader, Spinner} from '../css/core'
import {MapContainer, Marker, TileLayer, Popup} from 'react-leaflet'
import {RatingContainer,ProfileP,ProfileImgDiv,ProfileImg,MapDiv,CoverflowContainer,ProfileContainer,BoxerProfile,BoxerLabel} from '../css/boxers'
import {HeroText} from '../css/home'
import 'leaflet/dist/leaflet.css';

// import * as Query from '../../graphql/queries.js';
// import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton } from 'react-twitter-embed';
// Storage.configure({ level: 'public' });

const Boxers = () => {
    const [boxers, setBoxers] = useState([{
        boxerName: 'Ryan Garcia',
        boxerRingname: 'King Ry',
        boxerWins: 21,
        boxerLosses: 0,
        boxerDraws: 0,
        boxerHometown:'LA, California',
        boxerProfileImg: '/garcia-vs-campbell.png'
    },{
        boxerName: 'Luke Campbell',
        boxerRingname: 'Coolhand',
        boxerWins: 2,
        boxerLosses: 4,
        boxerDraws: 0,
        boxerHometown:'Yokshire, England',
        boxerProfileImg: '/boxer_in_ring.jpg'
    }]);

	const [selectedBoxer, setSelectedBoxer] = useState({});
    const [loading, setLoading] = useState(false);
	const [userSub, setUserSub] = useState('');
    const mapRef = useRef();
	useEffect(() => {
        let rand = Math.floor(Math.random() * boxers.length);
        setSelectedBoxer(boxers[rand]);
    },[])
	// 	const getListOfBoxers = async () => {
	// 		await API.graphql(graphqlOperation(Query.listBoxers))
	// 			.then(allBoxers => {
	// 				let boxers = allBoxers.data.listBoxers.items;
	// 				let rand = Math.floor(Math.random() * boxers.length);
	// 				let selectedBoxer = boxers[rand];
	// 				let index = rand;
	// 				this.setState(state => ({
	// 					boxers,
	// 					selectedBoxer,
	// 					index,
	// 					loading: false
	// 				}));
	// 			})
	// 			.catch(err =>
	// 	}


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
  
    const {boxerName, boxerRingname,boxerWins,boxerLosses,boxerDraws,boxerHometown,boxerProfileImg} = selectedBoxer;
    return (
        <div style={{minHeight:'50rem'}}>
            <PagesTitleH1>Featured <TitleSpan> | </TitleSpan>Boxers</PagesTitleH1>
            {loading && <Loader><Spinner src={'./spinner.svg'} alt="Spinner" /></Loader>}
                <CoverflowContainer style={{height: '350px'}}>
                    <Coverflow width="100%" height="350"
                        displayQuantityOfSide={1}
                        navigation
                        infiniteScroll
                        enableScroll
                        clickable
                        active={0}>
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
                <ProfileContainer>
                    {boxers && boxers.length > 0 
                        ?   <BoxerProfile>
                                <ProfileImg style={{width:'100%'}} src={boxerProfileImg} />
                                <ProfileP>{boxerName} <span>"{boxerRingname}"</span></ProfileP>
                                <ProfileP>Wins: {boxerWins}</ProfileP>
                                <ProfileP>Losses: {boxerLosses}</ProfileP>
                                <ProfileP>Draws: {boxerDraws}</ProfileP>
                                <ProfileP>{boxerHometown}</ProfileP>
                            </BoxerProfile>
                        : []
                    }
                    
                    <MapDiv style={{}}> 
                        <MapContainer style={{height: '100%'}} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
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
                    </MapDiv>
                </ProfileContainer>
                <RatingContainer>
                    <HeroText>Fan Rankings</HeroText>
                </RatingContainer>
        </div>
    );
}
export default Boxers;
