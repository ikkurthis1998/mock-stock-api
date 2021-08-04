const express = require("express");
const app = express();
const port = 3000;

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
}, 24 * 60 * 60 * 1000);

app.get("/getValue", (req, res) => {
	res.send(`${value}`);
});

app.listen(process.env.PORT || port, () => {
	console.log(`Listening`);
});
