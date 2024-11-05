import React from 'react'
import meImage from '../assets/me.jpg';
import '../App.css'





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

    </>
  )
}

export default Home