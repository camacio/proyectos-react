import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Navbar from '../layout/Navbar'
import NewTaskForm from '../tasks/TaskForm'
import TaskList from '../tasks/TaskList'

const MainProyects = props => {
  return (
    <div className='mx'>
      <Navbar/>
      <NewTaskForm/>
      <TaskList/>
    </div>
    
  )
}

MainProyects.propTypes = {}

export default MainProyects