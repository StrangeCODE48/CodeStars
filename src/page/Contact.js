import React from 'react'
import Map from '../components/Map'
import ContactFrom from '../components/ContactFrom'


const Contact = () => {
  return (
    <section id='Contact'>
      <div className="contact">
        <ContactFrom />
      </div>
      <Map />
    </section>
  )
}

export default Contact
