import React from "react";
import AccountCard from "./AccountCard";

const AccountList = ({ accounts, viewAccount }) => {
	const accountList = accounts.map(account => (
		<AccountCard
			account={account}
			key={account.id}
			onViewClick={() => viewAccount(account.id)}
		/>
	));

	const noAccounts = <p className="text-muted">no accounts bro...</p>;

	return (
		<div className="container">
			<h1>Accounts:</h1>
			<div className="card-deck">
				{accounts.length > 0 ? accountList : noAccounts}
			</div>
		</div>
	);
};

export default AccountList;
