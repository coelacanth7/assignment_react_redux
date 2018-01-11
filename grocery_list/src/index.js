import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";

import { groceryAPP } from "./reducers";

import { addToList, purchaseItem, showPurchasedItems } from "./actions";

let store = createStore(groceryAPP);

let unsubscribe = store.subscribe(() => console.log(store.getState()));

console.log("initial state", store.getState());

store.dispatch(
	addToList({
		item: "beans",
		quantity: 3,
		purchased: false
	})
);

store.dispatch(
	addToList({
		item: "lays potato chips",
		quantity: 1,
		purchased: false
	})
);

// console.log("new state", store.getState());

store.dispatch(purchaseItem(2));

store.dispatch(showPurchasedItems("SHOW_PURCHASED_ITEMS"));

unsubscribe();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
