import React, { useState } from 'react'
import Button from '../Button/Button.js'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWalking } from '@fortawesome/free-solid-svg-icons/faWalking'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import '../../App.sass'
import '../Footer/Footer.sass'
const footerLinks = [{
	title: 'About Us',
	links: [{ name: 'How it works', link: '/', internalLink: true }, { name: 'Testomonials', link: '/', internalLink: true }, { name: 'Careers', link: '/', internalLink: true }, { name: 'Investors', link: '/', internalLink: true }, { name: 'Terms of Service', link: '/', internalLink: true }]
},
{
	title: 'Contact Us',
	links: [{ name: 'Contact', link: '/', internalLink: true }, { name: 'Support', link: '/', internalLink: true }, { name: 'Destinations', link: '/', internalLink: true }, { name: 'Sponsorships', link: '/', internalLink: true }]
},
{
	title: 'Videos',
	links: [{ name: 'Submit Video', link: '/', internalLink: true }, { name: 'Ambassadors', link: '/', internalLink: true }, { name: 'Agency', link: '/', internalLink: true }, { name: 'Influencer', link: '/', internalLink: true }]
},
{
	title: 'Videos',
	links: [{ name: 'Instagram', link: 'https://www.instagram.com/', internalLink: false }, { name: 'Facebook', link: 'https://uk-ua.facebook.com/', internalLink: false }, { name: 'Youtube', link: 'https://www.youtube.com/', internalLink: false }, { name: 'Twitter', link: 'https://twitter.com/?lang=en', internalLink: false }]
}]
const socialLinks = [{
	title: 'Facebook',
	link: 'https://uk-ua.facebook.com/',
	icon: <FontAwesomeIcon icon={faFacebook} />
}, {
	title: 'Instagram',
	link: 'https://www.instagram.com/',
	icon: <FontAwesomeIcon icon={faInstagram} />
}, {
	title: 'Youtube',
	link: 'https://www.youtube.com/',
	icon: <FontAwesomeIcon icon={faYoutube} />
}, {
	title: 'Twitter',
	link: 'https://twitter.com/?lang=en',
	icon: <FontAwesomeIcon icon={faTwitter} />
}, {
	title: 'Linkedin',
	link: 'https://www.linkedin.com/feed/',
	icon: <FontAwesomeIcon icon={faLinkedin} />
}]

function Footer() {
	const logoIcon = <FontAwesomeIcon icon={faWalking} />
	const [name, setName] = useState('')
	const [nameValid, setnameValid] = useState(false)
	const [email, setEmail] = useState('')
	const [emailValid, setemailValid] = useState(false)
	const [formInputs, setformInputs] = useState({ email: false, name: false })
	const [formValid, setformValid] = useState(false)

	const valueToState = (e) => {
		const targetName = e.target.name;
		const targetValue = e.target.value;
		switch (targetName) {
			case 'email':
				setEmail(targetValue)
				setemailValid(targetValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))
				break
			case 'name':
				setName(targetValue)
				setnameValid(targetValue.length >= 2)
				break
			default:
				break
		}
		validateForm()
	}

	const validateForm = () => {
		setformValid(nameValid && emailValid)
	}

	const submitForm = (e) => {
		e.preventDefault();
		setformInputs({
			...formInputs,
			name: !nameValid,
			email: !emailValid,
		})
	}

	return (
		<div className="footer">
			<div className="footer__container">
				<p className="footer__title">Lorem ipsum dolor sit amet consectetur</p>
				<div className="footer__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cupiditate deleniti voluptate quaerat perferendis tenetur alias dolore, placeat sit? Et animi neque placeat hic nulla voluptates excepturi repellendus. Laborum, nihil.</div>
				<form onSubmit={submitForm} className="footer__form">
					<input type="text" name="name" placeholder="Your Name" className={`footer__input ${formInputs.name ? 'error-input' : ''}`} onChange={valueToState} value={name} />
					<input type="email" name="email" placeholder="Your Email" className={`footer__input ${formInputs.email ? 'error-input' : ''}`} onChange={valueToState} value={email} />
					<Button type={'submit'} customClass="footer__button" buttonStyle="button__outline">Subscribe</Button>
				</form>
				<div className="footer__link-blocks">
					{
						footerLinks.map((elem, index) => {
							return (
								<div key={index} className="footer__link-block link-block">
									<div className="link-block__title">{elem.title}</div>
									<ul className="link-block__links">
										{
											elem.links.map((linkItem, index) => {
												if (linkItem.internalLink) {
													return <li key={index} className="link-block__link"><Link to={linkItem.link} >{linkItem.name}</Link></li>
												}
												return <li key={index} className="link-block__link"><a href={linkItem.link} target="_blank" rel="noopener noreferrer">{linkItem.name}</a></li>
											})
										}
									</ul>
								</div>
							)
						})
					}
				</div>
				<div className="footer__social-media">
					<Link to="/" className="footer__logo">
						TRVL{logoIcon}
					</Link>
					<div className="footer__rights">
						TRVL © 2020
					</div>
					<div className="footer__media-links">
						{
							socialLinks.map((elem, index) => {
								return <a key={index} href={elem.link} target="_blank" rel="noopener noreferrer" className="footer__media-link">{elem.icon}</a>
							})
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer