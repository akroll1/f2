import React, {useState, useEffect, useRef} from 'react';
import { API, Analytics, Storage, graphqlOperation } from 'aws-amplify';
import { S3Album, S3Image } from 'aws-amplify';
import Coverflow from 'react-coverflow';
import { TwitterTimelineEmbed, TwitterShareButton } from 'react-twitter-embed';
import { getSelectedBoxer, makeImagesArr, makeLabelsArr } from '../helpers'
import {B as Button,PagesTitleH1, TitleSpan, Loader, Spinner} from '../css/core'
import {MapContainer, Marker, TileLayer, Popup} from 'react-leaflet'
import {Last5Container,SocialsContainer,AvgRankDiv,RatingReviewContainer,BoxerPageContainer,SubmitStarsButton,RankingsContainer,RatingContainer,ProfileP,ProfileImgDiv,ProfileImg,MapDiv,CoverflowContainer,ProfileContainer,BoxerProfile,BoxerLabel} from '../css/boxers'
import {HeroText} from '../css/home'
import 'leaflet/dist/leaflet.css';
import Stars from '../components/stars'
import {Typography} from '@material-ui/core'
import Last5 from '../components/last5'

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
        boxerHometown:'LA, California, USA',
        boxerProfileImg: '/garcia-vs-campbell.png'
    },{
        boxerName: 'Luke Campbell',
        boxerRingname: 'Coolhand',
        boxerWins: 2,
        boxerLosses: 4,
        boxerDraws: 0,
        boxerHometown:'Hull, Yokshire, United Kingdom',
        boxerProfileImg: '/boxer_in_ring.jpg'
    }, {
        boxerName: 'Mike Tyson',
        boxerRingname: 'Iron',
        boxerWins: 50,
        boxerLosses: 6,
        boxerDraws: 0,
        boxerHometown:'Brooklyn, New York, USA',
        boxerProfileImg: '/iron-mike.png'
    }]);
    const [starValue, setStarValue] = useState(0);
    const [attr, setAttr] = useState('');
    const [rankings,setRankings] = useState({
        speed:0,
        power:0,
        defense:0,
        stamina:0,
        ringGeneralship:0
    });

	const [selectedBoxer, setSelectedBoxer] = useState({});
    const [loading, setLoading] = useState(false);
	const [userSub, setUserSub] = useState('');
    const starArr = ['speed','power','defense','stamina','ringGeneralship'];
	useEffect(() => {
        let rand = Math.floor(Math.random() * boxers.length);
        setSelectedBoxer(boxers[rand]);
    },[])

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
    const {boxerName, boxerRingname,boxerWins,boxerLosses,boxerDraws,boxerHometown,boxerProfileImg} = selectedBoxer;
    return (
        <BoxerPageContainer style={{minHeight:'50rem'}}>
            {/* <Loader><Spinner src={'./spinner.svg'} alt="Spinner" /></Loader> */}
            <PagesTitleH1>Featured <TitleSpan> | </TitleSpan>Boxers</PagesTitleH1>
            {loading && <Loader><Spinner src={'./spinner.svg'} alt="Spinner" /></Loader>}
                <CoverflowContainer style={{ height: '350px'}}>
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
                   
                     <MapDiv> 
                            <Typography variant='overline'>Hometown</Typography>
                            <MapContainer style={{height: '325px'}} center={[51.505, -0.09]} zoom={12} scrollWheelZoom={true}>
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
                                <Last5 />
                            </Last5Container>
                        </MapDiv>
                   
                </ProfileContainer>
                <RankingsContainer>
                    <RatingContainer style={{width: '40%'}}>
                        <HeroText>Fan Rankings</HeroText>
                        <div style={{width: '100%',display: 'flex',flexDirection:'row'}}>
                            <div style={{width: '70%'}}>
                                <Stars
                                    starArr={starArr} 
                                    starRating={starRating}
                                    handleStarDivClick={handleStarDivClick}
                                    />
                                <SubmitStarsButton onClick={handleStarsSubmit}>Submit</SubmitStarsButton>
                            </div>
                            <AvgRankDiv>
                                <Typography style={{margin:'0'}} variant="h2" gutterBottom>4.3</Typography>
                                <Typography style={{textAlign:'center'}} variant="subtitle2" gutterBottom>578 Total Reviews</Typography>
                            </AvgRankDiv>
                        </div>
                    </RatingContainer>
                    <RatingReviewContainer>
                        <p>Reviews here</p>
                    </RatingReviewContainer>
                    {/* <RatingContainer> */}
                    {/* <SocialsContainer>
                        <p>socials</p>
                    </SocialsContainer> */}
                    {/* </RatingContainer> */}
                </RankingsContainer>
        </BoxerPageContainer>
    );
}
export default Boxers;
