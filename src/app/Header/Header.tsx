import React from 'react'
import Marquee from '../Components/Marqee'
import Home from '../Components/Head'
import Navbar from '../Components/Navbar/Navbar'


const Header = () => {
  return (
    <div className='bg-[#f0faf7]  '>
     <Marquee/>
      <Home/>
       <Navbar/>
    </div>
  )
}

export default Header
