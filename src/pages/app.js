import React from 'react';
import {Switch, Route, useLocation} from 'react-router-dom'
import Layout from '../components/layout'
import Home from './home';
import News from './news';
import Live from './live';
import Boxers from './boxers';
import Dashboard from './dashboard';
import NotFound from './not-found';
import { animated, useTransition } from "react-spring";
import TagManager from 'react-gtm-module'

// import About from '../../Components/About';
// import GymsPage from '../Gyms';
// import ShowsPage from '../Shows';
// import Show from '../Shows/Show';
// import Article from '../Articles/Article';
// import Books from '../Books';
// import AdminDashboard from '../../Admin/AdminDashboard';
// import Api from '../../Components/API/Api';
// import ReactGA from 'react-ga';
const tagManagerArgs = {
    gtmId: 'GTM-WCHF53X'
};
TagManager.initialize(tagManagerArgs)

const App = () => {
	const location = useLocation();

	return (
		<Layout>
			<Switch location={location}>
				<Route exact path="/" component={Home} />
				<Route exact path="/news" component={News} />
				<Route exact path="/boxers" component={Boxers} />
				<Route exact path="/live" component={Live} />
				<Dashboard exact path="/api/dashboard" />
				{/*<About exact path="/about" />
				<GymsPage exact path="/gyms" />
				<ShowsPage exact path="/shows" />
				<Article exact path="/article/:article" />
				<Show exact path="/shows/:show" />
				<Books exact path="/books" />
				<Books exact path="/book/:book" />
				<Api exact path="/api" />
				<AdminDashboard exact path="/api/dashboard/admin/videoform" />
				*/}
				<Route path="*" component={NotFound}/> 
			</Switch>
		</Layout>
	)
};
export default App;
