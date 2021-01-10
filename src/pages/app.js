import React from 'react';
import {Switch, Route, useLocation} from 'react-router-dom'
import Layout from '../components/layout'
import Home from './home';
import News from './news';
import Live from './live';
import Boxers from './boxers';
import { animated, useTransition } from "react-spring";

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

const App = () => {
	const location = useLocation();

	const transitions = useTransition(location, location => location.pathname, {
		// from: { opacity: 0, width: "100%" },
		enter: { opacity: 1, width: "100%" },
		leave: { opacity: 0, width: "0%" }
	});
	return (
		<Layout>
			{transitions.map(({ item: location, props, key }) => (
				<animated.div style={props} key={key}>
					<Switch location={location}>
						<Route exact path="/" component={Home} />
						<Route exact path="/news" component={News} />
						<Route exact path="/boxers" component={Boxers} />
						<Route exact path="/live" component={Live} />
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
					</Switch>
				</animated.div>
			))}	
		</Layout>

	)
					};
export default App;
