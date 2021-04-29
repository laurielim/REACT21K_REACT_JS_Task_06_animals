import React from "react";

import AnimalCard from "./AnimalCard";

const AnimalsList = ({ animals }) => {
	return (
		<div className='posts'>
			{animals.map((animal) => {
				return <AnimalCard {...animal} />;
			})}
		</div>
	);
};

export default AnimalsList;
