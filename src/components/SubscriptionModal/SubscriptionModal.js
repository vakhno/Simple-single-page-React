import React from 'react'
import Button from '../Button/Button.js'
import Portal from '../Portal/Portal.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'
import './SubscriptionModal.sass'

function SubscriptionModal({ isOpen, onCancel, onSubmit, children }) {
	const closeModal = <FontAwesomeIcon icon={faTimes} onClick={onCancel} />

	return (
		<>
			{ isOpen &&
				< Portal >
					<div className="sub-window">
						<div className="sub-window__content">
							<div className="sub-window__header">
								{closeModal}
							</div>
							<div className="sub-window__body">
								{children}
							</div>
							<div className="sub-window__footer">
								<Button type={'submit'} onClick={onCancel} customClass="sub-window__button" buttonStyle="button__dark">Ok</Button>
							</div>
						</div>
					</div>
				</Portal >
			}
		</>
	)
}

export default SubscriptionModal