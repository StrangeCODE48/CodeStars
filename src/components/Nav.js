import {React, useRef, useState} from 'react'
import { Link } from 'react-router-dom'
const Nav = ({location,topScroll}) => {
//   const ele = useRef([])
//   const [dimension , setDimension] = useState({height:0 , width:0})
//   const [currele  ,setCurrele] = useState(0)
//   const handleHover = () => {

//   }
// (location.pathname === '/event')? setCurrele(1):(location.pathname === '/team')? setCurrele(2): (location.pathname === '/contact')? setCurrele(3):setCurrele(0)
  return (

    <nav className='nav'>
        <ul>
            <span className='cover' ></span>
            <li className={(location.pathname === '/')? 'nav-bg':''} onClick={topScroll}><Link to="/">Home</Link></li>
            <li className={(location.pathname === '/event')? 'nav-bg':''} onClick={topScroll}><Link to="event">Events</Link></li>
            <li className={(location.pathname === '/team')? 'nav-bg':''} onClick={topScroll}><Link to="team">Team</Link></li>
            <li className={(location.pathname === '/contact')? 'nav-bg':''} onClick={topScroll}><Link to="contact">Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Nav
