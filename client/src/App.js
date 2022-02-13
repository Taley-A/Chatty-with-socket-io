import React from "react";
import style from "styled-components";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8000");

function App() {
	return (
		<div className="App">
			<header className="App-header">Chatty Messenger</header>
		</div>
	);
}

export default App;
