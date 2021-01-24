import React, {useState,useEffect} from 'react';
import Amplify, {
    Auth,
	Analytics,
	Storage,
	API,
	graphqlOperation
} from 'aws-amplify';
import {
    Authenticator,
	withAuthenticator,
	PhotoPicker,
	S3Image
} from '@aws-amplify/ui-react';
// import { loader } from '../../Components/PageComponents/loader';
import Editor from '../components/utilities/editor'
import Select from 'react-select';
import {SelectWrapper,Heading} from '../css/core'
// import * as Query from '../../graphql/queries';
// import * as Mutation from '../../graphql/mutations';
// import Media from '../Media';
// import Editor from '../../Utilities/Editor';
// import Forms from '../../Components/Forms';
// import Boxer from '../../Components/Images/boxer.jpg';
// import { Button, Form, Image, Divider, Transition } from 'semantic-ui-react';

// const federated = {
// 	facebook_app_id: '1901082616641766'
// };

const Dashboard = () => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});
    const [selectValue, setSelectValue] = useState({
        value: '',
        label: 'Select...',
        type:''
    });

    useEffect(() => {
        let getUser = async () => {
            await Auth.currentAuthenticatedUser()
                .then(user => setUser(user))
                .catch(err => console.log(err))
        };
        // getUser();
    },[]);
    let options = [
        { value: 'ARTICLE', label: 'Publish an Article', type: 'Article' },
        { value: 'BOXER', label: 'Create a Boxer Profile', type: 'Boxer' },
        { value: 'GYM', label: 'Create a Gym Profile', type: 'Gym' },
        {
            value: 'PODCAST',
            label: 'Live Stream video or audio podcast',
            type: 'Livestream'
        },
        { value: 'SHOW', label: 'Post a Show', type: 'Show' }
        // {value: "USER",label:"Your Profile Info",type: "User" },
    ];
    const onSelectChange = selectObj => {
        let { value } = selectObj;
        // console.log('change: ',value);
        setSelectValue(selectObj);
		// this.handleSelectedForm(value);
		// let { userSub } = this.state;
		// this.getClientImages(userSub, value);
		// this.setState(state => ({ userTypeSelectOption: value, loading: true }));
		// if (value == 'PODCAST') {
		// 	this.setState({ loading: false });
        // }
    
    };

    return (
        <>
            <Heading variant='h3' style={{margin: '1rem auto',fontWeight: 'bold'}}>Dashboard</Heading>
            <SelectWrapper>
                <Select
                    onChange={onSelectChange}
                    value={selectValue}
                    options={options}
                />
            </SelectWrapper>
            {selectValue.value === 'ARTICLE' && <Editor />}
        </>
    )
}
export default Dashboard;
// class Dashboard extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.getUser = this.getUser.bind(this);
// 		this.handleDashboardPutForms = this.handleDashboardPutForms.bind(this);
// 		this.handleProfilePicSelect = this.handleProfilePicSelect.bind(this);
// 		this.getClientImages = this.getClientImages.bind(this);
// 		this.handlePicSelect = this.handlePicSelect.bind(this);
// 	}
// 	state = {
// 		percentLoaded: null,
// 		activeIndex: null,
// 		id: '',
// 		userSub: null,
// 		accountType: '',
// 		userTypeSelectOption: '',
// 		setProfilePic: true,
// 		s3Images: [],
// 		loading: true,
// 		username: '',
// 		file: {},
// 		uploadingImg: '',
// 		user: {
// 			userEmail: '',
// 			userDisplayName: '',
// 			userFirstName: '',
// 			userLastName: '',
// 			userProfilePic: '',
// 			userProfilePath: '',
// 			reminders: [],
// 			following: [],
// 			followers: []
// 		},
// 		users: [],
// 		articles: [],
// 		boxer: {
// 			boxers: [],
// 			id: '',
// 			userSub: '',
// 			username: '',
// 			boxerFirstName: '',
// 			boxerLastName: '',
// 			boxerRingname: '',
// 			boxerGym: '',
// 			boxerTrainer: '',
// 			boxerCity: '',
// 			boxerState: '',
// 			wins: '',
// 			losses: '',
// 			draws: '',
// 			kos: '',
// 			boxerEmail: '',
// 			boxerUrl: '',
// 			boxerDescription: '',
// 			boxerFacebook: '',
// 			boxerInstagram: '',
// 			boxerTwitter: '',
// 			boxerNextFight: '',
// 			boxerProfilePic: 'empty'
// 		},
// 		show: {
// 			shows: [],
// 			id: '',
// 			userSub: '',
// 			username: '',
// 			showTitle: '',
// 			showVenue: '',
// 			showCity: '',
// 			showState: '',
// 			showNetwork: '',
// 			showPromoter: '',
// 			showDescription: '',
// 			showNotes: '',
// 			showUrl: '',
// 			showDate: '',
// 			showContact: '',
// 			showTwitter: '',
// 			showFacebook: '',
// 			showInstagram: '',
// 			showProfilePic: ''
// 		},
// 		gym: {
// 			id: '',
// 			gyms: [],
// 			gymName: '',
// 			gymContactFirstName: '',
// 			gymContactLastName: '',
// 			gymStreet: '',
// 			gymCity: '',
// 			gymState: '',
// 			gymZip: '',
// 			gymDescription: '',
// 			gymUrl: '',
// 			gymEmail: '',
// 			gymTel: '',
// 			gymFacebook: '',
// 			gymTwitter: '',
// 			gymInstagram: '',
// 			gymProfilePic: ''
// 		}
// 	};

