const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ origin: "*" }));

const port = 3004;

let value = 110;

setInterval(() => {
	if (Math.floor(Math.random() * 10) % 2 === 0) {
		value = value + Math.random() * 100;
	} else {
		value = value - Math.random() * 100;
	}
	if (value < 0) {
		value = -value;
	}
}, 60 * 1000);

app.get("/", (req, res) => {
	res.send("Go to /getValue");
});

app.get("/getValue", (req, res) => {
	res.send(`${Math.floor(value)}`);
});

app.listen(process.env.PORT || port, () => {
	console.log(`Listening`);
});
