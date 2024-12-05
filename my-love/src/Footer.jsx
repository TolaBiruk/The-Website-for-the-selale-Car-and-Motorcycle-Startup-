import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Şelale Electrical and Solar Recycle Motorcycle Company</p>
          <p>Lamberat</p>
          <p>Addis Ababa, Ethiopian, 1000</p>
          <p>Email: abritechinology@icloud.com</p>
          <p>Phone:+251921311407</p>
        </div>
        <div className="social-media"> {/* Added social media links */}
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {currentYear} Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
