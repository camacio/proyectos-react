import React from 'react'
import PropTypes from 'prop-types'

const Error = ({message}) => {
  return (
    <h2 className='badge bg-danger'>{message}</h2>
  )
}

Error.propTypes = {
    message : PropTypes.string.isRequired
}

export default Error