import React from 'react';
import Card1 from './images/card1.jpg'

const Card = ({name, email, Card}) => {
    return (
        <div className='fl w-25 tc w-20 bg-light-blue dib br1 pa1 ma2 bw2 shadow-4'>
            <img alt='ball' src={Card1} />         
        <div>
            <h2>test test test</h2>
            <p>{email}</p>
         </div>
        </div> 
    )
}

export default Card;