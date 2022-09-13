import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import Error from './Error';
import { MESSAGE } from "../../models/message.enum"

const InitialForm = ({setComponent}) => {

    const [amount, setAmount] = useState(0);

    const [error, setError] = useState(false);

    const submit = e => {
        e.preventDefault();

        if(amount < 1 || isNaN(amount)){
            setError(true);
            return;
        }

        setError(false);

        setComponent(false);
    }

    const defineAmount = e => {
        setAmount(parseInt(e.target.value));
    }

  return (
    <Fragment>
        <h2 className='fw-bold mt-3'>Create your Budget</h2>
        {error ? <Error message={MESSAGE.INITIAL_FORM_VALIDATION}/> : null}
        <form onSubmit={submit}>
            <input type="number" onChange={defineAmount} placeholder="Ex. 300" className='form-control'/>
            <div className='d-grid gap-2'>
                <button type="submit" className='btn btn-success mt-3'>Submit</button>
            </div>
        </form>
    </Fragment>
  )
}

InitialForm.propTypes = {}

export default InitialForm