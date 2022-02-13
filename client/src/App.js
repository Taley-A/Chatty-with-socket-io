import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import io from "socket.io-client";
import Chat from "./components/Chat";
import SignUp from "./components/SignUp";

const socket = io.connect("http://localhost:8000");

const App = () => {
	const [userName, setUserName] = useState("");
	const [room, setRoom] = useState("");
	const [readyToSubmit, setReadytosubmit] = useState(false);

	const joinRoom = (ev) => {
		ev.preventDefault();
		if (userName !== "" && room !== "") {
			socket.emit("joinRoom", room);
			setReadytosubmit(true);
		}
	};

	return (
		<>
			<GlobalStyles />
			<Box>
				<Wrapper>
					<Title>Welcome to Chatty!</Title>
					<Info>Instantly connect and chat with anyone!</Info>
					<InputContainer>
						<Name
							type="text"
							placeholder="User Name"
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
					</InputContainer>

					{readyToSubmit === true ? (
						<Chat socket={socket} userName={userName} room={room} />
					) : (
						<SignUp />
					)}
				</Wrapper>
			</Box>
		</>
	);
};

export default App;

const Box = styled.div`
	display: flex;
	justify-content: center;
	border: 5px solid green;
	width: 100vw;
	height: 100vh;
`;

const Wrapper = styled.form`
	text-align: center;
	border: 5px solid green;
	margin: 1rem;
`;
const Title = styled.h2`
	margin: 3rem;
`;
const Info = styled.div`
	margin: 2rem;
`;

const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const Name = styled.input`
	margin: 1rem;
`;
const Room = styled.input`
	margin-bottom: 1rem;
`;
const Button = styled.button``;
