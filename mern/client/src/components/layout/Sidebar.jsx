import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import TaskForm from '../proyects/ProyectForm'
import TaskList from '../proyects/ProyectList'

const Sidebar = props => {
  return (
    <Fragment>
        <h1 className='text-center mt-3'>Mern<span className='fw-bold'>Tasks</span></h1>
        <div className='d-grid gap-2 mx-5 my-5'>
            <button type='submit' className='btn btn-dark'>New Task</button>
        </div>
        <TaskForm/>
        <TaskList/>
    </Fragment>
  )
}

Sidebar.propTypes = {}

export default Sidebar