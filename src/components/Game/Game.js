import React, { useState } from 'react';
import GuessInput from '../Game/GuessInput';
import GuessResults from './GuessResults';
import LoseBanner from './LoseBanner';
import WinBanner from './WinBanner';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guess, setGuess] = useState('');
	const [guessList, setGuessList] = useState([]);
	return (
		<>
			<GuessInput
				guess={guess}
				setGuess={setGuess}
				guessList={guessList}
				setGuessList={setGuessList}
			/>
			<GuessResults guessList={guessList} answer={answer} />
			{guessList.includes(answer) && (
				<WinBanner numGuesses={guessList.length} />
			)}
			{guessList.length >= NUM_OF_GUESSES_ALLOWED && (
				<LoseBanner answer={answer} />
			)}
		</>
	);
}

export default Game;
