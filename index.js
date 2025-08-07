const express = require('express');
const escape = require('escape-html');
const app = express();
const port = 3000;

// Vulnerable to reflected XSS
app.get('/', function (req, res) {
  const name = req.query.name;
  res.send(`Hello ${escape(name)}`); // sanitized user input
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/ Fake AWS secret access key for testing GitHub secret scanning
const awsSecretKey = "AKIA1234567890EXAMPLEFAKEKEY";
