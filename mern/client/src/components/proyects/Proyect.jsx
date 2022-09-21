import React from 'react'
import PropTypes from 'prop-types'

const Proyect = ({proyect}) => {
  return (
    <li className='d-grid gap-2 mt-5 mx-5'>
        <button type='submit' className='btn btn-dark'>{proyect.name}</button>
    </li>
  )
}

Proyect.propTypes = {}

export default Proyect