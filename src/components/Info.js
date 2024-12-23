import React from 'react'
import info1 from '../assets/info1.png'
import info2 from '../assets/info2.png'
import info3 from '../assets/info3.png'
import guidance from '../assets/guidance.png'
import probslove from '../assets/probslove.png'
import certificate from '../assets/certificate.png'


const Info = () => {
  return (
    <section id='Info'>
        <div className="info-one">
            <div className='info1'>
            <div className='info-relative'>
            <img 
            src={info1} 
            alt="" 
            className='info1-1'
            />
            <img 
            src={info2} 
            alt="" 
            className='info1-2'
            />
            </div>
            </div>
            <p className='info1-para1'>
            If you don't know CP, it's coding in the zone,
            Tackling problems, no one's ever known.
            You gotta think quick, logic on the rise,
            Solve it fast, be the one who defies.
            It's all about skills, sharp and clean,
            CP's the key to make your code scene!
            </p>
            <p className='info1-para2'>CodeStars at <u>DJSCE</u></p>
            <p className='info1-para3'>
            In placements, technical rounds usually include CP tests before HR interviews. Mastering CP sharpens your problem-solving skills and makes you a top candidate, highly valued by recruiters
            </p>
        </div>
        <div className="info-two">
            <div className="info-two1">
            <div className='info1'>
            <div className='info-relative'>
            <img 
            src={info3} 
            alt="" 
            className='info1-1'
            />
            </div>
            </div>
                <p className='info2-para1'>
                DJ Codestars promotes CP culture by enhancing problem-solving skills, conducting lectures, preparing students for coding rounds, sharing quality content, and hosting CP-related events.
                </p>
                <p className='info2-para2'>As part of Codestars, members gain firsthand CP exposure, organize events, and conduct lectures, boosting their confidence in coding. Non-tech positions are also available for those interested in enhancing non-technical skills.</p>
            </div>
            <div className="info-two2">
                <p className='info3-para1'>Buy a Membership</p>
            </div>
            <div className='info-two3'>
                <p><img 
                src={probslove} 
                alt="" 
                className='icons'
                />
                <img 
                src={guidance} 
                alt="" 
                className='icons'
                />
                <img 
                src={certificate} 
                alt="" 
                className='icons'
                />Access to exclusive problem </p><p>expert guidance, and participation certificates will be included for all participants</p>
            </div>
        </div>
    </section>
  )
}

export default Info
