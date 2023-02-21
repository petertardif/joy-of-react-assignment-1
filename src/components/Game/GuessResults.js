import React from 'react';
import Guess from './Guess.js';
import { range } from '../../utils.js';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';

function GuessList({ guessList, answer }) {
	const initialGuessList = range(0, NUM_OF_GUESSES_ALLOWED);

	return (
		<div className='guess-results'>
			{initialGuessList.map((guess, index) => {
				return (
					<Guess
						key={crypto.randomUUID()}
						guess={guessList[index]}
						answer={answer}
					/>
				);
			})}
		</div>
	);
}

export default GuessList;
