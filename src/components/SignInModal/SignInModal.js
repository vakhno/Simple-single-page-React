import React from 'react'
import Portal from '../Portal/Portal.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'
import SignInForm from '../SignInForm/SignInForm.js'
import './SignInModal.sass'

function SignInModal({ isOpen, onCancel, onSubmit, children }) {
	const closeModal = <FontAwesomeIcon icon={faTimes} onClick={onCancel} />

	return (
		<>
			{ isOpen &&
				< Portal >
					<div className="sign-in-window">
						<div className="sign-in-window__content">
							<div className="sign-in-window__header">
								{closeModal}
							</div>
							<div className="sign-in-window__body">
								<h2 className="sign-in-window__title">
									Sign In
								</h2>
								<SignInForm onCancel={onCancel} />
							</div>
							<div className="sign-in-window__footer">
							</div>
						</div>
					</div>
				</Portal >
			}
		</>
	)
}

export default SignInModal