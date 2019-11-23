import React from 'react';

class Panel extends React.Component {
    render() {
        const pacientes = this.props.pacientes;
        const pacientesItems = pacientes.map((paciente) =>
            <div key={paciente.id} className="card border-secondary mb-3">
                <div className="card-header">{paciente.nombre} {paciente.apellido}</div>
                <div className="card-body text-secondary">
                    <h5 className="card-title">{paciente.fecha.toString()} - {paciente.hora}</h5>
                    <p className="card-text">{paciente.sintomas}</p>
                    <button className="btn btn-danger float-right" onClick={(e)=>this.props.onEliminarClick(paciente.id,e)}>Eliminar</button>
                </div>
            </div>
        );
        return (
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Listado de pacientes</h2>
                    {pacientesItems}
                </div>
            </div>
        );
    }
}

export default Panel;