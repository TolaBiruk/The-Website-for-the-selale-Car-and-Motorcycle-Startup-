import React from 'react';
import './About.css';
import CEOImage from './Image/ADEY2892.jpg';
import DesignerImage from './Image/Abdi.jpg';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">Şelale Electrical and Solar Recycle Motorcycle Company</h1>

        {/* Company Story */}
        <h2 className="section-title">Our Story</h2>
        <p>
        Şelale Electrical and Solar Recycle Motorcycle Company was founded with the vision of revolutionizing transportation in Ethiopia by producing electric and solar-powered vehicles. Inspired by the need to combat air pollution and enhance local infrastructure, we started as a small team of engineers and dreamers in Addis Ababa. 
          Over the years, we've achieved milestones such as designing innovative bicycles tailored for urban Ethiopian life and launching our first electric motorcycle in Fitche. Our journey has been marked by dedication, community support, and a relentless drive to innovate for a greener future.
        </p>

        {/* Mission and Vision */}
        <h2 className="section-title">Our Mission and Vision are The following</h2>
        <p>
          <strong>Mission:</strong> To design and produce sustainable, energy-efficient vehicles that meet the unique needs of Ethiopia and beyond, using locally sourced materials and talent.
        </p>
        <p>
          <strong>Vision:</strong> To lead the transformation towards a cleaner, healthier, and more accessible transportation system in Ethiopia, inspiring similar efforts across Africa.
        </p>

        {/* Our Team */}
        <h2 className="section-title">Meet Our Team</h2>
        <div className="team">
          <div className="team-member">
            <img src={CEOImage} alt="CEO" className="team-photo" />
            <h3 className="team-name">Abreham Eshetu</h3>
            <p className="team-role">Founder & CEO</p>
            <p className="team-description">
              Abreham is the visionary behind Selale, with a deep passion for sustainability and local innovation. He brings years of engineering expertise to the team.
            </p>
          </div>
          <div className="team-member">
            <img src={DesignerImage} alt="Designer" className="team-photo" />
            <h3 className="team-name">Abdi Solomon</h3>
            <p className="team-role">Chief Designer</p>
            <p className="team-description">
              Abdi leads product design, ensuring that every Selale vehicle is as functional as it is beautiful.
            </p>
          </div>
        </div>

        {/* Values */}
        <h2 className="section-title">Our Values</h2>
        <ul className="values-list">
          <li><strong>Quality:</strong> We ensure the highest standards in design, assembly, and performance of our vehicles.</li>
          <li><strong>Innovation:</strong> Creativity drives us to develop cutting-edge solutions tailored to Ethiopian needs.</li>
          <li><strong>Sustainability:</strong> We prioritize eco-friendly practices in every aspect of production.</li>
          <li><strong>Community:</strong> Our goal is to uplift local communities by creating job opportunities and fostering growth.</li>
        </ul>

        {/* Contact Information */}
        <h2 className="section-title">Contact Us</h2>
        <p>
          Email: abritechinology@icloud.com<br />
          Phone: +251 92 131 1407<br />
          Location: Addis Ababa, Ethiopia
        </p>
      </div>
    </div>
  );
};

export default About;
