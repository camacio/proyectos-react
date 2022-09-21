import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import Task from './Task'

const TaskList = props => {

  const [tasks, setTasks] = useState([
    {name: "Tarea 1", completed: true},
    {name: "Tarea 2", completed: false},
    {name: "Tarea 3", completed: false}
  ])

  return (
    <Fragment>
      <h2 className='text-center mt-5 fw-bold'>Your Task: </h2>
      <ul className='text-center'>
        {tasks.map(task => {
          return <Task task={task}/>
        })}
      </ul>
    </Fragment>
  )
}

TaskList.propTypes = {}

export default TaskList