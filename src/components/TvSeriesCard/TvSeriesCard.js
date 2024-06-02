import React from 'react'
import './TvSeriesCard.css'
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa6";

export default function TvSeriesCard(props) {
  return (
    <div className='tvSeriesPage'>
        <Card className='tvSeriesCardContainer'>
            <Card.Img className='tvSeriesImages' src={props.image} />
            <Card.Body className='singleCard'>
                <li className='name'>{props.name}</li>
                <li className='rate'>
                    <FaStar/>
                    <div className="rateBody">{props.imdbRate}</div> 
                </li>
                <li className='noOfSE'>{props.noOfSeasons} Seasons & {props.noOfEpisods} episods.</li>
            </Card.Body>
        </Card>
    </div>
  )
}
