import { flexbox } from "@mui/system";
import React, { useState } from "react";
import { useAddTeamEvent } from "../../shared/api";
import { votes } from "../../shared/types";
import styles from "./Home.module.css";
import { Button } from "../../ui-lib/Button/Button";
import Person from "../../ui-lib/Card/Card";
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
							<Grid item >
								<Person name='Anna' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCKegkuagnSD07i9Sjawm5qCIqF0P5cfQEPA&usqp=CAU' />
							</Grid>
							<Grid item >
								<Person name='Jocke' img='images/person2.jfif' />
							</Grid>
							<Grid item >
								<Person name='Pia' img='https://i1.sndcdn.com/avatars-6H5MKgzDgzDNhDUW-L2oatw-t500x500.jpg' />
							</Grid>
							<Grid item >
								<Person name='Hanna' img='images/person1.jfif' />
							</Grid>
							<Grid item >
								<Person name='Stefan' img='images/stefan.jfif' />
							</Grid>
							<Grid item >
								<Person name='Donald' img='images/donald.jfif' />
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
