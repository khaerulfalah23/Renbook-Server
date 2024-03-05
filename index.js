const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 6000;
const connectToMongoDB = require('./api/db/connectToMongoDB');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello RenBook Server!');
});

app.listen(port, () => {
  connectToMongoDB();
  console.log(`Server listening on port ${port}`);
});
