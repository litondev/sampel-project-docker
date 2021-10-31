const express = require("express");
const app = express();

app.get("/", function (req, res) {
	res.send("Node And Npm Is Working");
});

app.listen(3000, function () {
	console.log("apps running under port 3000!");
});