// 	async componentDidMount() {
// 		await Auth.currentAuthenticatedUser()
// 			.then(user => {
// 				let { username } = user;
// 				let userSub = user.attributes.sub;
// 				this.setState(state => ({
// 					username,
// 					userSub,
// 					loading: false
// 				}));
// 			})
// 			.then(userSub => this.getUser(userSub))
// 			.then(() => {
// 				let { accountType, userSub } = this.state;
// 				this.getClientImages(userSub, accountType);
// 			})
// 			.catch(err => console.error(err));
// 	}

// 	getUser = async userSub => {
// 		await API.graphql(
// 			graphqlOperation(Query.listUsers, { userSub: { userSub } })
// 		)
// 			.then(currentUser => {
// 				let {
// 					userProfilePic,
// 					userEmail,
// 					accountType,
// 					id,
// 					userFirstName,
// 					userLastName,
// 					following,
// 					followers,
// 					reminders
// 				} = currentUser.data.listUsers.items[0];
// 				let userDisplayName = userFirstName + ' ' + userLastName;

// 				this.setState(state => ({
// 					userProfilePic,
// 					accountType,
// 					id,
// 					user: {
// 						id,
// 						userFirstName,
// 						userLastName,
// 						userDisplayName,
// 						userEmail,
// 						following,
// 						followers,
// 						reminders
// 					}
// 				}));
// 			})
// 			.catch(err => console.error(err));
// 	};

// 	handleDashboardPutForms = async (values, type) => {
// 		switch (type) {
// 			case 'BOXER':
// 				// console.log('values: ',values);
// 				await API.graphql(
// 					graphqlOperation(Mutation.updateBoxer, { input: values })
// 				)
// 					.then(createdBoxer => {
// 						let boxer = { ...createdBoxer };
// 						this.setState({ boxer });
// 					})
// 					.catch(err => console.error(err));
// 				break;
// 			case 'GYM':
// 				await API.graphql(
// 					graphqlOperation(Mutation.updateGym, { input: values })
// 				)
// 					.then(updatedGym => {
// 						let gym = { ...updatedGym };
// 						this.setState({ gym });
// 					})
// 					.catch(err => console.error(err));
// 				break;
// 			case 'PODCAST':
// 				this.setState({ loading: false });
// 				break;
// 			case 'PROMOTER':
// 				break;
// 			case 'SHOW':
// 				await API.graphql(
// 					graphqlOperation(Mutation.updateShow, { input: values })
// 				)
// 					.then(updatedShow => {
// 						let show = { ...updatedShow };
// 						this.setState({ show });
// 					})
// 					.catch(err => console.error(err));
// 				break;
// 			case 'TRAINER':
// 				break;
// 			// case 'USER':
// 			// console.log('user values: ', values);
// 			// await API.graphql(
// 			// 	graphqlOperation(Mutation.updateUser, { input: values })
// 			// )
// 			// 	.then(updatedUser => {
// 			// 		let user = { ...updatedUser };
// 			// 		this.setState({ user });
// 			// 	})
// 			// 	.catch(err => console.error(err));
// 			// break;
// 			default:
// 				console.error('bad case in handleDashboardPutForms.');
// 				return;
// 		}
// 	};



