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
			break;
		case VIEW_ACCOUNT:
			return {
				accounts: [...state.accounts],
				selectedAccount: state.accounts.map(account => {
					if (account.id === action.data) {
						return account;
					}
				}),
				transactions: [...state.transactions]
			};

			break;
		case DEPOSIT:
			return {
				accounts: state.accounts.map(account => {
					if (account.id === action.data.accountID) {
						account.money += action.data.money;
					}

					return account;
				}),
				selectedAccount: { ...state.selectedAccount },
				transactions: [...state.transactions, action.data]
			};
			break;
		case WITHDRAW:
			return {
				accounts: state.accounts.map(account => {
					if (account.id === action.data.accountID) {
						account.money -= action.data.money;
					}

					return account;
				}),
				selectedAccount: { ...state.selectedAccount },
				transactions: [...state.transactions, action.data]
			};
			break;
		case TRANSFER:
			return {
				accounts: state.accounts.map(account => {
					if (account.id === action.data.fromAccountID) {
						account.money -= action.data.money;
					}

					if (account.id === action.data.toAccountID) {
						account.money += action.data.money;
					}

					return account;
				}),
				selectedAccount: { ...state.selectedAccount },
				transactions: [...state.transactions, action.data]
			};
			break;
		case SORT:
			return {
				accounts: [...state.accounts],
				selectedAccount: { ...state.selectedAccount },
				transactions: [...state.transactions],
				sortedTransacitons: state.transactions.sort((a, b) => a.time - b.time)
			};
			break;
		default:
			return thatState;
	}
}

export default bankReducer;
