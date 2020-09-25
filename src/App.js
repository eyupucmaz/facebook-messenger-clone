import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./App.css";
import Message from "./components/Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

function App() {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([
		// {
		// 	username: "eyup1",
		// 	message: "HEllo everyone",
		// },
		// {
		// 	username: "everyone",
		// 	message: "hey eyup",
		// },
		// {
		// 	username: "dummy",
		// 	message: "dummy message",
		// },
	]);
	const [username, setUsername] = useState("");

	useEffect(() => {
		setUsername(prompt("Please enter your name"));
	}, []);

	useEffect(() => {
		//! Run once when the app component loads
		db.collection("messages")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setMessages(
					snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
				);
			});
	}, []);

	const sendMessage = (event) => {
		event.preventDefault();
		//! All the logic to send a  message goes here
		db.collection("messages").add({
			message: input,
			username: username,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		// setMessages([...messages, { username: username, message: input }]);
		setInput("");
	};

	return (
		<div className="app">
			<img
				src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
				alt=""
			/>
			<h1>Facebook Messenger App 🚀 </h1>
			<h3>Welcome: {username}</h3>

			<form className="app__form">
				<FormControl className="app__formInput">
					<InputLabel>Enter a message...</InputLabel>
					<Input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
				</FormControl>

				<IconButton
					className="app__formButton"
					variant="contained"
					color="primary"
					type="submit"
					disabled={!input}
					onClick={sendMessage}
				>
					<SendIcon />
				</IconButton>

				{/* <Button>Send</Button> */}
			</form>

			<FlipMove className="app__messages">
				{/* <div className="app__messages"> */}
				{messages.map(({ message, id }) => (
					<Message key={id} message={message} username={username} />
				))}
				{/* </div> */}
			</FlipMove>
		</div>
	);
}

export default App;
