import React, { useState } from 'react'
import PropTypes from 'prop-types'

const NewTaskForm = props => {

    const [task, setTask] = useState({
        name: ""
    })

    const {name} = task;

    const submit = e => {
        e.preventDefault();
    }

    const changeHandler = e => {
        setTask({
            ...task,
            [e.target.name] : e.target.value
        })
    }

  return (
    <form onSubmit={submit} className="bg-dark bg-opacity-75 p-5">
        <input type="task" onChange={changeHandler} name='task' value={name} placeholder="Add new task" className='form-control'/>
        <div className='d-grid gap-2'>
            <button type='submit' className='btn btn-dark text-white mt-5'>New Task</button>
        </div>
    </form>
  )
}

NewTaskForm.propTypes = {}

export default NewTaskForm