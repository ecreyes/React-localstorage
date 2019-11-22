import React from 'react';
import Header from './Header';
import './App.css';
import CardForm from './CardForm';

function App() {
	return (
		<div className="container">
			<Header/>
			<div className="row">
				<div className="col-12 col-sm-6">
					<CardForm/>
				</div>
				<div className="col-12 col-sm-6"></div>
			</div>
		</div>
	);
}

export default App;
