import React from 'react';

export default function WinBanner({ numGuesses }) {
	return (
		<div className='happy banner'>
			<p>
				<strong>Congratulations!</strong> Got it in
				<strong> {numGuesses} guesses</strong>.
			</p>
		</div>
	);
}
