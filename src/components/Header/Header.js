import React from 'react'
import logo from '../../assests/Studio_Ghibli_logo.png'
import './Header.css'

const Header = () => {

  return (
    <header className='Header'>
      <img className='logo' src={logo}/>
    </header>
  )
}

export default  Header