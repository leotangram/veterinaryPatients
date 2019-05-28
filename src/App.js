import React, { Component } from 'react'
import './bootstrap.min.css'
import Header from './components/Header'
import NewAppoinment from './components/NewAppoinment'

class App extends Component {
  state = {}
  render() {
    return (
      <div className="container">
        <Header title="Administrador pacientes veterinaria" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewAppoinment />
          </div>
        </div>
      </div>
    )
  }
}

export default App
