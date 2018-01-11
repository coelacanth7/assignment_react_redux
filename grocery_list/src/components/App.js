import React, { Component } from "react";
import JumbotronFluid from "./elements/JumbotronFluid";
import GroceryListContainer from "../containers/GroceryListContainer";
import AddToListContainer from "../containers/AddToListContainer";
import "../App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<JumbotronFluid heading="Grocery List App" lead="hey, make a list" />
				<GroceryListContainer />
				<br />
				<AddToListContainer />
			</div>
		);
	}
}

export default App;
