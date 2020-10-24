import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Input from '../Input/Input.js'
import Button from '../Button/Button.js'
import './SignInForm.sass'

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
			<Input type="text" name="name" placeholder="Your Name" customClass={`user-sign-form__input ${formInputs.name ? '' : 'error-input'}`} inputStyle='input__dark' value={name} onChange={valueToState} />
			<Input type="password" name="password" placeholder="Your Password" customClass={`user-sign-form__input ${formInputs.password ? '' : 'error-input'}`} inputStyle='input__dark' value={password} onChange={valueToState} />
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