// 	handleSelectedForm = async formType => {
// 		let { userSub } = this.state;
// 		switch (formType) {
// 			case 'ARTICLE':
// 				await API.graphql(
// 					graphqlOperation(Query.listArticles, { userSub: { userSub } })
// 				)
// 					.then(articleData => {
// 						let articles = articleData.data.listArticles.items;
// 						this.setState(state => ({
// 							articles,
// 							accountType: formType,
// 							loading: false
// 						}));
// 					})
// 					.catch(err => console.error(err));
// 				break;
// 			case 'BOXER':
// 				await API.graphql(
// 					graphqlOperation(Query.listBoxers, { userSub: { userSub } })
// 				)
// 					.then(boxerData => {
// 						let boxer = { ...boxerData.data.listBoxers.items[0] };
// 						let { boxerProfilePic } = boxer;
// 						this.setState(state => ({
// 							boxer,
// 							userProfilePic: boxerProfilePic,
// 							accountType: formType,
// 							loading: false
// 						}));
// 					})
// 					.catch(err => console.error(err));
// 				break;
// 			case 'GYM':
// 				await API.graphql(
// 					graphqlOperation(Query.listGyms, { userSub: { userSub } })
// 				)
// 					.then(gymData => {
// 						let gym = { ...gymData.data.listGyms.items[0] };
// 						let { gymProfilePic } = gym;
// 						this.setState(state => ({
// 							gym,
// 							userProfilePic: gymProfilePic,
// 							accountType: formType,
// 							loading: false
// 						}));
// 					})
// 					.catch(err => console.error(err));
// 				break;
// 			case 'PODCAST':
// 				this.setState({ loading: false });
// 				// await API.graphql(graphqlOperation(Query.listPodcasts, {userSub:{userSub}}))
// 				// .then(podcastData => {
// 				//     let podcast = {...podcastData.data.listPodcasts.items[0]};
// 				//     this.setState({ podcast, accountType:formType, loading:false });
// 				// })
// 				// .catch(err => console.error(err));
// 				break;
// 			case 'SHOW':
// 				await API.graphql(
// 					graphqlOperation(Query.listShows, { userSub: { userSub } })
// 				)
// 					.then(showData => {
// 						let show = { ...showData.data.listShows.items[0] };
// 						let { showProfilePic } = show;
// 						this.setState(state => ({
// 							show,
// 							userProfilePic: showProfilePic,
// 							accountType: formType,
// 							loading: false
// 						}));
// 					})
// 					.catch(err => console.error(err));
// 				break;
// 			default:
// 				console.error('incorrect form');
// 				return;
// 		}
// 	};

// 	uploadMediaToS3 = async (e, imageType) => {
// 		let { userSub, accountType } = this.state;
// 		let file = e.target.files[0];
// 		let { name } = file;
// 		let imagePath = 'public/' + accountType + '/' + userSub + '/';
// 		await Storage.put(name, file, {
// 			customPrefix: { public: imagePath },
// 			metadata: { albumid: '9ab68365-e58e-4287-8a11-4fda43ea25aa' },
// 			progressCallback(progress) {
// 				let percentLoaded = 100 * (progress.loaded / progress.total).toFixed(2);
// 				console.log('Loaded: ', `${percentLoaded}`);
// 				this.setState(() => ({ percentLoaded }));
// 			}
// 		}).catch(err => console.error(err));

