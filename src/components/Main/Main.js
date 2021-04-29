import React, { useState, useEffect } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

import AnimalsList from "../Animals/AnimalsList";
import AnimalNew from "../Animals/AnimalNew";
import AnimalInfo from "../Animals/AnimalInfo";

const Main = () => {
	const [animals, setAnimals] = useState([]);
	const [newAnimal, setNewAnimal] = useState({
		name: "",
		aclass: "mammal",
		img: "",
		desc: "",
	});
	const [isLoading, setIsLoading] = useState(false);

	const API = "http://localhost:3001/animals";
	useEffect(() => {
		setIsLoading(true);
		axios
			.get(API)
			.then((res) => {
				setAnimals(res.data);
				setIsLoading(false);
			})
			.then();
	}, []);

	const valueChangeHandler = (e) => {
		setNewAnimal({ ...newAnimal, [e.target.name]: e.target.value });
	};

	const submitHandler = (e) => {
		e.preventDefault();
		axios
			.post(API, newAnimal)
			.then(() => {
				return axios.get(API);
			})
			.then((res) => setAnimals(res.data));
		e.target.reset();
	};

	if (isLoading) {
		return (
			<main>
				<h1>Page Loading</h1>
			</main>
		);
	}

	return (
		<main>
			<Switch>
				<Route path='/:id'>
					<AnimalInfo />
				</Route>
				<Route path='/' exact>
					<h1>Animals</h1>
					<AnimalsList animals={animals} />
					<AnimalNew change={valueChangeHandler} submit={submitHandler} />
				</Route>
			</Switch>
		</main>
	);
};

export default Main;
