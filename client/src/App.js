import React, { useState } from "react";
import styled from "styled-components";
import io from "socket.io-client";
import Chat from "./components/Chat";

const socket = io.connect("http://localhost:8000");

function App() {
	const [userName, setUserName] = useState("");
	const [room, setRoom] = useState("");

	const joinRoom = () => {
		if (userName !== "" && room !== "") {
			socket.emit("joinRoom", room);
		}
	};

	return (
		<Box>
			<Title>Join a Conversation!</Title>
			<Name
				type="text"
				placeholder="First Name"
				onChange={(ev) => {
					setUserName(ev.target.value);
				}}
			/>
			<Room
				type="text"
				placeholder="Room ID"
				onChange={(ev) => {
					setRoom(ev.target.value);
				}}
			/>
			<Button onClick={joinRoom}>Join a Room</Button>

			<Chat socket={socket} userName={userName} room={room} />
		</Box>
	);
}

export default App;

const Box = styled.div``;

const Title = styled.h3``;

const Name = styled.input``;
const Room = styled.input``;
const Button = styled.button``;
