import React from 'react'
import ProfileFrame from './ProfileFram'
import {motion} from "framer-motion"
import { animation } from './varation'

const Profile = ({images}) => {
  return (
    <section id='Profile'>
        <ProfileFrame images={images}/>
        <div className="profile-text">
            <h1 className='hone'>The Official</h1>
            <h1 className='htwo'>COMPETITIVE PROGRAMMING</h1>
            <h1 className='hthree'>Club Of DJSCE</h1>
            <p className='para'>
              <motion.span 
              className='yellow-rect'
              variants={animation("right", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              >DJ Codestars</motion.span >, the official programming club of DJ Sanghvi College of Engineering, encourages students to explore real-time applications of <motion.span 
              className='yellow-rect'
              variants={animation("left", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}>competitive programming (CP)</motion.span>. </p>
        </div>
    </section>
  )
}

export default Profile
