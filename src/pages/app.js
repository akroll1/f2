import React from 'react';
import {Router} from '@reach/router'
import Layout from '../components/layout'
import Home from './home';
import News from './news';
// import Boxers from '../Boxers';
// import About from '../../Components/About';
// import GymsPage from '../Gyms';
// import LivePage from '../Live';
// import ShowsPage from '../Shows';
// import Show from '../Shows/Show';
// import Article from '../Articles/Article';
// import Dashboard from '../Dashboard';
// import Books from '../Books';
// import AdminDashboard from '../../Admin/AdminDashboard';
// import NotFound from '../../Components/NotFound';
// import Api from '../../Components/API/Api';
// import ReactGA from 'react-ga';

const App = () => (
	<Layout>
		<Router>
			<Home exact path="/home" />
			<News exact path="/news" />
			{/*<Boxers exact path="/boxers" />
			<LivePage exact path="/live" />
			<About exact path="/about" />
			<GymsPage exact path="/gyms" />
			<ShowsPage exact path="/shows" />
			<Article exact path="/article/:article" />
			<Show exact path="/shows/:show" />
			<Books exact path="/books" />
			<Books exact path="/book/:book" />
			<Api exact path="/api" />
			<Dashboard exact path="/api/dashboard" />
			<AdminDashboard exact path="/api/dashboard/admin/videoform" />
			<NotFound path="*" /> */}
		</Router>
	</Layout>
);
export default App;
