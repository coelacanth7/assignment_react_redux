import React from "react";

const AccountCard = ({ account }) => {
	const { id, name, money } = account;

	return (
		<div className="card" style={{ maxWidth: "320px" }}>
			<div className="card-block">
				<h4>{name}</h4>
				<p>Account #: {id}</p>
				<h1>${money}</h1>
			</div>
		</div>
	);
};

export default AccountCard;
