import React, { useState } from "react";
import { Button } from "../../../ui-lib/Button/Button";
import { EmojiPicker } from "../../../ui-lib/EmojiPicker/EmojiPicker";
import { Spacer } from "../../../ui-lib/Spacer/Spacer";
import { useAddTeamEvent } from "../../../shared/api";
import { votes } from "../../../shared/types";
import styles from "./StatusForm.module.css";

export const StatusForm = () => {
	const addTeamEvent = useAddTeamEvent();
	const [selected, setSelected] = useState(votes[0].id);

	return (
		<div className={styles.container}>
			<h4 className={styles.formTitle}>Send vote to team</h4>
			<div className={styles.voteButtonContainer}>
				<EmojiPicker
					items={votes}
					value={selected}
					onChange={setSelected}
				/>
				<Spacer size={15} />
				<Button
					label="Vote!"
					onClick={async () => {
						const result = await addTeamEvent(selected, selected);
						const timestamp = result?.data?.addTeamEvent.timestamp;

						console.log(
							`event ${selected} triggered at ${timestamp}`
						);
					}}
				/>
			</div>
		</div>
	);
};
