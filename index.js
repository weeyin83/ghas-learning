const express = require('express');
const app = express();
const port = 3000;

// Vulnerable to reflected XSS
app.get('/', function (req, res) {
  const name = req.query.name;
  res.send(`Hello ${name}`); // unsanitized user input
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
