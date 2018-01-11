export const NEW_ACCOUNT = "NEW_ACCOUNT";
export const VIEW_ACCOUNT = "VIEW_ACCOUNT";
export const DEPOSIT = "DEPOSIT";
export const WITHDRAW = "WITHDRAW";
export const TRANSFER = "TRANSFER";
export const SORT = "SORT";

let accountID = 1;
let transactionID = 1;

export function newAccount(data) {
	return {
		type: NEW_ACCOUNT,
		data: {
			...data,
			id: accountID++
		}
	};
}

export function viewAccount(id) {
	return {
		type: VIEW_ACCOUNT,
		data: id
	};
}

export function deposit(data) {
	return {
		type: DEPOSIT,
		data: {
			...data,
			kind: "deposit",
			time: Date.now(),
			transactionID: transactionID++
		}
	};
}

export function withdraw(data) {
	return {
		type: WITHDRAW,
		data: {
			...data,
			kind: "withdraw",
			time: Date.now(),
			transactionID: transactionID++
		}
	};
}

export function transfer(data) {
	return {
		type: TRANSFER,
		data: {
			...data,
			kind: "transfer",
			time: Date.now(),
			transactionID: transactionID++
		}
	};
}

export function sortByDate(data) {
	return {
		type: SORT,
		data
	};
}
