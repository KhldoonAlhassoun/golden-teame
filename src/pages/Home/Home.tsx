import { flexbox } from "@mui/system";
import React, { useState } from "react";
import { useAddTeamEvent } from "../../shared/api";
import { votes } from "../../shared/types";
import styles from "./Home.module.css";
import { Button } from "../../ui-lib/Button/Button";
import MultiActionAreaCard from "../../ui-lib/Card/Card";
import { Spacer } from "../../ui-lib/Spacer/Spacer";
import { StatusForm } from "../Example/StatusForm/StatusForm";
import Grid from "@mui/material/Grid";
import { Status } from "../Example/Status/Status";

export const Home = () => {
	const addTeamEvent = useAddTeamEvent();
	const [selected, setSelected] = useState(votes[0].id);
	return (
		<>
			<div className={styles.home}>
				<div className={styles.font}>
					{" "}
					<h2 className={styles.pageTitle}>
						Welcome to the golden team app!
					</h2>{" "}
				</div>

				<Spacer size={20} />
				<div>
					<div className={styles.PictureContainer}>
						<Grid container spacing={1.8}>
							<Grid item xs={4}>
								<MultiActionAreaCard />
							</Grid>
							<Grid item xs={4}>
								<MultiActionAreaCard />
							</Grid>
							<Grid item xs={4}>
								<div className={styles.cardBorder}>
									<MultiActionAreaCard />
								</div>
							</Grid>
							<Grid item xs={4}>
								<MultiActionAreaCard />
							</Grid>
							<Grid item xs={4}>
								<MultiActionAreaCard />
							</Grid>
							<Grid item xs={4}>
								<MultiActionAreaCard />
							</Grid>
						</Grid>
					</div>

					<StatusForm />
				</div>
				<Spacer size={20} />
				<Status />
			</div>
		</>
	);
};
