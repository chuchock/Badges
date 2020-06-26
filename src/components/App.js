import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './styles/App.css';

import Layout from './Layout';
import Home from '../pages/Home';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/badges" component={Badges} />
					<Route exact path="/badges/new" component={BadgeNew} />
					{/* <Route component={NotFound} /> */}
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
