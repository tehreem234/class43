import React from 'react'
import HomeSlideCard from './HomeSlideCard';
import p2 from '../images/p2.jpeg';



const SlidingCards = () => {
    const slideCardsData = [];
    for (let i = 0; i < 4; i++) {
        let card = {
            image: p2,
            imgAltText: 'Person 1',
            personName: 'Tehreem',
            designation: 'CTO',
            badges: ['Product', 'Illustrator']
        }
        slideCardsData.push(card)
    }


    return (
        <div style={{ display: 'flex', gap: '10px', margin: '10px' }}>
            {
                slideCardsData.map((cardData, index) => (
                    <HomeSlideCard
                        key={index}
                        image={cardData.image}
                        imgAltText={cardData.imgAltText}
                        personName={cardData.personName}
                        designation={cardData.designation}
                        badges={cardData.badges}
                    />
                ))
            }
        </div>
    )
}

export default SlidingCards