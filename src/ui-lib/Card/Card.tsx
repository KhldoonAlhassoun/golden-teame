import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard() {
	return (
		<Card sx={{ maxWidth: 200 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="140"
					image="/static/images/cards/contemplative-reptile.jpg"
					alt="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Maya
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button color="primary" startIcon="💡"></Button>
			</CardActions>
		</Card>
	);
}
