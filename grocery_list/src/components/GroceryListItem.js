import React from "react";

const GroceryListItem = ({ grocery, onPurchaseClick }) => {
	const { item, quantity, purchased } = grocery;

	return (
		<li className="list-group-item">
			* {item} - quantity: {quantity} - purchased: {purchased.toString()}
		</li>
	);
};

export default GroceryListItem;
