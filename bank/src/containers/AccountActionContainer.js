import { connect } from "react-redux";
import { deposit, withdraw, transfer } from "../actions";
import AccountActions from "../components/AccountActions";

import serialize from "form-serialize";

const mapStateToProps = state => {
	console.log(state);
	return { selectedAccount: state.selectedAccount };
};

const mapDispatchToProps = dispatch => {
	return {
		deposit: e => {
			e.preventDefault();
			const form = e.target;
			const data = serialize(form, { hash: true });
			console.log("data", data);
			dispatch(
				deposit({
					accountID: Number(data.id),
					money: Number(data.money)
				})
			);
			form.reset();
		},
		withdraw: e => {
			e.preventDefault();
			const form = e.target;
			const data = serialize(form, { hash: true });
			console.log("data", data);
			dispatch(
				withdraw({
					accountID: Number(data.id),
					money: Number(data.money)
				})
			);
			form.reset();
		},
		transfer: e => {
			e.preventDefault();
			const form = e.target;
			const data = serialize(form, { hash: true });
			console.log("data", data);
			transfer(data);
			dispatch(
				transfer({
					fromAccountID: Number(data.id),
					toAccountID: Number(data.toAccountID),
					money: Number(data.money)
				})
			);
			form.reset();
		}
	};
};

const AccountListContainer = connect(mapStateToProps, mapDispatchToProps)(
	AccountActions
);

export default AccountListContainer;
