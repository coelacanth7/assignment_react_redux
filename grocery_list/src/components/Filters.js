import React from "react";
import FilterLinkContainer from "../containers/FilterLinkContainer";

const Filters = () => (
	<div className="Filters">
		<FilterLinkContainer filter="SHOW_ALL">Show all</FilterLinkContainer>
		{", "}
		<FilterLinkContainer filter="SHOW_PURCHASED">
			Show purchased
		</FilterLinkContainer>
		{", "}
		<FilterLinkContainer filter="SHOW_NOT_PURCHASED">
			Show not purchased
		</FilterLinkContainer>
	</div>
);

export default Filters;
