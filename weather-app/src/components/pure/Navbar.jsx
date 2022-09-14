import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({title}) => {
  return (
    <nav className='navbar bg-primary shadow'>
        <h1 className='mx-auto text-white'>{title}</h1>
    </nav>
  )
}

Navbar.propTypes = {
  title : PropTypes.string.isRequired
}

export default Navbar