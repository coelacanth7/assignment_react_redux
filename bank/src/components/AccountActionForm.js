import React from "react";

const AccountActionForm = ({ action, type }) => {
	const toInput = (
		<div className="form-group mb-2">
			<label htmlFor="accountNumber"> To Account #</label>
			<input
				type="number"
				className="form-control"
				id="accountNumber"
				placeholder="1"
				name="toAccountID"
			/>
		</div>
	);

	return (
		<form className="form" onSubmit={action}>
			<label htmlFor="accountNum">accountNum</label>
			<input type="number" id="accountNum" name="id" className="form-control" />
			<div className="form-group mb-2">
				<label htmlFor={type} className="sr-only">
					{type}
				</label>
				<input
					type="text"
					readOnly
					className="form-control-plaintext"
					id={type}
					value={type}
				/>
			</div>
			{type === "TRANSFER" ? toInput : ""}
			<div className="form-group mx-sm-3 mb-2">
				<label htmlFor="amount" className="sr-only">
					amount
				</label>
				$
				<input
					type="number"
					className="form-control"
					id="amount"
					placeholder="100"
					name="money"
				/>
			</div>
			<button type="submit" className="btn btn-primary mb-2">
				{type}
			</button>
		</form>
	);
};

export default AccountActionForm;
