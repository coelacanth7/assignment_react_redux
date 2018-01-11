import { connect } from "react-redux";
import serialize from "form-serialize";
import { addToList } from "../actions";
import addListForm from "../components/addListForm";

const mapDispatchToProps = dispatch => {
	return {
		onSubmit: e => {
			e.preventDefault();
			const form = e.target;
			const data = serialize(form, { hash: true });

			dispatch(addToList(data));
			form.reset();
		}
	};
};

const AddToListContainer = connect(null, mapDispatchToProps)(addListForm);

export default AddToListContainer;
