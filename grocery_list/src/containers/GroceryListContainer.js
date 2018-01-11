import { connect } from "react-redux";
import GroceryList from "../components/GroceryList";
import { purchaseItem } from "../actions";

const getVisibleGroceries = (groceries, filter) => {
	switch (filter) {
		case "SHOW_ALL":
			return groceries;
		case "SHOW_AVAILABLE":
			return groceries.filter(grocery => grocery.available);
		case "SHOW_ADOPTED":
			return groceries.filter(grocery => !grocery.available);
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
