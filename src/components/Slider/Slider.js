import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'

export default function Slider() {
  return (
    <div>
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                className="image"
                src="./images/houseofdragons.jpg"
                alt="First slide"
                />
                <Carousel.Caption >
                <span className='captionName'>House of the Dragon</span>
                <p className='captionDetails'>'House of the Dragon Season 2' will premiere on June 16 on Max.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="image"
                src="./images/planetofapes.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <span className='captionName'>Kingdom of the Planet of the Apes</span>
                <p className='captionDetails'>On May 10, 2024, 20th Century Studios released “Kingdom of the Planet of the Apes”</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="image"
                src="./images/lastofus.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <span className='captionName'>The Last of Us</span>
                <p className='captionDetails'>
                It will premiere on HBO and its streamer in 2025.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="image"
                src="./images/fallout.png"
                alt="Fourth slide"
                />
                <Carousel.Caption>
                <span className='captionName'>Fallout</span>
                <p className='captionDetails'>
                Fallout premiered on Prime Video on April 10, 2024.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}
