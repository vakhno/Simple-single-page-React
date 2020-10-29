import React from 'react'
import './ErrorPage.sass'

function ErrorPage() {
	return (
		<div className="error404">
			<img className='error404__image' src={process.env.PUBLIC_URL + "/images/404.png"} alt="" />
		</div>
	)
}

export default ErrorPage
