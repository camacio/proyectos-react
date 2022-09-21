import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Proyect from "./Proyect"

const ProyectList = props => {

    const [proyects, setProyects] = useState([
        {
            name: "comodoro"
        },
        {
            name: "james"
        },
        {
            name: "jones"
        }
    ])

  return (
    <ul>
        {}
        {proyects.map(proyect => {
            return <Proyect proyect={proyect}/>
        })}
    </ul>
  )
}

ProyectList.propTypes = {}

export default ProyectList