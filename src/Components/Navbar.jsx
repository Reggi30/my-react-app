import React from 'react'
import {Link} from 'react-router-dom';

function Navbar({link1, link2, link3, link4, link5, path1, path2, path3, path4,}) {
  return (
    <nav className='bg-orange-500 w-full flex flex-row justify-between p-8 px-12 text-xl border-r-zinc-900'>
        <div className='text-white text-2xl'>
            Portofolio
        </div>
        <ul className='text-white flex flex-row gap-12'>
            <Link to={path1}>{link1}</Link>
            <Link to={path2}>{link2}</Link>
            <Link to={path3}>{link3}</Link>
            <Link to={path4}>{link4}</Link>
        </ul>
    </nav>
  )
}

export default Navbar
