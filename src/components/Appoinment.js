import React from 'react'
import PropTypes from 'prop-types'

const Appoinment = ({ appoinment, deleteAppoinment }) => (
  <div className='media mt-3'>
    <div className='media-body'>
      <div className='mt-0'>
        <h3>{appoinment.pet}</h3>
        <p className='card-text'>
          <span>Nombre dueño:</span> {appoinment.owner}
        </p>
        <p className='card-text'>
          <span>Fecha:</span> {appoinment.date}
        </p>
        <p className='card-text'>
          <span>Hora:</span> {appoinment.time}
        </p>
        <p className='card-text'>
          <span>Sintomas:</span>
        </p>
        <p>{appoinment.symptom}</p>
      </div>
      <button
        className='btn btn-danger'
        onClick={() => deleteAppoinment(appoinment.id)}
      >
        Borrar &times;
      </button>
    </div>
  </div>
)

Appoinment.propTypes = {
  appoinment: PropTypes.object.isRequired,
  deleteAppoinment: PropTypes.func.isRequired
}

export default Appoinment
