import React from 'react';
import {Router} from '@reach/router'
import Layout from '../components/layout'
import Home from './home';
import News from './news';
import Live from './live';
import Boxers from './boxers';
// import About from '../../Components/About';
// import GymsPage from '../Gyms';
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
			<Home exact path="/" />
			<News exact path="/news" />
			<Live exact path="/live" />
			<Boxers exact path="/boxers" />
			{/*<About exact path="/about" />
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
