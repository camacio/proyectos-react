import React from 'react'
import Sidebar from '../layout/Sidebar'
import MainProyects from './MainProyects'

const Proyects = () => {
  return (
    <div className='container-fluid'>
      <div className='row h'>
        <div className='col-3 bg-light'>
          <Sidebar/>
        </div>
        <div className='col-9'>
          <MainProyects/>
        </div>
      </div>
    </div>
  )
}

export default Proyects