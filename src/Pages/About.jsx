
import React from 'react';
import AiImage from '../assets/ai.jpg';
import cyberImage from '../assets/cyber.jpg';
import gameImage from '../assets/game.jpg';

const About = ({Title,Img,Desscription}) => {
  return (
    <>
     {/* about */}

     <section id="about">
      <div className="main-container">
        <h1 className="section-title-about"> About Me</h1>
        <div className="text-about">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas porro eos sunt doloremque praesentium ipsam natus eius dolores eligendi, unde ullam dolor perferendis cum eveniet provident. Quidem possimus nulla omnis.</p>
        </div>
        <div className="row-3">
          {/* about 1 */}
          <div className="about">
          <div className="about-icon">
            <img src={AiImage} alt="foto Ai" />
          </div>
          <h4>Ai</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem odit ipsa fugiat nulla tempore, optio provident veritatis aliquam asperiores ab eligendi magnam ut earum temporibus, culpa sapiente ipsam omnis iure!</p>
          </div>

          {/* about 2 */}
          <div className="about">
          <div className="about-icon">
            <img src={cyberImage} alt="foto cyber" />
          </div>
          <h4>Cyber Security</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus accusantium necessitatibus magnam dignissimos ipsam quam. Similique doloribus accusantium, error iure mollitia praesentium perspiciatis ratione alias dolor facilis exercitationem dolores quo.</p>
          </div>

          {/* about 3 */}
          <div className="about">
            <div className="about-icon">
              <img src={gameImage} alt="foto game" />
            </div>
            <h4>Game Developer</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi est quo alias saepe sequi, architecto cum magnam in. Dolore blanditiis ipsa distinctio sit deserunt iusto minus? Quo ea minus dicta.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
