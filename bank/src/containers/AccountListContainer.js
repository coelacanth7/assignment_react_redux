import { connect } from "react-redux";
import { viewAccount } from "../actions";
import AccountList from "../components/AccountList";

const mapStateToProps = state => {
	console.log(state);
	return { accounts: state.accounts };
};

const mapDispatchToProps = dispatch => {
	return {
		viewAccount: id => {
			viewAccount(id);
		}
	};
};

const AccountListContainer = connect(mapStateToProps, mapDispatchToProps)(
	AccountList
);

export default AccountListContainer;
