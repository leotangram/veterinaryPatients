import React, { Component } from 'react'
import './bootstrap.min.css'
import Header from './components/Header'
import NewAppoinment from './components/NewAppoinment'
import AppoinmentList from './components/AppoinmentList'

class App extends Component {
  state = {
    appoinments: []
  }

  // Cuando la aplicación carga
  componentDidMount() {
    const appoinmentsLocalStorage = localStorage.getItem('appoinments')
    if (appoinmentsLocalStorage) {
      this.setState({
        appoinments: JSON.parse(appoinmentsLocalStorage)
      })
    }
  }

  // Cuando eliminamos o agregamos una nueva cita
  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('appoinments', JSON.stringify(this.state.appoinments))
  }

  createNewAppoinment = newAppoinment => {
    // Copiar el state actual
    const appoinments = [...this.state.appoinments, newAppoinment]

    // Agregar el nuevo state
    this.setState({
      appoinments
    })
  }

  // Elimina las citas del state
  deleteAppoinment = id => {
    // Tomar una copia del state
    const currentAppoinments = [...this.state.appoinments]

    // Utilizar filter para sacar el elemento @id del arreglo
    const appoinments = currentAppoinments.filter(
      appoinment => appoinment.id !== id
    )

    // Actualizar el state
    this.setState({
      appoinments
    })
  }

  render() {
    return (
      <div className='container'>
        <Header title='Administrador pacientes veterinaria' />
        <div className='row'>
          <div className='col-md-10 mx-auto'>
            <NewAppoinment createNewAppoinment={this.createNewAppoinment} />
          </div>
          <div className='mt-5 col-md-10 mx-auto'>
            <AppoinmentList
              appoinments={this.state.appoinments}
              deleteAppoinment={this.deleteAppoinment}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
