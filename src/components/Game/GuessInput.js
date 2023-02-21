import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessInput({ guess, setGuess, guessList, setGuessList }) {
	const handleSubmit = (event) => {
		event.preventDefault();
		const newGuessList = [...guessList, guess];
		setGuessList(newGuessList);
		setGuess('');
	};

	return (
		<form className='guess-input-wrapper' onSubmit={handleSubmit}>
			<label htmlFor='guess-input'>Enter guess:</label>
			<input
				id='guess-input'
				type='text'
				pattern='\w{5,5}'
				value={guess}
				onChange={(event) => {
					setGuess(event.target.value.toUpperCase());
				}}
				disabled={guessList.length >= NUM_OF_GUESSES_ALLOWED}
			/>
		</form>
	);
}

export default GuessInput;
