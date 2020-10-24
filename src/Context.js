import React, { createContext, useState } from 'react'

export const signModal = createContext()

const ContextProvider = () => {
	const [openedSignModal, setOpenedSignModal] = useState(false)

	const openModal = () => {
		setOpenedSignModal(true)
	}

	const closeModal = () => {
		setOpenedSignModal(false)
	}

	return (
		<signModal.Provider value={openedSignModal, openModal, closeModal} >
			{children}
		</signModal.Provider>
	)
}

export default ContextProvider