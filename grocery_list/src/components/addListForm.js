import React from "react";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";
import Button from "./elements/Button";

const AddListForm = ({ onSubmit }) => (
	<form className="container" onSubmit={onSubmit}>
		<h1>
			Add A Grocery Item{" "}
			<span className="glyphicon glyphicon-search" aria-hidden="true" />
		</h1>
		<InputGroup name="item" labelText="Item">
			<Input name="item" />
		</InputGroup>
		<InputGroup name="quantity" labelText="Quantity">
			<Input name="quantity" />
		</InputGroup>
		<Button type="submit" color="primary">
			Save Item
		</Button>
	</form>
);

// AddListForm.propTypes = {
// 	onSubmit: PropTypes.func.isRequired
// };

export default AddListForm;
