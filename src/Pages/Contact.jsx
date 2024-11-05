import React from 'react'

const Contact = () => {
  return (
    <>
    <section id="contact">
      <div className="contact main-container">
        <h1 className='text-white'>Contact</h1>
        <div className="text-contact"></div>
        <p className='pb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia delectus quidem voluptatum vitae doloremque excepturi a maxime numquam expedita, deserunt rerum ipsa ipsam! Fugiat esse dignissimos, libero quis voluptates accusamus.</p>
        <form className="contact-form">
          <div>
            <input type="text" name="Name" placeholder='Name' required/>
          </div>
          <div>
            <input type="email" name="Email" placeholder='Email' required />
          </div>
          <div>
           <textarea name="message" id="message" cols="40" rows="10" placeholder='Message' required></textarea>
          </div>
          <div>
            <button className='btn-submit'>Send Message</button>
          </div>
        </form>
      </div>
    </section>
    </>
  )
}

export default Contact
