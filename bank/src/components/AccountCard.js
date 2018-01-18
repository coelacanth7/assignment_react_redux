import React from "react";
import Button from "./elements/Button";

const AccountCard = ({ account, onViewClick }) => {
	const { id, name, money } = account;

	return (
		<div className="card" style={{ maxWidth: "320px" }}>
			<div className="card-block">
				<h4>{name}</h4>
				<p>Account #: {id}</p>
				<h1>${money}</h1>
				<Button onClick={onViewClick} color="success" children="viewAccount" />
			</div>
		</div>
	);
};

export default AccountCard;
