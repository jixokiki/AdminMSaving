// File: About.js

import React from 'react';
import './About.css'; // Pastikan Anda memiliki file CSS yang terhubung
import Navbar from '../platform/Navbar';
import NavbarHome2 from '../platform/NavbarHome2';

const About2 = () => {
  return (
    <div className="about-container">
      <NavbarHome2/>
      <h2 className="about-title">Tentang Kami</h2>
      <p className="about-description">
        Selamat datang di halaman tentang kami. Kami adalah tim yang bersemangat
        untuk menghadirkan solusi inovatif dan berkualitas tinggi kepada pelanggan kami.
      </p>
      <div className="about-team">
        <h3>Tim Kami</h3>
        <ul>
          <li>Dimas Arvianto - CEO</li>
          <li>Dimas Arvianto - CTO</li>
          <li>Dimas Arvianto - Lead Developer</li>
        </ul>
      </div>
    </div>
  );
};

export default About2;
