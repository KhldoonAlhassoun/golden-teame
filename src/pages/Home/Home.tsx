import React, { useState } from "react";
import { useAddTeamEvent } from "../../shared/api";
import { votes } from "../../shared/types";
import { Button } from "../../ui-lib/Button/Button";
import MultiActionAreaCard from "../../ui-lib/Card/Card";
import { Spacer } from "../../ui-lib/Spacer/Spacer";
import { StatusForm } from "../Example/StatusForm/StatusForm";

export const Home = () => {
	const addTeamEvent = useAddTeamEvent();
	const [selected, setSelected] = useState(votes[0].id);
	return (
		<>
			<h2>Welcome to the golden team app!</h2>

			<Spacer size={30} />
			<MultiActionAreaCard />
			<Spacer size={100} />
			<Button
				label="Turn on the speacking lamp!"
				onClick={async () => {
					const result = await addTeamEvent(selected);
					const timestamp = result?.data?.addTeamEvent.timestamp;

					console.log(`event ${selected} triggered at ${timestamp}`);
				}}
			/>

			<Spacer size={16} />
			<StatusForm />
		</>
	);
};
