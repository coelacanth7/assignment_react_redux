import React from "react";
import Button from "./elements/Button";

const PurchaseButton = ({ purchased, onPurchaseClick }) => {
	if (purchased) {
		return <p className="text-muted">Purchased!</p>;
	}

	return (
		<Button onClick={onPurchaseClick} color="success">
			Purchase
		</Button>
	);
};

export default PurchaseButton;