// 		if (imageType === 'profile') {
// 			switch (accountType) {
// 				case 'USER':
// 					let userId = this.state.id;
// 					let userProfilePic = 'USER' + '/' + userSub + '/' + name;
// 					await API.graphql(
// 						graphqlOperation(Mutation.updateUser, {
// 							input: { id: userId, userProfilePic }
// 						})
// 					)
// 						.then(updatedUser => {
// 							let { userProfilePic } = { ...updatedUser.data.updateUser };
// 							this.setState(state => ({ userProfilePic }));
// 						})
// 						.catch(err => console.error(err));
// 					break;
// 				case 'BOXER':
// 					let boxerId = this.state.boxer.id;
// 					let boxerProfilePic = accountType + '/' + userSub + '/' + name;
// 					await API.graphql(
// 						graphqlOperation(Mutation.updateBoxer, {
// 							input: { id: boxerId, boxerProfilePic }
// 						})
// 					)
// 						.then(updatedBoxer => {
// 							let { boxerProfilePic } = { ...updatedBoxer.data.updateBoxer };
// 							this.setState(state => ({ userProfilePic: boxerProfilePic }));
// 						})
// 						.catch(err => console.error(err));
// 					break;
// 				case 'GYM':
// 					let gymId = this.state.gym.id;
// 					let gymProfilePic = accountType + '/' + userSub + '/' + name;
// 					await API.graphql(
// 						graphqlOperation(Mutation.updateGym, {
// 							input: { id: gymId, gymProfilePic }
// 						})
// 					)
// 						.then(updatedGym => {
// 							let { gymProfilePic } = { ...updatedGym.data.updateGym };
// 							this.setState(state => ({ userProfilePic: gymProfilePic }));
// 						})
// 						.catch(err => console.error(err));
// 					break;
// 				case 'SHOW':
// 					let showId = this.state.show.id;
// 					let showProfilePic = accountType + '/' + userSub + '/' + name;
// 					await API.graphql(
// 						graphqlOperation(Mutation.updateShow, {
// 							input: { id: showId, showProfilePic }
// 						})
// 					)
// 						.then(updatedShow => {
// 							let { showProfilePic } = { ...updatedShow.data.updateShow };
// 							console.log('showProfielPic: ', showProfilePic);
// 							this.setState(state => ({ userProfilePic: showProfilePic }));
// 						})
// 						.catch(err => console.error(err));
// 					break;
// 				default:
// 					console.log('image error');
// 					return;
// 			}
// 		}
// 	};
// 	//url for profileImg. 'https://s3.amazonaws.com/boxers/public/USER/0d88ebda-6fe1-42c6-ae54-4584cc8b7cc1/pexels-1181413.jpg';

// 	getClientImages = async (userSub, accountType) => {
// 		let imagesPath = accountType + '/' + userSub + '/';
// 		await Storage.list(imagesPath)
// 			.then(s3Images => this.setState(state => ({ s3Images })))
// 			.catch(err => console.log(err));
// 	};

// 	setProfileImg = async (path, id) => {
// 		await API.graphql(graphqlOperation(Mutation.updateUser, { input: { id } }))
// 			.then(updatedUser => this.setState({ userProfileImg: path }))
// 			.catch(err => console.error(err));
// 	};

// 	handleProfilePicSelect() {
// 		this.setState(state => ({
// 			setProfilePic: !state.setProfilePic
// 		}));
// 	}
// 	handleProfileDelete = type => {
// 		console.log('type: ', type);
// 		let { id } = this.state;
// 		switch (type) {
// 			case 'BOXER':
// 				API.graphql(graphqlOperation(Mutation.deleteBoxer(id)))
// 					.then(res => console.log('Boxer profile deleted!'))
// 					.then(state =>
// 						this.setState({
// 							boxer: {},
// 							id: null,
// 							userSub: null,
// 							username: null
// 						})
// 					)
// 					.catch(err => console.error(err));
// 				break;
// 			case 'GYM':
// 				API.graphql(graphqlOperation(Mutation.deleteGym(id)))
// 					.then(res => console.log('Gym profile deleted!'))
// 					.then(state =>
// 						this.setState({ gym: {}, id: null, userSub: null, username: null })
// 					)
// 					.catch(err => console.error(err));
// 				break;
// 			case 'SHOW':
// 				API.graphql(graphqlOperation(Mutation.deleteShow(id)))
// 					.then(res => console.log('Show profile deleted!'))
// 					.then(state =>
// 						this.setState({ show: {}, id: null, userSub: null, username: null })
// 					)
// 					.catch(err => console.error(err));
// 				break;
// 			case 'USER':
// 				API.graphql(graphqlOperation(Mutation.deleteUser(id)))
// 					.then(res => console.log('User profile deleted!'))
// 					.then(state =>
// 						this.setState({ id: null, userSub: null, username: null })
// 					)
// 					.catch(err => console.error(err));
// 				break;
// 			default:
// 				console.error('No case in handleProfileDelete!');
// 				return;
// 		}
// 	};

