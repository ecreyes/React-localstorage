import React from 'react';
import './CardForm.css';

//Datepicker config
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)

class CardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            apellido: "",
            fecha: new Date(),
            hora: "",
            sintomas: ""
        };
        this.handleNombreChange = this.handleNombreChange.bind(this);
        this.handleApellidoChange = this.handleApellidoChange.bind(this);
        this.handleHoraChange = this.handleHoraChange.bind(this);
        this.handleSintomasChange = this.handleSintomasChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNombreChange(e) {
        this.setState({
            nombre: e.target.value
        });
    }

    handleApellidoChange(e) {
        this.setState({
            apellido: e.target.value
        });
    }

    handleChangeDate(date) {
        this.setState({
            fecha: date
        })
    }

    handleHoraChange(e) {
        this.setState({
            hora: e.target.value
        });
    }

    handleSintomasChange(e) {
        this.setState({
            sintomas: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onPacientesChange(this.state);
        e.currentTarget.reset();
        this.setState({
            nombre: "",
            apellido: "",
            fecha: new Date(),
            hora: "",
            sintomas: ""
        }
        );
    }

    render() {
        return (
            <div className="card card-body">
                <h2 className="card-title text-center">Añadir paciente.</h2>
                <form className="container-fluid" onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="nombre" className="col-sm-3 col-form-label">Nombre</label>
                        <div className="col-sm-9">
                            <input onChange={this.handleNombreChange} type="text" id="nombre" className="form-control" placeholder="Nombre del paciente" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="apellido" className="col-sm-3 col-form-label">Apellidos</label>
                        <div className="col-sm-9">
                            <input onChange={this.handleApellidoChange} type="text" id="apellido" className="form-control" placeholder="Apellidos del paciente" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-8">
                            <div className="form-group row">
                                <label htmlFor="fecha" className="col-sm-4 mr-3 col-form-label">Fecha</label>
                                <div className="col-sm-6">
                                    <DatePicker
                                        id="fecha"
                                        className="form-control"
                                        selected={this.state.fecha}
                                        onChange={this.handleChangeDate}
                                        locale="es"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="form-group row">
                                <label htmlFor="hora" className="col-sm-5 col-form-label rm-pr">Hora</label>
                                <div className="col-sm-7">
                                    <input onChange={this.handleHoraChange} type="text" id="hora" className="form-control" placeholder="hh:mm" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="sintomas" className="col-sm-3 col-form-label">Sintomas</label>
                        <div className="col-sm-9">
                            <textarea onChange={this.handleSintomasChange} id="sintomas" className="form-control" />
                        </div>
                    </div>
                    <input className="btn btn-success float-right" type="submit" value="Agregar" />
                </form>
            </div>
        );
    }
}

export default CardForm;