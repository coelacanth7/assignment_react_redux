import { combineReducers } from "redux";

import { ADD_TO_LIST, PURCHASE_ITEM, SET_AVAILABILITY_FILTER } from "./actions";

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

function groceryFilters(state = "SHOW_ALL", action) {
	switch (action.type) {
		case SET_AVAILABILITY_FILTER:
			return action.data;
			break;
		default:
			return state;
	}
}

export const groceryAPP = combineReducers({ groceries, groceryFilters });
