import { connect } from "react-redux";
import FilterLink from "../components/FilterLink";
import { setAvailabilityFilter } from "../actions";

const mapStateToProps = (state, ownProps) => {
	return {
		active: state.groceryFilters === ownProps.filter
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: e => {
			e.preventDefault();
			dispatch(setAvailabilityFilter(ownProps.filter));
		}
	};
};

const FilterLinkContainer = connect(mapStateToProps, mapDispatchToProps)(
	FilterLink
);

export default FilterLinkContainer;
