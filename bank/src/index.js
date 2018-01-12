import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";
import bankReducer from "./reducers";

const accountsFromServer = [
	{ id: 1, name: "greg", money: 500 },
	{ id: 2, name: "jake", money: 499 },
	{ id: 3, name: "bill", money: 498 }
];

let store = createStore(bankReducer, { accounts: accountsFromServer });

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
