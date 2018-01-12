export const ADD_TO_LIST = "ADD_TO_LIST";
export const PURCHASE_ITEM = "PURCHASE_ITEM";
export const SET_AVAILABILITY_FILTER = "SET_AVAILABILITY_FILTER";

let nextItemId = 4;
export function addToList(data) {
	return {
		type: ADD_TO_LIST,
		data: {
			...data,
			id: nextItemId++,
			purchased: false
		}
	};
}

export function purchaseItem(id) {
	return {
		type: PURCHASE_ITEM,
		data: id
	};
}

export function setAvailabilityFilter(data) {
	return {
		type: SET_AVAILABILITY_FILTER,
		data
	};
}
