import * as React from "react";
import Card from "@mui/material/Card";
import styles from "./Card.module.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useAddTeamEvent } from "../../shared/api";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
const TEAM_ID = "goldenTeam";

export default function MultiActionAreaCard() {
	const [buttonToggle, setButtonToggle] = useState(false);
	const [buttonIcon, setButtonIcon] = useState();
	const addTeamEvent = useAddTeamEvent();
	return (
		<Card sx={{ width: 230, border: 3, borderColor: "white" }}>
			<CardActionArea>
				<IconButton
					aria-label="lamp"
					size="large"
					sx={{ color: "#f0bb41" }}
					onClick={async () => {
						setButtonToggle(!buttonToggle);
						if (buttonToggle == false) {
							const result = await addTeamEvent(
								"lampButton",
								"1",
								TEAM_ID
							);
							const timestamp =
								result?.data?.addTeamEvent.timestamp;

							console.log(
								`event ${"lampButton"} triggered at ${timestamp}`
							);
						} else {
							const result = await addTeamEvent(
								"lampButton",
								"0",
								TEAM_ID
							);
							const timestamp =
								result?.data?.addTeamEvent.timestamp;

							console.log(
								`event ${"lampButton"} triggered at ${timestamp}`
							);
						}
					}}
				>
					<LightbulbOutlinedIcon />
				</IconButton>
				<CardMedia
					className={styles.media}
					component="img"
					height="200"
					image="https://i.pinimg.com/564x/97/2d/82/972d82315bd383f68c13339161832799.jpg"
					alt="Person"
				></CardMedia>
				<CardContent>
					<Typography
						className={styles.cardTitle}
						variant="h5"
						component="div"
					>
						Maya
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions></CardActions>
		</Card>
	);
}
