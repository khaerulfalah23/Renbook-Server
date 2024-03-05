const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 6000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello RenBook Server!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
