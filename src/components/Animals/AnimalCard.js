import React from "react";
import { Link } from "react-router-dom";

const AnimalCard = ({ id, name, aclass, desc, img }) => {
	const truncate = (str, no_words) => {
		return str.split(" ").splice(0, no_words).join(" ");
	};

	return (
		<div className='post'>
			<img src={img} alt={name} />
			<h2>{name}</h2>
			<p>{aclass}</p>
			<p>{truncate(desc, 20)} [...]</p>
			<Link to={`/${id}`}>Read more</Link>
		</div>
	);
};

export default AnimalCard;
