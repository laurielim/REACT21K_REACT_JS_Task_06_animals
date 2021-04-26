import React from "react";

import AnimalsList from "../Animals/AnimalsList";
import AnimalNew from "../Animals/AnimalNew";

const Main = () => {
	return (
		<main>
			<p>Main area </p>
			<AnimalsList />
			<AnimalNew />
		</main>
	);
};

export default Main;
