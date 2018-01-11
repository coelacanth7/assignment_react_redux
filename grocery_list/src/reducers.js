import { combineReducers } from "redux";

import { ADD_TO_LIST, PURCHASE_ITEM, SHOW_PURCHASED_ITEMS } from "./actions";

function groceries(state = [], action) {
	switch (action.type) {
		case ADD_TO_LIST:
			return [...state, action.data];
			break;
		case PURCHASE_ITEM:
			return state.map(item => {
				if (item.id === action.data) {
					return {
						...item,
						purchased: true
					};
				}

				return item;
			});
			break;
		default:
			return state;
	}
}

function showPurchases(state = "SHOW_ALL", action) {
	switch (action.type) {
		case SHOW_PURCHASED_ITEMS:
			return action.data;
			break;
		default:
			return state;
	}
}

export const groceryAPP = combineReducers({ groceries, showPurchases });
