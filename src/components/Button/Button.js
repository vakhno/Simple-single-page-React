import React from 'react'
import './Button.sass'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Button = ({ customClass, buttonStyle, buttonSize, linkTo, children, onClick, type }) => {
	if (linkTo) {
		return <Link to={linkTo} className={`button ${customClass} ${buttonStyle} ${buttonSize}`}>{children}</Link>
	}
	return <button type={type} className={`button ${customClass} ${buttonStyle} ${buttonSize}`} onClick={onClick}>{children}</button>
}

Button.propTypes = {
	customClass: PropTypes.string,
	buttonStyle: PropTypes.string,
	buttonSize: PropTypes.string,
	children: PropTypes.string,
	linkTo: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.string,
}

Button.defaultProps = {
	onClick: () => { },
	buttonStyle: 'button__primary',
	buttonSize: 'button__medium',
	children: '',
	type: 'button'
}

export default Button