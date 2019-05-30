import React, { Component } from 'react'

class NewAppoinment extends Component {
  state = {
    appoinment: {
      pet: '',
      owner: '',
      date: '',
      time: '',
      symptom: ''
    }
  }
  handleChange = eventAppoinment => {
    console.log(
      `${eventAppoinment.target.name}: ${eventAppoinment.target.value}`
    )

    // Colocar lo que el usuario escribe en el state
    this.setState({
      appoinment: {
        ...this.state.appoinment,
        [eventAppoinment.target.name]: eventAppoinment.target.value
      }
    })
  }
  render() {
    return (
      <div className='card mt-5 py-5'>
        <div className='card-body'>
          <h2 className='card-title text-center mb-5'>
            Llena el formulario para crear una nueva cita
          </h2>
          <form>
            {/* Form group */}
            <div className='form-group row'>
              <label className='col-sm-4 col-lg-2 col-form-label'>
                Nombre mascota
              </label>
              <div className='col-sm-8 col-lg-10'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Nombre'
                  name='pet'
                  onChange={this.handleChange}
                  value={this.state.appoinment.pet}
                />
              </div>
            </div>
            {/* / Form group */}

            {/* Form group */}
            <div className='form-group row'>
              <label className='col-sm-4 col-lg-2 col-form-label'>
                Nombre dueño
              </label>
              <div className='col-sm-8 col-lg-10'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Nombre dueño mascota'
                  name='owner'
                  onChange={this.handleChange}
                  value={this.state.appoinment.owner}
                />
              </div>
            </div>
            {/* / Form group */}

            {/* Form group */}
            <div className='form-group row'>
              <label className='col-sm-4 col-lg-2 col-form-label'>Fecha</label>
              <div className='col-sm-8 col-lg-4'>
                <input
                  type='date'
                  className='form-control'
                  name='date'
                  onChange={this.handleChange}
                  value={this.state.appoinment.date}
                />
              </div>

              <label className='col-sm-4 col-lg-2 col-form-label'>Hora</label>
              <div className='col-sm-8 col-lg-4'>
                <input
                  type='time'
                  className='form-control'
                  name='time'
                  onChange={this.handleChange}
                  value={this.state.appoinment.time}
                />
              </div>
            </div>
            {/* / Form group */}

            {/* Form group */}
            <div className='form-group row'>
              <label className='col-sm-4 col-lg-2 col-form-label'>
                Síntomas
              </label>
              <div className='col-sm-8 col-lg-10'>
                <textarea
                  className='form-control'
                  name='symptom'
                  placeholder='Describe los síntomas'
                  onChange={this.handleChange}
                  value={this.state.appoinment.symptom}
                />
              </div>
            </div>
            {/* / Form group */}
            <input
              type='submit'
              className='py-3 mt-2 btn btn-success btn-block'
              value='Agregar nueva cita'
            />
          </form>
        </div>
      </div>
    )
  }
}

export default NewAppoinment
