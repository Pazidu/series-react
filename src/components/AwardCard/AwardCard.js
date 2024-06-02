import React from 'react'
import './AwardCard.css';
import Card from 'react-bootstrap/Card';

export default function AwardCard(props) {
  return (
    <div className='tvSeriesPage'>
        <a className='linkText' href={props.link}>
          <Card className='tvSeriesCardContainer'>
              <Card.Img className='tvSeriesImages' src={props.image} />
              <Card.Body className='singleCard'>
                  {props.description}
              </Card.Body>
          </Card>
        </a>
    </div>
  )
}
