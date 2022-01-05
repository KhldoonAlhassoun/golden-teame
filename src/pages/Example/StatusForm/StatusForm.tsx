import React, { useEffect, useState } from "react";
import { Button } from "../../../ui-lib/Button/Button";
import { EmojiPicker } from "../../../ui-lib/EmojiPicker/EmojiPicker";
import { Spacer } from "../../../ui-lib/Spacer/Spacer";
import { useAddTeamEvent } from "../../../shared/api";
import { votes } from "../../../shared/types";
import styles from "./StatusForm.module.css";
const EMOTION_ID = "goldenTeam_emotions";

export const StatusForm = () => {
	const addTeamEvent = useAddTeamEvent();
	const [selected, setSelected] = useState(votes[0].id);
	const [isdisabled, setDisabled] = useState(false);

	useEffect(() => {
		const timer = setInterval(() => setDisabled(false), 30000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.voteButtonContainer}>
				<EmojiPicker
					items={votes}
					value={selected}
					onChange={setSelected}
				/>
				<Spacer size={15} />
				<button
					className={styles.btn}
					onClick={async () => {
						const result = await addTeamEvent(
							selected,
							selected,
							EMOTION_ID
						);
						const timestamp = result?.data?.addTeamEvent.timestamp;

						console.log(
							`event ${selected} triggered at ${timestamp}`
						);

						setDisabled(true);
					}}
					disabled={isdisabled}
				>
					Vote!
				</button>
			</div>
		</div>
	);
};
