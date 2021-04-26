import React, { useState, useEffect } from "react";
import axios from "axios";

import AnimalCard from "./AnimalCard";

const AnimalsList = () => {
	const [animals, setAnimals] = useState([]);

	const API = "http://localhost:3001/animals";

	useEffect(() => {
		axios.get(API).then((res) => setAnimals(res.data));
	}, []);

	return (
		<div className='posts'>
			{animals.map((animal) => {
				return <AnimalCard {...animal} />;
			})}
		</div>
	);
};

export default AnimalsList;
