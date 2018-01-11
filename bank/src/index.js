import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// redux
import { createStore } from "redux";
import bankReducer from "./reducers";
import {
	newAccount,
	viewAccount,
	deposit,
	withdraw,
	transfer,
	sortByDate
} from "./actions";

let store = createStore(bankReducer);
let unsubscribe = store.subscribe(() => console.log(store.getState()));
console.log("initial state", store.getState());

//make some accounts
store.dispatch(newAccount({ name: "greg", money: 500 }));
store.dispatch(newAccount({ name: "jake", money: 499 }));
store.dispatch(newAccount({ name: "bill", money: 498 }));

//view some accounts
store.dispatch(viewAccount(1));
store.dispatch(viewAccount(2));
store.dispatch(viewAccount(3));

// deposit
store.dispatch(deposit({ accountID: 1, money: 100 }));
store.dispatch(deposit({ accountID: 2, money: 400 }));
store.dispatch(deposit({ accountID: 1, money: 10 }));

// withdraw
store.dispatch(withdraw({ accountID: 1, money: 60 }));
store.dispatch(withdraw({ accountID: 2, money: 10 }));
store.dispatch(withdraw({ accountID: 3, money: 30 }));

// transfer
store.dispatch(transfer({ fromAccountID: 1, toAccountID: 2, money: 100 }));

// sort transactions by date
store.dispatch(sortByDate("SORT"));

console.log("new state", store.getState());

//stop listening
unsubscribe();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
