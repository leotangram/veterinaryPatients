import React from 'react'
import Appoinment from './Appoinment'
import PropTypes from 'prop-types'

const AppoinmentList = ({ appoinments, deleteAppoinment }) => {
  // Imprimir un mensaje en base a si hay citas o no
  const message =
    Object.keys(appoinments).length === 0
      ? 'No hay citas'
      : 'Administra las citas aquí'

  return (
    <div className='card mt-2 py-5'>
      <div className='card-body'>
        <h2 className='card-title text-center'>{message}</h2>
        <div className='appoinment-list'>
          {appoinments.map(appoinment => (
            <Appoinment
              key={appoinment.id}
              appoinment={appoinment}
              deleteAppoinment={deleteAppoinment}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

AppoinmentList.propTypes = {
  appoinments: PropTypes.array.isRequired,
  deleteAppoinment: PropTypes.func.isRequired
}

export default AppoinmentList
