import React from 'react';

const Contact = () => (
  <section id="contact" className="section">
    <div className="section-container">
      <h2 className="section-title">Contact</h2>
      <div className="contact-content">
        <div className="contact-info">
          <p><i className="fas fa-envelope"></i> mmuhyideen1234@gmail.com</p>
          <p><i className="fas fa-map-marker-alt"></i> Ibadan, Nigeria</p>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;