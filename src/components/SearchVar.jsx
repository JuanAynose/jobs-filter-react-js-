import { useState } from 'react';

const SearchVar = ({ name }) => {
	const [searchChamp, setSearchChamp] = useState('');
	console.log({ name });
	return (
		<div>
			<p>{searchChamp}</p>
			<form
				onSubmit={ev => {
					ev.preventDefault();
					setSearchChamp(ev.target.inputChamp.value);
					MakeCall(searchChamp);
				}}
			>
				<input type='text' name='inputChamp' />
			</form>
		</div>
	);
};

const MakeCall = info => {
	return fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then(response => response.json())
		.then(json => console.log(json));
};

export default SearchVar;
