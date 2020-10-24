import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Input from '../Input/Input.js'
import Button from '../Button/Button.js'
import './SignInForm.sass'
import '../../App.sass'

const SignInForm = ({ onCancel }) => {
	const [name, setName] = useState('')
	const [nameValid, setNameValid] = useState(false)
	const [password, setPassword] = useState('')
	const [passwordValid, setPasswordValid] = useState(false)
	const [formInputs, setformInputs] = useState({ name: true, password: true })
	const [formValid, setformValid] = useState(false)

	const valueToState = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		switch (name) {
			case 'name':
				setName(value)
				setNameValid(value.length > 2)
				break
			case 'password':
				setPassword(value)
				setPasswordValid(value.length > 6)
				break
			default:
				break
		}
	}

	const submitForm = (e) => {
		e.preventDefault();
		setformInputs({
			...formInputs,
			name: nameValid,
			password: passwordValid,
		})
		setformValid(nameValid && passwordValid)
	}

	return (
		<form className="user-sign-form" onSubmit={submitForm}>
			<label htmlFor="userSignInName" className={`user-sign-form__label ${formInputs.name ? '' : 'error-text'}`}>{formInputs.name ? 'Enter name' : 'Enter more than 2 characters'}</label>
			<Input type="text" name="name" id="userSignInName" customClass={`user-sign-form__input`} inputStyle='input__dark' value={name} onChange={valueToState} />
			<label htmlFor="userSignInPassword" className={`user-sign-form__label ${formInputs.password ? '' : 'error-text'}`}>{formInputs.password ? 'Enter password' : 'Enter more than 6 characters'}</label>
			<Input type="password" name="password" id="userSignInPassword" customClass={`user-sign-form__input`} inputStyle='input__dark' value={password} onChange={valueToState} />
			<Button type={'submit'} customClass="" buttonStyle="button__dark">Subscribe</Button>
			{formValid &&
				<>
					<Redirect to="/sign-in" />
					{onCancel()}
				</>
			}
		</form>
	)
}

export default SignInForm
