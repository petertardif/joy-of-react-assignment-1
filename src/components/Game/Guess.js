import React from 'react';
import { checkGuess } from '../../game-helpers';

export default function Guess({ guess, answer }) {
	const validatedGuess = checkGuess(guess, answer);

	if (guess === undefined) {
		guess = '     ';
	}
	const aValidatedGuess = !validatedGuess ? Array.from(guess) : validatedGuess;

	return (
		<div>
			<p className='guess'>
				{aValidatedGuess.map((obj) => (
					<span
						className={!validatedGuess ? 'cell' : `cell ${obj.status}`}
						key={crypto.randomUUID()}
					>
						{obj.letter}
					</span>
				))}
			</p>
		</div>
	);
}
