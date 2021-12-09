import React from "react";
import { Spacer } from "../../ui-lib/Spacer/Spacer";

export const Home = () => {
	return (
		<>
			<h1>Welcome to the golden team app!</h1>
			<Spacer size={32} />
			<p>Here we can add windows</p>

			<Spacer size={48} />

			<h2>We can place the lamp-button here</h2>
			<Spacer size={16} />
			<p>button button button button button</p>
			<Spacer size={16} />

			<Spacer size={48} />

			<h2>The voting section</h2>
			<Spacer size={16} />
		</>
	);
};