// 	handlePicSelect(index) {
// 		console.log('index: ', index);
// 		this.setState({ activeIndex: index });
// 	}

// 	render() {
// 		let options = [
// 			{ value: 'ARTICLE', label: 'Publish an Article', type: 'Article' },
// 			{ value: 'BOXER', label: 'Create a Boxer Profile', type: 'Boxer' },
// 			{ value: 'GYM', label: 'Create a Gym Profile', type: 'Gym' },
// 			{
// 				value: 'PODCAST',
// 				label: 'Publish a Video or Audio Podcast',
// 				type: 'Podcast'
// 			},
// 			{ value: 'SHOW', label: 'Post a Show', type: 'Show' }
// 			// {value: "USER",label:"Your Profile Info",type: "User" },
// 		];

// 		let {
// 			percentLoaded,
// 			activeIndex,
// 			profilePic,
// 			setProfilePic,
// 			s3Images,
// 			articles,
// 			boxer,
// 			gym,
// 			show,
// 			userProfilePic,
// 			username,
// 			loading,
// 			accountType,
// 			userTypeSelectOption
// 		} = this.state;
// 		let {
// 			userEmail,
// 			userFirstName,
// 			userLastName,
// 			userDisplayName,
// 			id,
// 			followers,
// 			following,
// 			reminders
// 		} = this.state.user && this.state.user.userEmail ? this.state.user : {};
// 		let { userSub } = this.state.userSub ? this.state : '';

// 		let user = {
// 			userSub,
// 			userDisplayName,
// 			userEmail,
// 			userFirstName,
// 			userLastName,
// 			id,
// 			username,
// 			accountType,
// 			userProfilePic,
// 			profilePic
// 		};

