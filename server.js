const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.port || 3000;
const morgan = require('morgan');

// Logging middleware
app.use(morgan('dev'));
// Body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', (req, res, next) => {
  console.log(path.join(__dirname),'public');
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
