import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

const Navbar = props => {

  const submit = e => {
    e.preventDefault();
    console.log("submit");
    <Link to={"/"}/>
  }

  return (
    <header className='bg-dark py-5 '>
        <nav>
          <p className='text-white d-inline-block h2 ms-5'>Hello <span className='fw-bold'>Name</span></p>
          <p type='submit' onClick={submit} className='text-white float-end me-5 h2'>Logout</p>
        </nav>

    </header>
  )
}

Navbar.propTypes = {}

export default Navbar