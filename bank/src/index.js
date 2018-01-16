import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";
import bankReducer from "./reducers";

const accountsFromServer = {
	accounts: [],
	selectedAccount: {},
	transactions: [],
	sortedTransacitons: []
};

let store = createStore(bankReducer);
// console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
