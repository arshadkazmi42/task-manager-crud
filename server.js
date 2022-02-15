const express = require('express');
const bodyParser = require('body-parser');

const port = 8000;
const app = express();

app.use(bodyParser.json());


// TODO: Setup routes here


app.listen(port, function () {
  console.log('Server is running on ' + port + ' port');
});
