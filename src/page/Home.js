import React from 'react'
import Profile from '../components/Profile'
import Info from '../components/Info'
import Highlight from '../components/Highlight'



const Home = ({images,googlers}) => {
  return (
    <div className='Home'>
      <Profile images={images}/>
      <Info />
      <Highlight googlers={googlers}/>
    </div>
  )
}

export default Home
