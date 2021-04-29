import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AnimalInfo = () => {
	let { id } = useParams();
	const [animal, setAnimal] = useState();

	useEffect(() => {
		if (!animal) {
			axios
				.get("//localhost:3001/animals/" + id)
				.then((res) => setAnimal(res.data));
		}
	});

	let animalData = undefined;
	if (!animal) {
		animalData = <h1>Loading...</h1>;
	}

	if (animal) {
		animalData = (
			<div>
				<h1>{animal.name}</h1>
				<p>{animal.desc}</p>
				<img src={animal.img} alt={animal.name} />
			</div>
		);
	}
	return <>{animalData}</>;
};

export default AnimalInfo;
