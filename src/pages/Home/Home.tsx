import React, { useState } from "react";
import { useAddTeamEvent } from "../../shared/api";
import { emotions } from "../../shared/types";
import { Button } from "../../ui-lib/Button/Button";
import { Spacer } from "../../ui-lib/Spacer/Spacer";

export const Home = () => {
	const addTeamEvent = useAddTeamEvent();
	const [selected, setSelected] = useState(emotions[0].id);
	return (
		<>
			<h1>Welcome to the golden team app!</h1>
			<Spacer size={32} />
			<p>Here we can add windows</p>

			<Spacer size={48} />

			<h2>We can place the lamp-button here</h2>
			<Spacer size={16} />
			<Button
				label="Turn on the speacking lamp!"
				onClick={async () => {
					const result = await addTeamEvent(selected);
					const timestamp = result?.data?.addTeamEvent.timestamp;

					console.log(`event ${selected} triggered at ${timestamp}`);
				}}
			/>
			<Spacer size={16} />

			<Spacer size={48} />

			<h2>The voting section</h2>
			<Spacer size={16} />
		</>
	);
};
