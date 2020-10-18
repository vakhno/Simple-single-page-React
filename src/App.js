import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.sass';
import Home from './components/pages/Home'
// import Services from './components/pages/Services'

function App() {
	return (
		<>
			<Router basename="/Simple-single-page-React">
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home} />
					{/* <Route path='/services' exact component={Services} /> */}
				</Switch>
			</Router>
		</>
	);
}

export default App;
