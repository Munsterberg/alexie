import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('hi');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);