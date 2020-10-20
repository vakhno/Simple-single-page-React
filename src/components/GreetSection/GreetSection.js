import React from 'react'
import '../../App.sass'
import Button from '../Button/Button.js'
import './GreetSection.sass'

function GreetSection() {
	return (
		<div className="greeting">
			<div className="greeting__container">
				<video src="/videos/video-2.mp4" autoPlay loop muted className="greeting__video" />
				<div className="greeting__content">
					<div className="greeting__info">
						<h1 className="greeting__title">ADVENTURE AWAITS</h1>
						<p className="greeting__subtitle">What are you waiting for?</p>
					</div>
					<div className="greeting__buttons">
						<Button customClass='greeting__button' buttonStyle='button__outline' buttonSize='button__large' linkTo="/sign-up">GET STARTED</Button>
						<Button customClass='greeting__button' buttonStyle='button__primary' buttonSize='button__large'>WATCH TRAILER <i className="far fa-play-circle" /></Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GreetSection