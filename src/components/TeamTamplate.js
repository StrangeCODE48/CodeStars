import React from 'react'
import {motion} from "framer-motion"
import { animation } from './varation'

const TeamTamplate = ({teammember}) => {
  return (
    <motion.div 
    className='team-tamplate'
    variants={animation("up", 0.4)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    >
      <div className="team-img">        
        <img 
        src={teammember.image} 
        alt="" 
        /></div>
      <div className="text">
        <h2 className="position" style={{'color':teammember.color1}}>{teammember.position}</h2>
        <div className="name-socials">
        <h2 className={(teammember.isgoogle)?'is-googler name':'name'} style={{'color':teammember.color2}}>{teammember.name}</h2>
        <div className="team-socials">
        <a href="">
        <img 
        src={teammember.socials.github} 
        alt="" 
        />
        </a>
        <a href="">
        <img 
        src={teammember.socials.linkedin}  
        alt="" 
        />
        </a>
        </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TeamTamplate
