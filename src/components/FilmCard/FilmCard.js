import React from 'react'
import './FilmCard.css'
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa6";

export default function FilmCard(props) {
  return (
    <div className='FilmPage'>
        <Card className='filmCardContainer'>
            <Card.Img className='filmImages' src={props.image} />
            <Card.Body className='singleCard'>
                <li className='name'>{props.name}</li>
                <li className='rate'>
                    <FaStar/>
                    <div className="rateBody">{props.imdbRate}</div> 
                </li>
            </Card.Body>
        </Card>
    </div>
  )
}
