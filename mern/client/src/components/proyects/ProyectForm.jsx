import React, {useState} from 'react'
import PropTypes from 'prop-types'

const ProyectForm = props => {

    const [proyect, setProyect] = useState({
        name: ""
    });

    const changeHandler = e => {
        setProyect({
            ...proyect,
            [e.target.name] : e.target.value
        })
    }

    const submit = e => {
        e.preventDefault();
    }

    const {name} = proyect;

  return (
    <form onSubmit={submit} className="mx-5">
        <input type="text" onChange={changeHandler} name="name" value={name} placeholder="Task Name" className='form-control'/>
        <div className='d-grid gap-2'>
            <button type='submit' className='btn btn-dark mt-3'>Add Task</button>
        </div>
    </form>
  )
}

ProyectForm.propTypes = {}

export default ProyectForm