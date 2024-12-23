// import React from 'react'

// const ContactFrom = () => {
//   return (
//     <section id='Contact-From'>
//         <form onSubmit={(e) => e.preventDefault()}>

//         </form>
//     </section>
//   )
// }

// export default ContactFrom

// import React, { useState } from 'react';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     subject: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div >
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div >
//         <label htmlFor="phone">Phone</label>
//         <input
//           type="tel"
//           id="phone"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div >
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="mb-6">
//         <label htmlFor="subject">Subject</label>
//         <input
//           type="text"
//           id="subject"
//           name="subject"
//           value={formData.subject}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div >
//         <button
//           type="submit"
//         >
//           Send Message
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ContactForm;

import React, { useState } from 'react';
// Assume the CSS file is imported in your main CSS or component

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Contact CodeStars</h2>
     <div className='form-group-one'>
        <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder='Name'
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder='Email'
        />
      </div>
     </div>
     <div className='form-group-two'>
     <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder='On Account of'
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
          placeholder='Write on subject'
        ></textarea>
      </div>
     </div>
      <button type="submit" className="submit-button">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
