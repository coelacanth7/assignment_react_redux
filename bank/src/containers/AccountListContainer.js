import { connect } from "react-redux";
import { viewAccount } from "../actions";
import AccountList from "../components/AccountList";

const mapStateToProps = state => {
	return { accounts: state.accounts };
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		viewAccount: id => {
			dispatch(viewAccount(id));
		}
	};
};

const AccountListContainer = connect(mapStateToProps, mapDispatchToProps)(
	AccountList
);

export default AccountListContainer;
