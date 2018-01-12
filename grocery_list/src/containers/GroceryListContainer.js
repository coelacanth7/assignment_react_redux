import { connect } from "react-redux";
import GroceryList from "../components/GroceryList";
import { purchaseItem } from "../actions";

const getVisibleGroceries = (groceries, filter) => {
	switch (filter) {
		case "SHOW_ALL":
			return groceries;
		case "SHOW_PURCHASED":
			return groceries.filter(grocery => grocery.purchased);
		case "SHOW_NOT_PURCHASED":
			return groceries.filter(grocery => !grocery.purchased);
		default:
			return groceries;
	}
};

const mapStateToProps = state => {
	return {
		groceries: getVisibleGroceries(state.groceries, state.groceryFilters)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		purchaseItem: id => dispatch(purchaseItem(id))
	};
};

const GroceryListContainer = connect(mapStateToProps, mapDispatchToProps)(
	GroceryList
);

export default GroceryListContainer;
