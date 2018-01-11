import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";
import { groceryAPP } from "./reducers";
import { addToList, purchaseItem, showPurchasedItems } from "./actions";

const groceriesFromServer = [
	{
		item: "beans",
		quantity: 3,
		purchased: false
	},
	{
		item: "lays potato chips",
		quantity: 1,
		purchased: false
	},
	{
		item: "covfefe",
		quantity: 1,
		purchased: false
	}
];

let store = createStore(groceryAPP, { groceries: groceriesFromServer });

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
