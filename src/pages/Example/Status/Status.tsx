import React from "react";
import { Spacer } from "../../../ui-lib/Spacer/Spacer";
import { votes } from "../../../shared/types";
import styles from "./Status.module.css";
import { StatusItem } from "./StatusItem";

export const Status = () => {
	return (
		<div className={styles.container}>
			<h3>Current Team Spirit</h3>
			<Spacer size={32} />
			<div className={styles.content}>
				{votes.map((vote) => (
					<StatusItem key={vote.id} vote={vote} />
				))}
			</div>
		</div>
	);
};
