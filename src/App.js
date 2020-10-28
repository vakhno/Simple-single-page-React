import React from 'react'
import Navbar from './components/Navbar/Navbar.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.sass'
import Home from './components/pages/Home'
import SignIn from './components/pages/signIn'
import error404 from './components/pages/error404'

function App() {
	return (
		<Router basename="/Simple-single-page-React">
			<Navbar />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/sign-in' exact component={SignIn} />
				<Route component={error404} />
			</Switch>
		</Router>
	)
}

export default App