import React from 'react'
import './PersonalViewHome.css'
import Navigation from '../../components/Navigation/Navigation'
import Slider from '../../components/Slider/Slider'
import TrailerCard from '../../components/TrailerCard/TrailerCard'
import ToWatchCard from '../../components/ToWatchCard/ToWatchCard'
import { Link } from 'react-router-dom';

export default function PersonalViewHome() {
  return (
    <div className='Home'>
        
        <Navigation 
          title='Pasindu'
          profilePic='./images/me.jpg'
          path='#'/>
        <Slider/>

        <div className="watchTrailersConteiner">
          <span className="watchTrailerTitle">
            Watch trailers
          </span>
          <TrailerCard/>
        </div>
        <div className="whatToWatchConteiner">
          <span className="whatToWatchTitle">
            What To Watch
          </span>
          <div className="toWatchCardsBar">
            <ToWatchCard
              link='./images/card1.jpg'
              cardTitle ='Daniel and Ana'
              idbmRate = '6.1'
              />
            <ToWatchCard
              link='./images/card2.jpg'
              cardTitle ='Unfaithful'
              idbmRate = '6.7'
              />
              <ToWatchCard
              link='./images/card4.jpg'
              cardTitle ='Antares'
              idbmRate = '6.1'
              />
              <ToWatchCard
              link='./images/card5.jpeg'
              cardTitle ='The Dreamers'
              idbmRate = '7.1'
              />
              <ToWatchCard
              link='./images/card6.jpeg'
              cardTitle ='Journal 64'
              idbmRate = '7.4'
              />
          </div>
          <div className="seeMoreButtonContainer">
            <Link to='/Watch'>
              <button className="seeMore">See More..</button>
            </Link>
          </div>
          

            
        </div>
    </div>
  )
}
