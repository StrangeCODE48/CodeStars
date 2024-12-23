import React from 'react'
import Nav from './Nav'
import codestars from '../assets/codestars.jpg'
const Header = ({location,topScroll}) => {
  return (
    <header className='header'>
        <div className="logo">
            <img 
            src={codestars} 
            alt="Logo image" 
            className='logo-img'
            />
            CodeStars
        </div>
        <Nav location={location} topScroll={topScroll}/>
    </header>
  )
}

export default Header
