import React from 'react'
import CardItem from '../CardItem/CardItem.js'
import './Cards.sass'
const cardLines = [{
	cardItems: [{
		image: '/images/img-9.jpg',
		description: 'Explore the hidden waterfall deep inside the Amazon',
		label: 'Adventure',
		link: '/'
	}, {
		image: '/images/img-2.jpg',
		description: 'Travel throight the Island of Bali',
		label: 'Luxury',
		link: '/'
	}]
}, {
	cardItems: [{
		image: '/images/img-9.jpg',
		description: 'Explore the hidden waterfall deep inside the Amazon',
		label: 'Adventure',
		link: '/'
	}, {
		image: '/images/img-2.jpg',
		description: 'Travel throight the Island of Bali',
		label: 'Luxury',
		link: '/'
	}, {
		image: '/images/img-2.jpg',
		description: 'Travel throight the Island of Bali',
		label: 'Luxury',
		link: '/'
	}]
}]

function Cards() {
	return (
		<div className='cards'>
			<div className="cards__container">
				<h1 className="cards__title">Check out rhse EPIC Destinations!</h1>
				{
					cardLines.map((line, index) => {
						return (
							<div key={index} className="cards__items">
								{
									line.cardItems.map((card, index) => {
										return <CardItem key={index} customClass={'cards__item'} imageSrc={card.image} label={card.label} linkTo={card.link}>{card.description}</CardItem>
									})
								}
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default Cards