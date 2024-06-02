import React from 'react'
import './AwardsEvents.css';
import Navigation from '../../components/Navigation/Navigation'
import Accordion from 'react-bootstrap/Accordion';
import AwardCard from '../../components/AwardCard/AwardCard'
import AwardsCentralCard from '../../components/AwardsCentralCard/AwardsCentralCard';


export default function AwardsEvents() {
  return (
    <div>
        <Navigation 
          title='Login'
          profilePic='./images/profile.webp'
          path='/Login'/>

            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header >OSCARS</Accordion.Header>
                <Accordion.Body className='header'>
                  <div className="bodyContainerOscars">
                    <div className="Oscars2024Container">
                      <div className="titles">Oscars 2024</div>
                      <span className='oscarTopicDescription'>Learn about this year's winners and nominees</span>
                      <div className="oscar2024Videos">
                        <AwardCard
                          link ='https://www.imdb.com/video/vi2293155353/?listId=ls524218907&ref_=fea_acd_vi_i_1'
                          image='./images/aw1.png'
                          description='Best Moments From the 2024 Oscars'
                        />
                        <AwardCard
                          link ='https://www.imdb.com/video/vi346801689/?listId=ls524218907&ref_=fea_acd_vi_i_2'
                          image='./images/aw2.png'
                          description="Why Da'Vine Joy Randolph's Star Is Rising"
                          />
                          <AwardCard
                          link = 'https://www.imdb.com/video/vi3079915289/?listId=ls524218907&ref_=fea_acd_vi_i_5'
                          image='./images/aw3.png'
                          description="Why the Cast Considers 'Oppenheimer' Christopher Nolan's Magnum Opus"
                          />
                          <AwardCard
                          link = "https://www.imdb.com/video/vi3842098969/?listId=ls524218907&ref_=fea_acd_vi_i_8"
                          image='./images/aw4.png'
                          description="'A Lot of Touching' Fuels 'Poor Things' Performances"
                          />
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>AWARDS CENTRAL</Accordion.Header>
                  <Accordion.Body>
                  <div className="carsBody1">
                    <AwardsCentralCard
                      title = "2024 Oscars Red Carpet Photos"
                      description = "See who stepped out and lit up the red carpet at the 2024 Oscars."
                      link = "https://www.imdb.com/oscars/oscars-2024-red-carpet/rg403872512/mediaviewer/rm2985247745?ref_=fea_acd_csegosc_24redcarpet_i"
                      image ="./images/acc1.png"/>
                    <AwardsCentralCard
                      title = "2024 Oscar Winners"
                      description = "Oppenheimer and Poor Things were the big winners at the 2024 Academy Awards. Click through to see the full list of winners and nominees."
                      link = "https://www.imdb.com/event/ev0000003/2024/1/?ref_=fea_acd_csegosc_ft_oscars24_i"
                      image ="./images/acc2.png"/>
                    </div>
                    <div className="carsBody1">
                    <AwardsCentralCard
                      title = "2024 Oscars Red Carpet Photos"
                      description = "See who stepped out and lit up the red carpet at the 2024 Oscars."
                      link = "https://www.imdb.com/oscars/2024-oscars-photos-we-love/rg1729272576/mediaviewer/rm1240548353?ref_=fea_acd_csegosc_24_pwl_i"
                      image ="./images/acc3.png"/>
                    <AwardsCentralCard
                      title = "IMDb's Portrait Studio at the Indie Spirit Awards"
                      description = "Past Lives director Celine Song, Lily Gladstone, and Jeffrey Wright are just a few of the stars who stopped by IMDb's Portrait Studio at the 2024 Film Independent Spirit Awards."
                      link = "https://www.imdb.com/awards-central/indie-spirits-portrait-studio-2024/rg2299566848/mediaviewer/rm1377255681?ref_=fea_acd_ac_csegisa_por2024_i"
                      image ="./images/acc4.png"/>
                    </div>
                  </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>FESTIVAL CENTRAL</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>IMDb SPOTLIGHT</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
              </Accordion.Item>
            </Accordion>



    </div>
  )
}

