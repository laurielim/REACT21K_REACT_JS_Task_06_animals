import React, { useState, useEffect } from "react";
import axios from "axios";

import AnimalsList from "../Animals/AnimalsList";
import AnimalNew from "../Animals/AnimalNew";

const Main = () => {
	const [newAnimal, setNewAnimal] = useState({
		name: "",
		aclass: "",
		img: "",
		desc: "",
		link: "",
	});

	const valueChangeHandler = (e) => {
		setNewAnimal({ ...newAnimal, [e.target.name]: e.target.value });
	};

	const submitHandler = (e) => {
		e.preventDefault();
		axios.post("http://localhost:3001/animals", newAnimal).then(e.target.reset);
	};

	return (
		<main>
			<p>Main area </p>
			<AnimalsList />
			<AnimalNew change={valueChangeHandler} submit={submitHandler} />
		</main>
	);
};

export default Main;
