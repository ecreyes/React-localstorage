import React from 'react';
import './CardForm.css';

//Datepicker config
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)

class CardForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            startDate: new Date()
        };
    }

    handleChangeDate(date){
        console.log(date);
    }

    render() {
        return (
            <div className="card card-body">
                <h2 className="card-title text-center">Añadir paciente.</h2>
                <form className="container-fluid">
                    <div className="form-group row">
                        <label htmlFor="nombre" className="col-sm-3 col-form-label">Nombre</label>
                        <div className="col-sm-9">
                            <input type="text" id="nombre" className="form-control" placeholder="Nombre del paciente" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="apellido" className="col-sm-3 col-form-label">Apellidos</label>
                        <div className="col-sm-9">
                            <input type="text" id="apellido" className="form-control" placeholder="Apellidos del paciente" />
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
                                        selected={this.state.startDate}
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
                                    <input type="text" id="hora" className="form-control" placeholder="hh:mm" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="sintomas" className="col-sm-3 col-form-label">Sintomas</label>
                        <div className="col-sm-9">
                            <textarea id="sintomas" className="form-control" />
                        </div>
                    </div>
                    <input className="btn btn-success float-right" type="submit" value="Agregar" />
                </form>
            </div>
        );
    }
}

export default CardForm;