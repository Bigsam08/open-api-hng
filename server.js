// This is the server side as the main entry for the backend server
const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();
const port = process.env.PORT;

// cors middleware to allow access from any origin
app.use(cors());
app.use(express.json());


// api route to send user details
app.get('/api', (req, res) => {
	const userData = {
		email: process.env.EMAIL,
		current_datetime: new Date().toISOString(),
		github_url: process.env.GITHUBURL
	}

	res.status(200).json(userData);
})

app.listen(port, () => { console.log(`Express server now running on port ${port}`)});
