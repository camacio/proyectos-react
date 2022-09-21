import React from 'react'
import PropTypes from 'prop-types'

const Task = ({task}) => {

  return (
    <li>
      <div className='d-grid gap-2'>
        <button type='submit' className='btn btn-light p-2 mx-5 mt-4 shadow'>Name : {task.name}</button>
      </div>
      
    </li>
  )
}

Task.propTypes = {}

export default Task