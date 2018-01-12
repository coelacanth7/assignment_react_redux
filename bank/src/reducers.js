import {
	NEW_ACCOUNT,
	VIEW_ACCOUNT,
	DEPOSIT,
	WITHDRAW,
	TRANSFER,
	SORT
} from "./actions";

const thatState = {
	accounts: [],
	selectedAccount: {},
	transactions: [],
	sortedTransacitons: []
};

function bankReducer(state = thatState, action) {
	switch (action.type) {
		case NEW_ACCOUNT:
			return {
				accounts: [...state.accounts, action.data],
				transactions: [...state.transactions]
			};
		case VIEW_ACCOUNT:
			return {
				accounts: [...state.accounts],
				selectedAccount: state.accounts.filter(account => {
					if (account.id === action.data) {
						return account;
					}
				})[0],
				transactions: [...state.transactions]
			};
		case DEPOSIT:
			return {
				accounts: state.accounts.map(account => {
					if (account.id === action.data.accountID) {
						return {
							...account,
							money: account.money + action.data.money
						};
					}

					return account;
				}),
				selectedAccount: { ...state.selectedAccount },
				transactions: [...state.transactions, action.data]
			};
		case WITHDRAW:
			return {
				accounts: state.accounts.map(account => {
					if (account.id === action.data.accountID) {
						return {
							...account,
							money: account.money - action.data.money
						};
					}

					return account;
				}),
				selectedAccount: { ...state.selectedAccount },
				transactions: [...state.transactions, action.data]
			};
		case TRANSFER:
			return {
				accounts: state.accounts.map(account => {
					if (account.id === action.data.fromAccountID) {
						return {
							...account,
							money: account.money - action.data.money
						};
					}

					if (account.id === action.data.toAccountID) {
						return {
							...account,
							money: account.money + action.data.money
						};
					}

					return account;
				}),
				selectedAccount: { ...state.selectedAccount },
				transactions: [...state.transactions, action.data]
			};
		case SORT:
			return {
				accounts: [...state.accounts],
				selectedAccount: { ...state.selectedAccount },
				transactions: [...state.transactions],
				sortedTransacitons: state.transactions
					.slice()
					.sort((a, b) => a.time - b.time)
			};
		default:
			return thatState;
	}
}

export default bankReducer;
