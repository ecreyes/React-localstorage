import React from 'react';
import Header from './Header';
import './App.css';
import CardForm from './CardForm';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pacientes: []
		}
		this.handlePacientesChange = this.handlePacientesChange.bind(this);
	}

	handlePacientesChange(data) {
		let clonePacientes = this.state.pacientes.slice();
		clonePacientes.push(data);
		this.setState({
			pacientes: clonePacientes
		},()=>{
			console.log(this.state.pacientes);
		});

	}

	render() {
		return (
			<div className="container">
				<Header />
				<div className="row">
					<div className="col-12 col-sm-6">
						<CardForm onPacientesChange={this.handlePacientesChange} />
					</div>
					<div className="col-12 col-sm-6"></div>
				</div>
			</div>
		);

	}
}

export default App;