// 		let boxerInfo = userSub && boxer.boxerFirstName ? boxer : null;
// 		let gymInfo = userSub && gym.gymName ? gym : null;
// 		let showInfo = userSub && show.showTitle ? show : null;
// 		let userInfo = userSub && userDisplayName ? user : null;
// 		let userArticles = userSub && articles.length > 0 ? articles : null;
// 		let profileImages =
// 			userSub && s3Images && s3Images.length > 0 ? s3Images : null;
// 		let userPic = 'https://boxers.s3.amazonaws.com/public/' + userProfilePic;
// 		// console.log('percentLoaded: ', this.state.percentLoaded);
// 		return (
// 			<>
// 				<div className="dashboard-page-wrapper">
// 					<h1>Welcome, {username}</h1>
// 					{loading && <div className="loader">{loader}</div>}
// 					<div style={{ width: '50%', margin: 'auto' }}>
// 						<Select
// 							onChange={this.handleSelectChange}
// 							value={userTypeSelectOption}
// 							options={options}
// 						/>
// 					</div>
// 					<div className="dashboard-main">
// 						<div className="dashboard-user-info">
// 							<h1>Your Profile </h1>
// 							<div className="dashboard-profile-pic">
// 								{userProfilePic ? (
// 									<Image src={userPic} bordered />
// 								) : (
// 									<Image
// 										style={{ display: 'block', margin: 'auto' }}
// 										src={Boxer}
// 									/>
// 								)}
// 								<h2>Profile Picture</h2>
// 								<Form.Button
// 									onClick={() => {
// 										document.getElementById('profile-file-input').click();
// 										this.handleProfilePicSelect();
// 									}}
// 									disabled={loading}
// 									icon="file image outline"
// 									content={
// 										loading ? 'Uploading...' : 'Update Your Profile Image'
// 									}
// 								/>
// 								<input
// 									id="profile-file-input"
// 									type="file"
// 									accept="image/*"
// 									onChange={e => this.uploadMediaToS3(e, 'profile')}
// 									style={{ display: 'none' }}
// 								/>
// 							</div>
// 							{userInfo && (
// 								<Forms.UserForm
// 									userInfo={userInfo}
// 									handleDashboardPutForms={this.handleDashboardPutForms}
// 								/>
// 							)}
// 							<div className="dashboard-widgets">
// 								<div className="dashboard-following">
// 									<h2>You are Following:</h2>
// 									{this.state.user.following &&
// 									this.state.user.following.length > 0
// 										? this.state.user.following.map((el, i) => {
// 												return (
// 													<ul key={i}>
// 														<li key={i}>{el}</li>
// 													</ul>
// 												);
// 										  })
// 										: 'null'}
// 								</div>
// 								<div className="dashboard-followers">
// 									<h2>Your Followers</h2>
// 									{this.state.user.followers &&
// 									this.state.user.followers.length > 0
// 										? this.state.user.followers.map((el, i) => {
// 												return (
// 													<ul key={i}>
// 														<li key={i}>{el}</li>
// 													</ul>
// 												);
// 										  })
// 										: 'null'}
// 								</div>
// 								<div className="dashboard-reminders">
// 									<h2>Your Reminders</h2>
// 									{this.state.user.reminders &&
// 									this.state.user.reminders.length > 0
// 										? this.state.user.reminders.map((el, i) => {
// 												return (
// 													<ul key={i}>
// 														<li key={i}>{el}</li>
// 													</ul>
// 												);
// 										  })
// 										: 'You have no reminders set.'}
// 								</div>
// 							</div>
// 						</div>
// 						<div className="dashboard-media">
// 							<Media
// 								percentLoaded={percentLoaded}
// 								loading={loading}
// 								activeIndex={activeIndex}
// 								handlePicSelect={this.handlePicSelect}
// 								handleProfilePicSelect={this.handleProfilePicSelect}
// 								profileImages={profileImages}
// 								userInfo={user}
// 								setProfilePic={setProfilePic}
// 								uploadMediaToS3={this.uploadMediaToS3}
// 								profilePic={profilePic}
// 							/>
// 						</div>
// 					</div>
// 					<div className="dashboard-forms">
// 						{userArticles && userTypeSelectOption === 'ARTICLE' ? (
// 							<Editor
// 								userInfo={userInfo}
// 								articles={userArticles}
// 								handleProfileDelete={this.handleProfileDelete}
// 							/>
// 						) : null}
// 						{boxerInfo && userTypeSelectOption === 'BOXER' ? (
// 							<Forms.BoxerForm
// 								userInfo={userInfo}
// 								boxerInfo={boxerInfo}
// 								handleDashboardPutForms={this.handleDashboardPutForms}
// 								handleProfileDelete={this.handleProfileDelete}
// 							/>
// 						) : null}
// 						{gymInfo && userTypeSelectOption === 'GYM' ? (
// 							<Forms.GymForm
// 								userInfo={userInfo}
// 								gymInfo={gymInfo}
// 								handleDashboardPutForms={this.handleDashboardPutForms}
// 								handleProfileDelete={this.handleProfileDelete}
// 							/>
// 						) : null}
// 						{showInfo && userTypeSelectOption === 'SHOW' ? (
// 							<Forms.ShowForm
// 								userInfo={userInfo}
// 								showInfo={showInfo}
// 								handleDashboardPutForms={this.handleDashboardPutForms}
// 								handleProfileDelete={this.handleProfileDelete}
// 							/>
// 						) : null}

// 						{userTypeSelectOption === 'PODCAST' && (
// 							<h1>Podcast Support will be here shortly!</h1>
// 						)}
// 						{/* <Forms.PodcastForm 
//                         userInfo={userInfo}
//                         podcastInfo={podcastInfo}
//                         handleDashboardPutForms={this.handleDashboardPutForms}
//                         handleProfileDelete={this.handleProfileDelete}
//                     /> : null} */}
// 					</div>
// 				</div>
// 			</>
// 		);
// 	}
// }

// export default Dashboard;
// // export default withAuthenticator(Dashboard, { federated });
