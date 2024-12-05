import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-description">
          We’re here to assist you! Reach out to us for inquiries, feedback, or collaborations. Connect with us directly or through social media.
        </p>

        {/* Contact Information */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
            <strong>Email:</strong> <a href="mailto:abritechinology@icloud.com">abritechinology@icloud.com</a>
          </p>
          <p>
            <strong>Phone:</strong> <a href="tel:+251921311407">+251 92 131 1407</a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="social-media">
          <h2>Follow Us on Social Media</h2>
          <ul>
            <li>
              <a href="https://www.tiktok.com/@abrimangudo21" target="_blank" rel="noopener noreferrer">
                TikTok: @abrimangudo21
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/panda.809652" target="_blank" rel="noopener noreferrer">
                Instagram: @panda.809652
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>

            <button type="submit" className="contact-submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
