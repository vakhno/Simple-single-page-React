import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './CardItem.sass'

const CardItem = ({ customClass, imageSrc, children, label, linkTo }) => {
	return (
		<Link to={linkTo} className={`card__item-link card ${customClass}`}>
			<figure className="card__item-pic-wrap" data-category={label}>
				<img src={process.env.PUBLIC_URL + imageSrc} alt="TravelImage" className="card__item-img" />
			</figure>
			<div className="card__item-info">
				<h5 className="card__item-text">{children}</h5>
			</div>
		</Link>
	)
}

CardItem.propTypes = {
	customClass: PropTypes.string,
	imageSrc: PropTypes.string,
	children: PropTypes.string,
	label: PropTypes.string,
	linkTo: PropTypes.string,
}

CardItem.defaultProps = {
	imageSrc: '/images/img-default.png',
	label: 'Other',
	linkTo: '/',
	children: '',
}

export default CardItem