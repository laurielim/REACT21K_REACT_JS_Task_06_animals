import React from "react";

const AnimalNew = ({ change, submit }) => {
	return (
		<form onSubmit={submit}>
			<label htmlFor='name'>Name</label>
			<input type='text' name='name' id='name' onChange={change} required />
			<label htmlFor='aclass'>Class</label>
			<select name='aclass' id='aclass' onChange={change} required>
				<option value='mammal'>Mammal</option>
				<option value='reptile'>Reptile</option>
				<option value='fish'>Fish</option>
				<option value='bird'>Bird</option>
				<option value='amphibian'>Amphibian</option>
				<option value='invertebrate'>Invertebrate</option>
			</select>
			<label htmlFor='img'>img url</label>
			<input type='text' name='img' id='img' onChange={change} required />
			<label htmlFor='desc'>Description</label>
			<textarea
				name='desc'
				id='desc'
				cols='30'
				rows='10'
				onChange={change}
				required
			></textarea>
			<label htmlFor='link'>Read more link</label>
			<input type='url' name='link' id='link' onChange={change} required />
			<button type='submit'>Add new animal</button>
		</form>
	);
};

export default AnimalNew;
