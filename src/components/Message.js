import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./Message.css";

function Message({ message, username }) {
	return (
		<div className="message">
			<Card className="message__card">
				<CardContent>
					<Typography color="primary" variant="h6" component="h3">
						{username}: {message}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}

export default Message;
