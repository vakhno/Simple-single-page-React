import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button.js'
import SignInModal from '../SignInModal/SignInModal.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faWalking } from '@fortawesome/free-solid-svg-icons/faWalking'
import './Navbar.sass'
const navItems = [{
	pathTo: '/',
	title: 'Home',
}, {
	pathTo: '/services',
	title: 'Services',
}, {
	pathTo: '/products',
	title: 'Products',
}]

function Navbar() {
	const closeBurgerIcon = <FontAwesomeIcon icon={faTimes} />
	const menuBurgerIcon = <FontAwesomeIcon icon={faBars} />
	const logoIcon = <FontAwesomeIcon icon={faWalking} />
	const [isMenuOpened, setIsMenuOpened] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const closeMobileMenu = () => setIsMenuOpened(false)
	const handleClick = () => setIsMenuOpened(!isMenuOpened)
	const showButton = () => {
		if (window.innerWidth >= 960) {
			setIsMenuOpened(false);
		}
	};
	const hideScroll = () => {
		if (!isMenuOpened) {
			document.body.style.overflow = 'visible'
		} else {
			document.body.style.overflow = 'hidden'
		}
	}

	useEffect(() => {
		hideScroll()
	});

	useEffect(() => {
		showButton()
	}, [])

	window.addEventListener('resize', showButton)

	return (
		<>
			<nav className='navbar'>
				<div className='navbar__container'>
					<Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
						TRVL{logoIcon}
					</Link>
					<div className="navbar__icon" onClick={handleClick}>
						{isMenuOpened ? closeBurgerIcon : menuBurgerIcon}
					</div>
					<div className={isMenuOpened ? 'nav__menu active' : 'nav__menu'}>
						<ul className='nav__items'>
							{
								navItems.map((elem, index) => {
									return <li key={index} className="nav__item">
										<Link to={elem.pathTo} className="nav__links" onClick={closeMobileMenu}>{elem.title}</Link>
									</li>
								})
							}
						</ul>
						<Button buttonStyle='button__outline' onClick={() => { setIsOpen(!isOpen) }}>SIGN IN</Button>
						<SignInModal
							isOpen={isOpen}
							onCancel={() => { setIsOpen(false) }}
						>
						</SignInModal>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar