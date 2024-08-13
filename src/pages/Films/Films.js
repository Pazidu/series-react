import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import FilmCard from "../../components/FilmCard/FilmCard";
import "./Films.css";

export default function Films() {
  return (
    <div>
      <Navigation
        title="Login"
        profilePic="./images/profile.webp"
        path="/Login"
      />

      <div className="firstRow">
        <FilmCard
          image="./images/Films/garfield.jpg"
          name="Garfield Movie"
          imdbRate="5.7"
        />
        <FilmCard
          image="./images/Films/garfield.jpg"
          name="Garfield Movie"
          imdbRate="5.7"
        />
        <FilmCard
          image="./images/Films/garfield.jpg"
          name="Garfield Movie"
          imdbRate="5.7"
        />
        <FilmCard
          image="./images/Films/garfield.jpg"
          name="Garfield Movie"
          imdbRate="5.7"
        />
      </div>
      <div className="firstRow">
        <FilmCard
          image="./images/Films/garfield.jpg"
          name="Garfield Movie"
          imdbRate="5.7"
        />
        <FilmCard
          image="./images/Films/garfield.jpg"
          name="Garfield Movie"
          imdbRate="5.7"
        />
        <FilmCard
          image="./images/Films/garfield.jpg"
          name="Garfield Movie"
          imdbRate="5.7"
        />
        <FilmCard
          image="./images/Films/garfield.jpg"
          name="Garfield Movie"
          imdbRate="5.7"
        />
      </div>
      <div className="firstRow">
        <FilmCard
          image="./images/Films/garfield.jpg"
          name="Garfield Movie"
          imdbRate="5.7"
        />
        <FilmCard
          image="./images/Films/garfield.jpg"
          name="Garfield Movie"
          imdbRate="5.7"
        />
        <FilmCard
          image="./images/Films/garfield.jpg"
          name="Garfield Movie"
          imdbRate="5.7"
        />
        <FilmCard
          image="./images/Films/garfield.jpg"
          name="Garfield Movie"
          imdbRate="5.7"
        />
      </div>
    </div>
  );
}
