import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";

const Chat = ({ socket, userName, room }) => {
	const [currentMessage, setCurrentMessage] = useState("");

	useEffect(() => {
		socket.on("receiveMessage", (data) => {
			console.log(data);
		});
	}, [socket]);

	const sendMessage = async () => {
		// Not allowing sending empty messages
		if (currentMessage !== "") {
			const messageData = {
				room: room,
				user: userName,
				message: currentMessage,
				time: moment().format("MMMM Do, h:mm a"),
			};
			await socket.emit("sendMessage", messageData);
		}
	};

	return (
		<Container>
			<Header>Chatty: Live Chat</Header>
			<Body></Body>
			<Footer>
				<TextBox
					type="text"
					placeholder="Type Here..."
					onChange={(ev) => {
						setCurrentMessage(ev.target.value);
					}}
				/>
				<Button onClick={sendMessage}>Enter</Button>
			</Footer>
		</Container>
	);
};

export default Chat;

const Container = styled.div``;
const Header = styled.div``;
const Body = styled.div``;
const Footer = styled.div``;
const TextBox = styled.input``;
const Button = styled.button``;
