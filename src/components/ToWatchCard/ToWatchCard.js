import React from "react";
import './ToWatchCard.css'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa6";
import { IoPlayOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


export default function ToWatchCard(props) {
  return (
    <div>
      <Card className="toWatchCardProperties" bg="dark">
        <Card.Img src={props.link} className="toWatchImage"/>
        <Card.Body>
          <Card.Title>{props.cardTitle}</Card.Title>
          <Card.Text className="imdb">
          <FaStar/>
          <div className="imdbNumber">{props.idbmRate}</div>  
          </Card.Text>
            <Link to='/Login' className="addToListButton">+ Watchlist</Link>
          <div className="playTrailer">
            <Button className="playTrailerButton"><IoPlayOutline/> Trailer</Button>
         </div>
         
        </Card.Body>
      </Card>
    </div>



  ); 
}
