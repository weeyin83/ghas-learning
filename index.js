// Trigger CodeQL scan - minor update


const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
  res.send('Hello from Scotland!!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
