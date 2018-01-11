import React from "react";
import GroceryListItem from "./GroceryListItem";

const GroceryList = ({ groceries, purchaseItem }) => {
	const groceryList = groceries.map((grocery, index) => (
		<GroceryListItem
			grocery={grocery}
			key={grocery.id}
			onPurchaseClick={() => purchaseItem(grocery.id)}
		/>
	));

	const noGroceries = <p className="text-muted">Oops no groceries...</p>;

	return (
		<div className="container-fluid">
			<h1>The List</h1>
			{/* <Filters /> */}
			<div>
				{groceries.length > 0 ? (
					<ul className="list-group">{groceryList} </ul>
				) : (
					{ noGroceries }
				)}
			</div>
		</div>
	);
};

export default GroceryList;
