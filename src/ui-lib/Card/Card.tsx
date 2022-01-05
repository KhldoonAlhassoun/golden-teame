import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
//import styles from "./Card.module.css";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
	Button,
	CardActionArea,
	CardActions,
	outlinedInputClasses,
} from "@mui/material";
import { useAddTeamEvent } from "../../shared/api";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import { color } from "@mui/system";
import { yellow } from "@mui/material/colors";
const TEAM_ID = "goldenTeam";

function Dummy_tar_bort_fel() {
	// denna funktion används inte
	// detta tar bort fel i editorn - vet inte varför
	<Lamp />;
}

function Lamp() {
	const [buttonToggle, setButtonToggle] = useState(false);
	const [isOutlined, setIsOutlined] = useState(false);
	const addTeamEvent = useAddTeamEvent();

	return (
		<IconButton
			aria-label={"lamp"}
			size="small"
			sx={{ color: "black", backgroundColor: "white" }}
			onClick={async () => {
				setIsOutlined(!isOutlined);
				setButtonToggle(!buttonToggle);
				console.log(`event ${"lampButton"} triggered`);
				if (buttonToggle == false) {
					const result = await addTeamEvent(
						"lampButton",
						"1",
						TEAM_ID
					);
					const timestamp = result?.data?.addTeamEvent.timestamp;
					console.log(
						`event ${"lampButton"} triggered at ${timestamp}`
					);
				} else {
					const result = await addTeamEvent(
						"lampButton",
						"0",
						TEAM_ID
					);
					const timestamp = result?.data?.addTeamEvent.timestamp;
					console.log(
						`event ${"lampButton"} triggered at ${timestamp}`
					);
				}
			}}
		>
			{isOutlined ? (
				<LightbulbIcon sx={{ color: yellow[800] }} />
			) : (
				<LightbulbOutlinedIcon sx={{ color: yellow[800] }} />
			)}
		</IconButton>
	);
}

function Person(props: { name: any; img: any }) {
	//console.log(props.name,props.img);
	return (
		<Card sx={{ position: "relative", width: 240, borderRadius: 5 }}>
			<CardMedia component="img" height="150" image={props.img} />
			<CardActionArea sx={{ position: "absolute", top: 5, left: 5 }}>
				<Lamp />
			</CardActionArea>
			<CardContent sx={{ position: "absolute", bottom: -25, left: 0 }}>
				<Typography variant="h5" component="div" color="white">
					{props.name}
				</Typography>
			</CardContent>
		</Card>
	);
}

/*
function PersonOld() {
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
*/

export default Person;
