import React, {useState, useEffect, useRef} from 'react';
import { API, Analytics, Storage, graphqlOperation } from 'aws-amplify';
import { S3Album, S3Image } from 'aws-amplify';
import Coverflow from 'react-coverflow';
import { TwitterTimelineEmbed, TwitterShareButton } from 'react-twitter-embed';
import { getSelectedBoxer, makeImagesArr, makeLabelsArr } from '../helpers'
import {B as Button,PagesTitleH1, TitleSpan, Loader, Spinner} from '../css/core'
import {MapContainer, Marker, TileLayer, Popup} from 'react-leaflet'
import {MapDiv,CoverflowContainer} from '../css/boxers'
import 'leaflet/dist/leaflet.css';

// import * as Query from '../../graphql/queries.js';
// import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton } from 'react-twitter-embed';
// Storage.configure({ level: 'public' });

const Boxers = () => {
	const [boxers, setBoxers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [userSub, setUserSub] = useState('');
	const [selectedBoxer, setSelectedBoxer] = useState({});
    const mapRef = useRef();
	// useEffect(() => {
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
	// },[])

// class Boxers extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			userSub: '',
// 			boxers: [],
// 			selectedBoxer: {},
// 			index: null,
// 			loading: true
// 		};
// 	}
// 	async componentDidMount() {
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
// 			.catch(err => console.error(err));
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
	// const makeLabelsArr = boxers => {
	// 	let arr = [];
	// 	return boxers.map(boxer => {
	// 		let { boxerFirstName, boxerRingname, boxerLastName } = boxer;
	// 		let label = boxerFirstName + ' "' + boxerRingname + '" ' + boxerLastName;
	// 		arr.push(label);
	// 		return arr;
	// 	});
	// };
	// const getSelectedBoxer = index => {
	// 	// console.log('index: ', index);
    //     let selectedBoxer = boxers[index];
    //     setSelectedBoxer(selectedBoxer);
	// };

    // let {
    //     boxerFirstName,
    //     boxerLastName,
    //     boxerRingname,
    //     boxerState,
    //     boxerCity,
    //     wins,
    //     losses,
    //     draws,
    //     kos,
    //     boxerTwitter,
    //     boxerFacebook,
    //     boxerInstagram,
    //     boxerGym
    // } = selectedBoxer && selectedBoxer.boxerFirstName ? selectedBoxer : {};

	// 	let { ringName } =
	// 		selectedBoxer && selectedBoxer.boxerFirstName
	// 			? selectedBoxer
	// 			: {};
	// 	let twitterOptions = {
	// 		text: { ringName } + ' is awesome',
	// 		via: 'fightcloud.live'
	// 	};
	// 	let labelsArr = boxers ? this.makeLabelsArr(boxers) : [];
	// 	let imagesArr = boxers ? this.makeImagesArr(boxers) : [];
	// 	// let { index } = this.state;
	// 	let albumPath = 'BOXER/' + userSub;
    const handleCoverflowClick = async () => {
        console.log('getSelectedBoxer');
    };
    return (
        <div style={{minHeight:'50rem'}}>
            <PagesTitleH1>Featured <TitleSpan> | </TitleSpan>Boxers</PagesTitleH1>
            {loading && <Loader><Spinner src={'./spinner.svg'} alt="Spinner" /></Loader>}
                <CoverflowContainer style={{height: '300px'}}>
                    <Coverflow width="100%" height="300"
                        displayQuantityOfSide={1}
                        navigation
                        infiniteScroll
                        enableScroll
                        clickable
                        active={0}
                        >
                        <div
                        onClick={() => handleCoverflowClick()}
                        // onKeyDown={() => fn()}
                        role="menuitem"
                        tabIndex="0"
                        >
                        <img
                            src='image/path'
                            alt='title or description'
                            style={{
                                display: 'block',
                                width: '100%',
                            }}
                            onClick={handleCoverflowClick}
                            />
                        </div>
                        <img src='/boxer_in_ring.jpg' alt='title' />
                        <img src='/garcia-vs-campbell.png' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
                    </Coverflow>
                </CoverflowContainer>
                <MapDiv style={{margin: 'auto',width: '60%',height: '15rem', marginTop:'10rem'}}> 
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
        </div>
            //             <div className="coverflow">
            //                
            //             <h1>{boxerRingname}</h1>
            //             <div className="boxer-info">
            //                 <<div className="boxer-profile">
            //                     <<divt basic>
            //                         <h3>Upcoming Fight: </h3>
            //                         <h3>Wins - {wins}</h3>
            //                         <h3>Losses - {losses}</h3>
            //                         <h3>Draws - {draws}</h3>
            //                         <h3>KO's - {kos}</h3>
            //                         <h3>Gym - {boxerGym}</h3>
            //                         <h3>
            //                             {boxerCity}, {boxerState}
            //                         </h3>
            //                         <h3>
            //                             <a
            //                                 href={boxerTwitter}
            //                                 target="_blank"
            //                                 rel="noopener noreferrer">
            //                                 <Button color="twitter">
            //                                     <Icon name="twitter" /> Twitter
            //                                 </Button>
            //                             </a>
            //                         </h3>
            //                         <h3>
            //                             <a
            //                                 href="youtube.com"
            //                                 target="_blank"
            //                                 rel="noopener noreferrer">
            //                                 <Button color="youtube">
            //                                     <Icon name="youtube" /> YouTube
            //                                 </Button>
            //                             </a>
            //                         </h3>
            //                         <h3>
            //                             <a
            //                                 href={boxerFacebook}
            //                                 target="_blank"
            //                                 rel="noopener noreferrer">
            //                                 <Button color="facebook">
            //                                     <Icon name="facebook" /> Facebook
            //                                 </Button>
            //                             </a>
            //                         </h3>
            //                         <h3>
            //                             <a
            //                                 href={boxerInstagram}
            //                                 target="_blank"
            //                                 rel="noopener noreferrer">
            //                                 <Button color="instagram">
            //                                     <Icon name="instagram" /> Instagram
            //                                 </Button>
            //                             </a>
            //                         </h3>
            //                     </<divt>
            //                 </<div>
            //                 <<div>
            //                     <<divt basic>
            //                         <div className="twitter-timeline">
            //                             <TwitterShareButton
            //                                 url={boxerTwitter}
            //                                 options={twitterOptions}
            //                             />
            //                             <TwitterTimelineEmbed
            //                                 sourceType="profile"
            //                                 screenName="fightcloudlive"
            //                                 // options={{height: 400}}
            //                             />
            //                         </div>
            //                     </<divt>
            //                 </<div>
            //                 <<div>
            //                     <<divt basic>
            //                         <h2> Images and Videos</h2>
            //                         <div>
            //                             <S3Album level="public" path={albumPath} />
            //                         </div>
            //                     </<divt>
            //                 </<div>
            //             </<div>
            //         </div>
            //     </>
            // )}
    );
}
export default Boxers;
