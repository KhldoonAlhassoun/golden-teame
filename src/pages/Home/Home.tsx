import { flexbox } from "@mui/system";
import React, { useState, } from "react";
import { useAddTeamEvent } from "../../shared/api";
import { votes } from "../../shared/types";
import styles from "./Home.module.css";
import { Button } from "../../ui-lib/Button/Button";
import MultiActionAreaCard from "../../ui-lib/Card/Card";
import { Spacer } from "../../ui-lib/Spacer/Spacer";
import { StatusForm } from "../Example/StatusForm/StatusForm";
import Grid from '@mui/material/Grid';

export const Home = () => {
	const addTeamEvent = useAddTeamEvent();
	const [selected, setSelected] = useState(votes[0].id);



		
	  
	return (
		<>
		<div className={styles.home}>
			<div className={styles.font}>  <h2>Welcome to the golden team app!</h2> </div>
			
			<Spacer size={30} />
			<div className={styles.PictureContainer}>

			<Grid container spacing={1.8}>
  <Grid item xs={4}>
    <MultiActionAreaCard />
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
  <Grid item xs={4}>
    <MultiActionAreaCard />
  </Grid>
  <Grid item xs={4}>
    <MultiActionAreaCard />
  </Grid>
</Grid>
			</div>
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
			</div>
			</>
	);
};

