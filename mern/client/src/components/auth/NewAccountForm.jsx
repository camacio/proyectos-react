import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const NewAccountForm = props => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        pass: "",
        confirm: ""
    })

    const {name, email, pass, confirm} = user;

    const changeHandler = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const submit = e => {
        e.preventDefault();
    }

  return (
    <div className='bg-white bg-opacity-75 rounded-4 shadow p-5'>
        <h1 className='text-center text-primary fw-bold display-5 mt-3'>New Account</h1>
        <form onSubmit={submit}>
            <div className='row mt-5'>
                <div className='col-2 my-auto'>
                    <label htmlFor='name' className='fw-bold'>Name</label>
                </div>        
                <div className='col-10'>
                    <input type="text" onChange={changeHandler} id="name" name='name' value={name} placeholder="Your Name" className='form-control'/>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-2 my-auto'>
                    <label htmlFor='email' className='fw-bold'>Email</label>
                </div>        
                <div className='col-10'>
                    <input type="text" onChange={changeHandler} id="email" name='email' value={email} placeholder="Your Email" className='form-control'/>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-2 my-auto'>
                    <label htmlFor='pass' className='fw-bold'>Password</label>
                </div>        
                <div className='col-10'>
                    <input type="password" onChange={changeHandler} id="pass" name='pass' value={pass} placeholder="Your Password" className='form-control'/>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-2 my-auto'>
                    <label htmlFor='confirm' className='fw-bold'>Repeat Password</label>
                </div>        
                <div className='col-10'>
                    <input type="password" onChange={changeHandler} id="confirm" name='confirm' value={confirm} placeholder="Repeat your Password" className='form-control'/>
                </div>
            </div>
            <div className='d-grid col-6 mx-auto mt-5 mb-3'>
                <button type='submit' className='btn btn-primary text-white'>New Account</button>
            </div>
        </form>
        <div className='text-center mt-5 fw-bold'>
            <Link to={"/"}>Login</Link>
        </div>
    </div>
  )
}

NewAccountForm.propTypes = {}

export default NewAccountForm