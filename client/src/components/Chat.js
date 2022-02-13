import React from "react";
import styled from "styled-components";

const Chat = ({ socket, userName, room }) => {
	return (
		<Container>
			<Header>Chatty: Live Chat</Header>
			<Body></Body>
			<Footer>
				<TextBox type="text" placeholder="Type Here..." />
				<Button>Enter</Button>
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
