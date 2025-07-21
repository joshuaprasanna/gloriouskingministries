import React from 'react';
import { Link } from 'react-router-dom';

const ChurchNavbar = () => (
  <nav className="bg-dark p-3 mb-3">
    <ul className="nav justify-content-center">
      <li className="nav-item"><Link className="nav-link text-white" to="/church">Home</Link></li>
      <li className="nav-item"><Link className="nav-link text-white" to="/church/about">About</Link></li>
      <li className="nav-item"><Link className="nav-link text-white" to="/church/ministries">Ministries</Link></li>
      <li className="nav-item"><Link className="nav-link text-white" to="/church/events">Events</Link></li>
      <li className="nav-item"><Link className="nav-link text-white" to="/church/gallery">Gallery</Link></li>
      <li className="nav-item"><Link className="nav-link text-white" to="/church/sermons">Sermons</Link></li>
      <li className="nav-item"><Link className="nav-link text-white" to="/church/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default ChurchNavbar;
