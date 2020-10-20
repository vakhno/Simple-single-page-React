import React from 'react'
import '../../App.sass'
import Footer from '../Footer/Footer.js'
import ErrorPage from '../ErrorPage/ErrorPage.js'

function Home() {
	return (
		<>
			<ErrorPage />
			<Footer />
		</>
	)
}

export default Home