import React, { Component } from 'react'
import './bootstrap.min.css'
import Header from './components/Header'
import NewAppoinment from './components/NewAppoinment'

class App extends Component {
  state = {
    appoinments: []
  }
  createNewAppoinment = newAppoinment => {
    // Copiar el state actual
    const appoinments = [...this.state.appoinments, newAppoinment]

    // Agregar el nuevo state
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
        </div>
      </div>
    )
  }
}

export default App
