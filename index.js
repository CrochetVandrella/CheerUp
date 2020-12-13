const axios = require("axios");
const config = require('./package.json');
const https = require('https');
const fetch = require('node-fetch');
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("How do you feel today? ", function(mood) {
	var bibleSite = `https://api.scripture.api.bible/v1/bibles/2f0fd81d7b85b923-01/search?query=${mood}&sort=relevance`;
	https.get(bibleSite, res => {
	res.setEncoding("utf8");
		var body = "";
		res.on("data", bv => {
			body += bv;
		});
		res.on("end", () => {
			console.log(body);
		});
});



rl.on("close", function() {
	console.log("\nWe hope this application has assisted you today. Thank you for choosing CheerUP!");
	process.exit(0);
});
