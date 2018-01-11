import React from "react";
import PurchaseButton from "./PurchaseButton";

const GroceryListItem = ({ grocery, onPurchaseClick }) => {
	const { item, quantity, purchased } = grocery;

	return (
		<li className="list-group-item">
			* {item} - quantity: {quantity} -
			<PurchaseButton purchased={purchased} onPurchaseClick={onPurchaseClick} />
		</li>
	);
};

export default GroceryListItem;
