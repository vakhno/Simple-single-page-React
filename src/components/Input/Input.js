import React from 'react'
import './Input.sass'
import PropTypes from 'prop-types'

const Input = ({ customClass, id, inputStyle, type, name, placeholder, onChange, value }) => {
	return <input type={type} name={name} placeholder={placeholder} id={id} className={`${customClass} ${inputStyle}`} onChange={onChange} value={value} />
}

Input.propTypes = {
	customClass: PropTypes.string,
	id: PropTypes.string,
	inputStyle: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
}

Input.defaultProps = {
	onChange: () => { },
	inputStyle: 'input__primary',
	type: 'text',
	id: '',
	name: '',
	placeholder: '',
	value: '',
}

export default Input