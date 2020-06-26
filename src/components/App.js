import React from 'react';

import './styles/App.css';

import Navbar from './Navbar';
import Home from '../pages/Home';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Home />
		</BrowserRouter>
	);
}

export default App;
