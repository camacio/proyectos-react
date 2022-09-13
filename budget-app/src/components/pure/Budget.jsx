import React from 'react'
import PropTypes from 'prop-types'

const Budget = ({budget}) => {

    const {name, amount} = budget;

  return (
    <table className='table table-dark table-striped rounded shadow'>
        <thead>
            <tr>
                <td>Name:</td>
                <td>Amount:</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{amount}</td>
            </tr>
        </tbody>
    </table>
  )
}

Budget.propTypes = {}

export default Budget