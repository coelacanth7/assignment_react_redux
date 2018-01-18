import React, { Component } from "react";
import "../App.css";
import JumbotronFluid from "./elements/JumbotronFluid";
import AccountListContainer from "../containers/AccountListContainer";
import AccountActionContainer from "../containers/AccountActionContainer";

class App extends Component {
	render() {
		return (
			<div className="App">
				<JumbotronFluid heading="Bank" lead="put ur money here" />
				<AccountListContainer />
				<AccountActionContainer />
			</div>
		);
	}
}

export default App;
