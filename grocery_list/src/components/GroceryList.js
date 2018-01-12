import React from "react";
import GroceryListItem from "./GroceryListItem";
import Filters from "./Filters";

const GroceryList = ({ groceries, purchaseItem }) => {
	const groceryList = groceries.map((grocery, index) => (
		<GroceryListItem
			grocery={grocery}
			onPurchaseClick={() => purchaseItem(grocery.id)}
			key={grocery.id}
		/>
	));

	const noGroceries = (
		<li className="list-group-item text-muted">Oops no groceries...</li>
	);

	return (
		<div className="container-fluid">
			<h1>The List</h1>
			<Filters />
			<div>
				<ul className="list-group">
					{groceries.length > 0 ? groceryList : noGroceries}
				</ul>
			</div>
		</div>
	);
};

export default GroceryList;
