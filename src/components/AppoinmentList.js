import React from 'react'
import Appoinment from './Appoinment'

const AppoinmentList = ({ appoinments }) => (
  <div className='card mt-2 py-5'>
    <div className='card-body'>
      <h2 className='card-title text-center'>Administra las citas aquí</h2>
      <div className='appoinment-list'>
        {appoinments.map(appoinment => (
          <Appoinment key={appoinment.id} appoinment={appoinment} />
        ))}
      </div>
    </div>
  </div>
)

export default AppoinmentList
