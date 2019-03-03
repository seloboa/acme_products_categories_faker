const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.port || 3000;
const morgan = require('morgan');

//db
const {db, Category, Product} = require('./models');

// Logging middleware
app.use(morgan('dev'));
// Body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//express public folderr with bundle file so index.html can load it
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/categories', async (req, res, next) => {
  await db.sync();
  Category.findAll({
    order:[['id','ASC']]
  })
    .then(category => res.json(category))
    .catch(next);
});

app.post('/api/categories', async (req, res, next) => {
  await db.sync();
  await Category.create(req.body);
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
