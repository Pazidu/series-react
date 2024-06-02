import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import ToWatchCard from '../../components/ToWatchCard/ToWatchCard'
import './Watch.css';

export default function Watch() {
  return (
    <div>
        <Navigation 
          title='Login'
          profilePic='./images/profile.webp'
          path='/Login'/>
          
        <div className="toWatchCardContainerRow1">
          <ToWatchCard
            link='./images/card7.jpg'
            cardTitle ='Adore'
            idbmRate = '6.2'/>
          <ToWatchCard
            link='./images/card8.jpg'
            cardTitle ='The Piano Teacher'
            idbmRate = '7.5'/>
          <ToWatchCard
            link='./images/card10.jpg'
            cardTitle ='The War Zone'
            idbmRate = '7.2'/>
          <ToWatchCard
            link='./images/card11.jpeg'
            cardTitle ='Irreversible'
            idbmRate = '7.3'/>
          <ToWatchCard
            link='./images/card12.jpg'
            cardTitle ='After the Wedding'
            idbmRate = '7.7'/>
        </div>
        <div className="toWatchCardContainerRow2">
          <ToWatchCard
              link='./images/card13.jpeg'
              cardTitle ='Last Summer'
              idbmRate = '7.3'/>
            <ToWatchCard
              link='./images/card14.jpg'
              cardTitle ='Intimacy'
              idbmRate = '6.0'/>
            <ToWatchCard
              link='./images/card15.jpg'
              cardTitle ='Little Children'
              idbmRate = '7.5'/>
            <ToWatchCard
              link='./images/card16.jpg'
              cardTitle ='Pingpong'
              idbmRate = '6.3'/>
            <ToWatchCard
              link='./images/card17.jpg'
              cardTitle ='Antares'
              idbmRate = '6.1'/>
        </div>
        <div className="toWatchCardContainerRow3">
            <ToWatchCard
              link='./images/card18.jpg'
              cardTitle ='A Royal Affair'
              idbmRate = '7.5'/>
            <ToWatchCard
              link='./images/card19.jpg'
              cardTitle ='Womb'
              idbmRate = '6.3'/>
            <ToWatchCard
              link='./images/card20.jpg'
              cardTitle ='Murmur of the Heart'
              idbmRate = '7.5'/>
            <ToWatchCard
              link='./images/card21.jpg'
              cardTitle ='Spanking the Monkey'
              idbmRate = '6.3'/>
            <ToWatchCard
              link='./images/card22.jpg'
              cardTitle ='A Higher Law'
              idbmRate = '6.8'/>
        </div>
        <div className="toWatchCardContainerRow4">
            <ToWatchCard
              link='./images/card1.jpg'
              cardTitle ='Daniel and Ana'
              idbmRate = '6.1'/>
            <ToWatchCard
              link='./images/card2.jpg'
              cardTitle ='Unfaithful'
              idbmRate = '6.7'/>
              <ToWatchCard
              link='./images/card4.jpg'
              cardTitle ='Antares'
              idbmRate = '6.1'/>
              <ToWatchCard
              link='./images/card5.jpeg'
              cardTitle ='The Dreamers'
              idbmRate = '7.1'/>
              <ToWatchCard
              link='./images/card6.jpeg'
              cardTitle ='Journal 64'
              idbmRate = '7.4'/>
        </div>
    </div>
  )
}
