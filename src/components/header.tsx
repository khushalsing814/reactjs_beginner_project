import React, { useState } from 'react'
import Maincontent from './maincontent';
import Todo from './todo';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Header() {
return (
  <nav className="navbar navbar-expand-lg nav_bg_color">
    <div className="container-fluid">
      <a className="navbar-brand custom_logo" href="#">
        <img src="https://www.freepnglogos.com/uploads/lion-logo-png/lion-head-png-clipart-best-33.png" alt="logo" />
      </a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/todo">Todo</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/form">Form</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link' to="/callback">Callback</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link' to="/table">Table Form</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link' to="/new_form">New Form</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link' to="/popdrilling">popdrilling</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link' to="/loader">Loader</NavLink>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <button className="btn btn-outline-success me-2" type="submit">Signup</button>
          <button className="btn btn-outline-success" type="submit">Login</button>
        </form>
      </div>
    </div>
  </nav>
)
}

export default Header
