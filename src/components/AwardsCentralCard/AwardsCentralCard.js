import React from 'react'
import './AwardsCentralCard.css';

export default function AwardsCentralCard(props) {
  return (
    <div>
        <div className="cardContainer">
            <div className="cardBody">
                <p className='titleCC'>{props.title}</p>
                <p className='description'>{props.description}</p>
            </div>
            <div className="cardImage">
                <a href={props.link}>
                    <img src={props.image} className='imageCC'/>
                </a>
            </div>
        </div>

    </div>
  )
}
