import React from 'react';
import {motion} from "framer-motion"
import { animation } from './varation'



const Googelr = ({ googler ,dealy}) => (
  <motion.div 
  className="hg-card"
  variants={animation("left", dealy)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  >
    <div className="img">
      <img src={googler.image} alt={googler.name} />
    </div>
    <h2 className="name" style={{'color':googler.color1}}>{googler.name}</h2>
    <h3 className="core-info" style={{'color':googler.color2}}>{googler.position}</h3>
    <div className="socials">
      <a href=""><img src={googler.socials.github} alt="GitHub" /></a>
      <a href=""><img src={googler.socials.linkedin} alt="LinkedIn" /></a>
    </div>
  </motion.div >
);


export default Googelr;