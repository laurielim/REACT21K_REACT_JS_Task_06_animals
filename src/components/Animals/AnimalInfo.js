import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const AnimalInfo = () => {
	let { id } = useParams();
	let history = useHistory();
	const [animal, setAnimal] = useState();

	useEffect(() => {
		const getData = async () => {
			if (!animal) {
				const res = await axios.get("//localhost:3001/animals/" + id);
				setAnimal(res.data);
			}
		};
		getData();
	});

	let animalData = undefined;
	if (!animal) {
		animalData = <h1>Loading...</h1>;
	}

	if (animal) {
		animalData = (
			<>
				<div>
					<h1>{animal.name}</h1>
					<p>{animal.desc}</p>
					<div className='image-container'>
						<img src={animal.img} alt={animal.name} />
					</div>
					<a href={animal.link}>Read more on Wikipedia</a>
				</div>
				<button onClick={() => history.goBack()}>Back to animals</button>
			</>
		);
	}
	return <>{animalData}</>;
};

export default AnimalInfo;
