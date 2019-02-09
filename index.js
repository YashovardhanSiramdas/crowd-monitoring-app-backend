const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 8000;
const AWS = require('aws-sdk');
// const config = require('./config/AWS_Keys.js')
AWS.config.loadFromPath('./config/AWS_Keys.json');
app.use(bodyParser.json());

require('./routes/TimeSliced')(app, AWS);

app.listen(port, function() {
	console.log(`Server on ${port}`);
});