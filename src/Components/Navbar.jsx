import React from 'react'
import {Link} from 'react-router-dom';

function Navbar({navLink}) {
  console.log(navLink);
  
  return (
    <nav className='bg-orange-500 w-full flex flex-row justify-between p-8 px-12 text-xl border-r-zinc-900'>
        <div className='text-white text-2xl'>
            Portofolio
        </div>
        <ul className='text-white flex flex-row gap-12'>
        {navLink.map((value)=>{
          return <Link to={value.path}>{value.link}</Link>
        })}
        </ul>
    </nav>
  )
}

export default Navbar
