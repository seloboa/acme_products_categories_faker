const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.port || 3000;

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
