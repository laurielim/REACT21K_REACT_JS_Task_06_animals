import React from "react";

const AnimalCard = ({ id, name, aclass, desc, img, link }) => {
	const truncate = (str, no_words) => {
		return str.split(" ").splice(0, no_words).join(" ");
	};

	return (
		<div key={id} className='post'>
			<img src={img} alt={name} />
			<h2>{name}</h2>
			<p>{aclass}</p>
			<p>{truncate(desc, 20)} [...]</p>
			<a href={link}>Read more</a>
		</div>
	);
};

export default AnimalCard;
