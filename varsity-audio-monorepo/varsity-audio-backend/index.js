const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const Chapter = require('./models/Chapter');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/api/chapters', async (req, res) => {
  const chapters = await Chapter.find();
  res.json(chapters);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});