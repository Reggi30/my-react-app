import React from 'react'
import meImage from '../assets/me.jpg';
import kampusImage from '../assets/kampus.jpg';
import pasarImage from '../assets/pasar.jpg';
import AiImage from '../assets/ai.jpg';
import cyberImage from '../assets/cyber.jpg';
import gameImage from '../assets/game.jpg';





const Home = () => {
  return (
    <>
    <section id="home">
      <div className="home-left">
        <h3 className='pre-title'>Hallo All I Am</h3>
        <h1 className='home-name'>REGGI SAPUTRA SALAWANGI</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error eligendi sed in omnis voluptas, sint sit molestias sapiente labore cupiditate esse soluta alias necessitatibus facilis ratione reprehenderit ex architecto harum?</p>
      </div>
      <div className="home-right">
        <img src={meImage} alt="Foto Reggi Saputra Salawangi" />
      </div>
    </section>

    {/* project */}

    <section id="project">
      <div className="main-container">
        <h1 className='section-title-project'>My Project</h1>
        <p className="project-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore natus molestias, porro debitis quidem eligendi vitae saepe nostrum illo in aliquam blanditiis, dolore numquam corporis, sit laboriosam veniam exercitationem aspernatur.
        </p>

        <div className="grid-3">
          {/* project 1 */}
          <div className="project">
          <div className="project-icon">
            <img src={kampusImage} alt="foto kampus"/>
          </div>
            <h4>Kampus Tahuna</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo assumenda earum nihil obcaecati repellat non doloribus molestias itaque odio dignissimos pariatur accusantium quo, autem praesentium reprehenderit. Ad delectus fugiat minus.</p>
          </div>

          {/* project 2 */}
          <div className="project">
            <div className="project-icon">
              <img src={pasarImage} alt="foto pasar" width={1032} />
            </div>
            <h4>Pasar Naha</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ratione ipsum commodi dicta dignissimos nostrum, ipsam beatae sed ad provident doloremque harum quos aperiam aut debitis quasi eius, dolor repellendus.</p>
          </div>
        </div>
      </div>
    </section>

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

    <section id="contact">
      <div className="contact main-container">
        <h1>Contact
        <div className="line"></div>
        </h1>
        <div className="text-contact"></div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia delectus quidem voluptatum vitae doloremque excepturi a maxime numquam expedita, deserunt rerum ipsa ipsam! Fugiat esse dignissimos, libero quis voluptates accusamus.</p>
        <form className="contact-form">
          <div>
            <input type="text" name="Name" placeholder='Name' required/>
          </div>
          <div>
            <input type="email" name="Email" placeholder='Email' required />
          </div>
          <div>
           <textarea name="message" id="message" cols="40" rows="10" placeholder='Message' required></textarea>
          </div>
          <div>
            <button className='btn-submit'>Send Message</button>
          </div>
        </form>
      </div>

    </section>
    </>
  )
}

export default Home