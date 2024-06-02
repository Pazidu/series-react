import React from 'react'
import './Tvseries.css';
import Navigation from '../../components/Navigation/Navigation'
import TvSeriesCard from '../../components/TvSeriesCard/TvSeriesCard'

export default function Tvseries() {
  return (
    <div>
        <Navigation 
          title='Login'
          profilePic='./images/profile.webp'
          path='/Login'/>
        
        <div className="row1">
          <TvSeriesCard
            image='./images/tvseries/Breaking_bad.jpg'
            name='Breaking bad'
            imdbRate='9.8'
            noOfSeasons='6'
            noOfEpisods='60'/>

            <TvSeriesCard
            image='./images/tvseries/Bettter call saul.jpg'
            name='Bettter call saul'
            imdbRate='9.8'
            noOfSeasons='6'
            noOfEpisods='60'/>

            <TvSeriesCard
            image='./images/tvseries/Berlin.png'
            name='Berlin'
            imdbRate='9.8'
            noOfSeasons='6'
            noOfEpisods='60'/>

            <TvSeriesCard
            image='./images/tvseries/Chernobyl.jpg'
            name='Chernobyl'
            imdbRate='9.8'
            noOfSeasons='6'
            noOfEpisods='60'/>

        </div>
        <div className="row2">
          <TvSeriesCard
            image='./images/tvseries/Dark.jpg'
            name='Dark'
            imdbRate='9.8'
            noOfSeasons='6'
            noOfEpisods='60'/>

            <TvSeriesCard
            image='./images/tvseries/Dracula.jpg'
            name='Dracula'
            imdbRate='9.8'
            noOfSeasons='6'
            noOfEpisods='60'/>

            <TvSeriesCard
            image='./images/tvseries/House of dragons.jpg'
            name='House of dragons'
            imdbRate='9.8'
            noOfSeasons='6'
            noOfEpisods='60'/>

            <TvSeriesCard
            image='./images/tvseries/La brea.jpg'
            name='La brea'
            imdbRate='9.8'
            noOfSeasons='6'
            noOfEpisods='60'/>
        </div>
        <div className="row3">
          <TvSeriesCard
            image="./images/tvseries/Don't fuck with cats.jpg"
            name="Don't fuck with cats"
            imdbRate='9.8'
            noOfSeasons='6'
            noOfEpisods='60'/>

            <TvSeriesCard
            image='./images/tvseries/Got.jpg'
            name='Game of thrones'
            imdbRate='9.8'
            noOfSeasons='6'
            noOfEpisods='60'/>

            <TvSeriesCard
            image='./images/tvseries/Koobiyo.jpg'
            name='Koobiyo'
            imdbRate='9.8'
            noOfSeasons='6'
            noOfEpisods='60'/>

            <TvSeriesCard
            image='./images/tvseries/Midnight mass.png'
            name='Midnight mass'
            imdbRate='9.8'
            noOfSeasons='6'
            noOfEpisods='60'/>
        </div>
        <div className="row4">
          <TvSeriesCard
            image='./images/tvseries/Money_heist.jpg'
            name='Money_heist'
            imdbRate='9.8'
            noOfSeasons='6'
            noOfEpisods='60'/>

            <TvSeriesCard
            image='./images/tvseries/Narcos mexico.jpg'
            name='Narcos mexico'
            imdbRate='9.8'
            noOfSeasons='6'
            noOfEpisods='60'/>

            <TvSeriesCard
            image='./images/tvseries/Narcos.jpg'
            name='Narcos'
            imdbRate='9.8'
            noOfSeasons='6'
            noOfEpisods='60'/>

            <TvSeriesCard
            image='./images/tvseries/Peaky blinders.jpg'
            name='Peaky blinders'
            imdbRate='9.8'
            noOfSeasons='6'
            noOfEpisods='60'/>
        </div>
        <div className="row4">
          <TvSeriesCard
            image='./images/tvseries/Prison break.jpg'
            name='Prison break'
            imdbRate='9.8'
            noOfSeasons='6'
            noOfEpisods='60'/>

            <TvSeriesCard
            image='./images/tvseries/Sex education.jpg'
            name='Sex education'
            imdbRate='9.8'
            noOfSeasons='6'
            noOfEpisods='60'/>

            <TvSeriesCard
            image='./images/tvseries/Squid game.jpg'
            name='Squid game'
            imdbRate='9.8'
            noOfSeasons='6'
            noOfEpisods='60'/>

            <TvSeriesCard
            image='./images/tvseries/Stranger things.jpg'
            name='Stranger things'
            imdbRate='9.8'
            noOfSeasons='6'
            noOfEpisods='60'/>
        </div>
        <div className="row4">
          <TvSeriesCard
            image='./images/tvseries/The railway men.png'
            name='The railway men'
            imdbRate='9.8'
            noOfSeasons='6'
            noOfEpisods='60'/>

            <TvSeriesCard
            image='./images/tvseries/Wednesday.jpg'
            name='Wednesday'
            imdbRate='9.8'
            noOfSeasons='6'
            noOfEpisods='60'/>

            <TvSeriesCard
            image='./images/tvseries/twd.jpg'
            name='The Walking Dead'
            imdbRate='9.8'
            noOfSeasons='6'
            noOfEpisods='60'/>

            <TvSeriesCard
            image='./images/tvseries/LastOfUs.jpg'
            name='Last Of Us'
            imdbRate='9.8'
            noOfSeasons='6'
            noOfEpisods='60'/>
        </div>
    </div>
  )
}
