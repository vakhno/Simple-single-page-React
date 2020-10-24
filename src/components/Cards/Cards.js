import React from 'react'
import CardItem from '../CardItem/CardItem.js'
import './Cards.sass'
import * as CardsLines from '../../CardLines.json'

function Cards() {

	return (
		<div className='cards'>
			<div className="cards__container">
				<h1 className="cards__title">Check out rhse EPIC Destinations!</h1>
				{
					CardsLines.default.map((line, index) => {
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