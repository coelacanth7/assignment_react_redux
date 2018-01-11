import React, { Component } from "react";
import JumbotronFluid from "./elements/JumbotronFluid";
import "../App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<JumbotronFluid
					heading="Pug Life"
					lead="Our puppies may come from the streets, but they are full of love"
				/>
			</div>
		);
	}
}

export default App;
