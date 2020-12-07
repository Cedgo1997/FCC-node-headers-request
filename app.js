// Express
const express = require('express');
const app = express();

// Root level Endpoint
app.get('/', (req, res) => {
	res.json({
		Greetings: 'Hello, wanna know who you are?',
		instructions: 'Then, set url to /api/whoami, and you will',
	});
});

// Who am i endpoint

app.get('/api/whoami', (req, res) => {
	if (req.header('x-forwarded-for')) {
		res.json({
			ipaddress: req.header('x-forwarded-for').split(',')[0],
			language: req.header('accept-language'),
			software: req.header('user-agent'),
		});
	} else {
		res.json({
            ipaddress: 'There is no ipaddress that we can receive from headers',
			language: req.header('accept-language'),
			software: req.header('user-agent'),
		});
	}
});

// Port and listen
const port = 3000;
app.listen(port, () => console.log('Listening to port: ' + port));
