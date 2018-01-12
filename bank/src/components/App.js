import React, { Component } from "react";
import "../App.css";
import JumbotronFluid from "./elements/JumbotronFluid";

class App extends Component {
	render() {
		return (
			<div className="App">
				<JumbotronFluid heading="Bank" lead="put ur money here" />
			</div>
		);
	}
}

export default App;
