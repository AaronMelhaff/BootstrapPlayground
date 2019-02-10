'use strict';

const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.use("/styles", express.static(__dirname + '/public/styles'));

app.get('/', function (req, res) {
  console.log('Running Bootstrap playground...');
  res.sendFile(path.join(__dirname+'/public/index.html'));
})

app.listen(port, () => console.log(`App listening on port ${port}!`));