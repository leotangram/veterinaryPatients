import React, { Component } from 'react'

class NewAppoinment extends Component {
  state = {}
  render() {
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Llena el formulario para crear una nueva cita
          </h2>
          <form>
            {/* Form group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre mascota
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  name="pet"
                />
              </div>
            </div>
            {/* / Form group */}

            {/* Form group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre dueño
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre dueño mascota"
                  name="owner"
                />
              </div>
            </div>
            {/* / Form group */}

            {/* Form group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4">
                <input type="date" className="form-control" name="date" />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input type="time" className="form-control" name="hour" />
              </div>
            </div>
            {/* / Form group */}

            {/* Form group */}
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Síntomas
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  name="Symptom"
                  placeholder="Describe los síntomas"
                />
              </div>
            </div>
            {/* / Form group */}
            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Agregar nueva cita"
            />
          </form>
        </div>
      </div>
    )
  }
}

export default NewAppoinment
