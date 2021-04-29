import React, { useState, useEffect } from "react";
import axios from "axios";

const API = "http://api.weatherstack.com/current";

const params = {
	access_key: process.env.REACT_APP_WEATHERSTACK_API_KEY,
	query: "Barcelona",
};

const Weather = () => {
	const [weather, setWeather] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(API, { params })
			.then((res) => setWeather(res))
			.then(setIsLoading(false));
	});
	return <div></div>;
};

export default Weather;
