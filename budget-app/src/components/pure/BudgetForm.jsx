import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import {v4 as uuid} from "uuid"
import Error from './Error';
import { MESSAGE } from "../../models/message.enum"

const BudgetForm = ({defineBudget, setBudgetComponent}) => {

    const [budget, setBudget] = useState({
        name: "",
        amount: ""
    })

    const [error, setError] = useState(false);

    const {name, amount} = budget;

    const changeHandler = e => {
        setBudget({
            ...budget,
            [e.target.name] : e.target.value
        })
    }

    const submit = e => {
        e.preventDefault();

        if(name.trim()==="" || amount < 1 || isNaN(amount)){
            setError(true);
            return;
        }

        setError(false);

        budget.id = uuid();

        defineBudget(budget);

        setBudgetComponent(false)
    }

  return (
    <Fragment>
        <h2 className='fw-bold mt-3'>Add yout Budget</h2>
        {error ? <Error message={MESSAGE.BUDGET_FORM_VALIDATION}/> : null}
        <form onSubmit={submit}>
            <label htmlFor='name'>Name</label>
            <input type="text" id='name' name='name' value={name} onChange={changeHandler} placeholder="Ex. Transport" className='form-control'/>
            <label htmlFor='amount'>Amount</label>
            <input type="number" id='amount' name='amount' value={amount} onChange={changeHandler} placeholder="Ex. 300" className='form-control'/>
            <button type='submit' className='btn btn-success mt-3'>Submit</button>
        </form>
    </Fragment>
  )
}

BudgetForm.propTypes = {}

export default BudgetForm