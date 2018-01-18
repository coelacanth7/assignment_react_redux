import React from "react";
import AccountCard from "./AccountCard";
import AccountActionForm from "./AccountActionForm";

const AccountActions = ({ selectedAccount, deposit, withdraw, transfer }) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-3">
					{Object.keys(selectedAccount).length ? (
						<AccountCard account={selectedAccount} />
					) : (
						<h2>Select an account:</h2>
					)}
				</div>

				<div className="col-sm-9">
					<AccountActionForm action={deposit} type="DEPOSIT" />
					<AccountActionForm action={withdraw} type="WITHDRAW" />
					<AccountActionForm action={transfer} type="TRANSFER" />
				</div>
			</div>
		</div>
	);
};

export default AccountActions;
