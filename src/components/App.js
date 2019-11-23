import React from 'react';
import Header from './Header';
import './App.css';
import CardForm from './CardForm';
import Panel from './Panel';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pacientes: []
		}
		this.handlePacientesChange = this.handlePacientesChange.bind(this);
		this.handleEliminarClick = this.handleEliminarClick.bind(this);
	}

	handlePacientesChange(data) {
		let clonePacientes = this.state.pacientes.slice();
		clonePacientes.push(data);
		this.setState({
			pacientes: clonePacientes
		},()=>{
			localStorage.setItem('pacientes',JSON.stringify(this.state.pacientes));
		});
	}

	handleEliminarClick(id){
		let clonePacientes = this.state.pacientes.slice();
		let pacientes = [];
		clonePacientes.forEach(paciente=>{
			if(paciente.id!==id){
				pacientes.push(paciente);
			}
		});
		this.setState({
			pacientes:pacientes
		},()=>{
			localStorage.setItem('pacientes',JSON.stringify(this.state.pacientes));
		});
	}

	componentDidMount() {
		const pacientes = JSON.parse(localStorage.getItem('pacientes'));
		if(pacientes.length>0){
			this.setState({
				pacientes:pacientes
			})
		}
	}

	render() {
		return (
			<div className="container">
				<Header />
				<div className="row">
					<div className="col-12 col-sm-6">
						<CardForm onPacientesChange={this.handlePacientesChange} />
					</div>
					<div className="col-12 col-sm-6">
						<Panel pacientes={this.state.pacientes} onEliminarClick={this.handleEliminarClick}/>
					</div>
				</div>
			</div>
		);

	}
}

export default App;
