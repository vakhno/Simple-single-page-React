import React from 'react'
import '../../App.sass'
import GreetSection from '../GreetSection/GreetSection.js'
import Cards from '../Cards/Cards.js'
import Footer from '../Footer/Footer.js'

function Home() {
	return (
		<>
			<GreetSection />
			<Cards />
			<Footer />
		</>
	)
}

export default Home