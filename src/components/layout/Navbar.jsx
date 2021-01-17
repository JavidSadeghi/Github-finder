import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-danger'>
      <a href='/' className='navbar-brand'>
        <i className={icon}></i> {title}
      </a>
      <div className='collapse navbar-collapse justify-content-end '>
        <ul className='navbar-nav'>
          <li className='navbar-item mr-2'>
            <Link to='/' className='nav-link'>
              <i className='fas fa-home'></i> Home
            </Link>
          </li>
          <li className='navbar-item mr-5'>
            <Link to='/about' className='nav-link'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
