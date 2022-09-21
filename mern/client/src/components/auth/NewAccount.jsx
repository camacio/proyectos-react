import React from 'react'
import NewAccountForm from './NewAccountForm'

const NewAccount = () => {
  return (
    <div className='container-fluid background'>
        <div className='row h'>
            <div className='col-4 mx-auto my-auto'>
                <NewAccountForm/>
            </div>
        </div>
    </div>
  )
}

export default NewAccount