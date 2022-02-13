"use strict";

const path = require("path");
const http = require("http");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { Server } = require("socket.io");

// const {

// } = require("./handlers");

const PORT = 8000;

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
	},
});

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

// Run when user connects
io.on("connection", (socket) => {
	console.log("New connection from " + socket.id);

	socket.on("disconnect", () => {
		console.log(`User ${socket.id} Disconnected.`);
	});
});

app.get("/", (req, res) => {
	res.status(200).json({
		status: 200,
		message: "Welcome to Taley's chat application.",
	});
});

// This is our catch all endpoint.
app.get("*", (req, res) => {
	res.status(404).json({
		status: 404,
		message: "This is obviously not what you're looking for.",
	});
});

server.listen(PORT, () => {
	console.info("🌍 Listening on port " + PORT);
});
