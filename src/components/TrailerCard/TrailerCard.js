import React from 'react'
import './TrailerCard.css'

export default function TrailerCard() {
  return (
    <div className="trailerCardBar">
        <a href='https://youtu.be/Way9Dexny3w?si=p2mhxM_Fv3u3uGRq' className='trailerContainer'>
            <div className="trailerContainerInside">
                <div className="topCard">
                    <img src="./images/thumbnil1.webp" alt="" className="trailerVideoThumbnil" />
                </div>
                <div className="bottomCard">
                    <img src="./images/playIcon.png" alt="" className="playIcon" />
                    <div className="trailerText">
                        <li className="trailerTime">2.25</li>
                        <li className="trailerTitle">"Dune : Prophecy"</li>
                        <li className="trailerDescription">Watch the teaser.</li>
                    </div>
                </div>
            </div>   
        </a>
        <a href='https://youtu.be/U4JYAx5rNRA?si=rwd-nU16UAbDNtmq' className='trailerContainer'>
            
            <div className="trailerContainerInside">
                <div className="topCard">
                    <img src="./images/thumbnil2.jpeg" alt="" className="trailerVideoThumbnil" />
                </div>
                <div className="bottomCard">
                    <img src="./images/playIcon.png" alt="" className="playIcon" />
                    <div className="trailerText">
                        <li className="trailerTime">2.48</li>
                        <li className="trailerTitle">"Bridgerton" Stars Guess Iconic <br/>Love Stories</li>
                        <li className="trailerDescription">nicola coughlan and luke newton take tha quiz.</li>
                    </div>
                </div>
            </div>
        </a>
        <a href='https://youtu.be/V1KaJvDMlNc?si=_19VDNs09o_y0hG4' className='trailerContainer'>
            <div className="trailerContainerInside">
                <div className="topCard">
                    <img src="./images/thumbnil3.webp" alt="" className="trailerVideoThumbnil" />
                </div>
                <div className="bottomCard">
                    <img src="./images/playIcon.png" alt="" className="playIcon" />
                    <div className="trailerText">
                        <li className="trailerTime">3.15</li>
                        <li className="trailerTitle">Horizon: An American Saga <br/>chapter 1</li>
                        <li className="trailerDescription">Watch the trailer.</li>
                    </div>
                </div>
            </div>
        </a>
    </div>

    

    
  )
}
