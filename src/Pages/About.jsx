
import React from 'react';
import AiImage from '../assets/ai.jpg';
import cyberImage from '../assets/cyber.jpg';
import gameImage from '../assets/game.jpg';

const About = ({Title,Img,Desscription}) => {
  return (
    <>
    <div className="">
      <div className="">
        <img className='' src={Img} alt=""></img>
      </div>
      <h4 className='my-2 mx-0 '>{Title}</h4>
      <p className=''>{Desscription}</p>
    </div>
    </>
  )
}

const About1 = () =>{
  return (
    <>
    <About
    Title={'Ai'}
    Img={AiImage}
    Desscription={'mkmk'}
    />

    <About
    Title={'Cyber Security'}
    Img={cyberImage}
    Desscription={'mkmk'}
    />

    <About
    Title={'Game Developer'}
    Img={gameImage}
    Desscription={'mkmk'}
    />
    </>
  )
}
export default About
