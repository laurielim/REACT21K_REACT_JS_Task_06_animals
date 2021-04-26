import React from "react";

const AnimalNew = () => {
	return (
		<div>
			<form>
				<label htmlFor='name'>Name</label>
				<input type='text' name='name' id='name' />
				<label htmlFor='aclass'>Class</label>
				<input type='text' name='aclass' id='aclass' />
				<label htmlFor='img'>img url</label>
				<input type='text' name='img' id='img' />
				<label htmlFor='desc'>Description</label>
				<textarea name='desc' id='desc' cols='30' rows='10'></textarea>
				<label htmlFor='link'>Read more link</label>
				<input type='url' name='link' id='link' />
				<button type='submit'>Add new animal</button>
			</form>
		</div>
	);
};

export default AnimalNew;
