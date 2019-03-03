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
    order: [['id', 'ASC']],
  })
    .then(category => res.json(category))
    .catch(next);
});

app.post('/api/categories', (req, res, next) => {
  db.sync().then(() => Category.create(req.body));
});

app.delete('/api/categories/:id', (req, res, next) => {
  db.sync()
    .then(() =>
      Product.destroy({
        where: {categoryId: req.params.id},
      })
    )
    .then(() =>
      Category.destroy({
        where: {id: req.params.id},
      })
    );
});

app.get('/api/products', (req, res, next) => {
  db.sync()
    .then(() =>
      Product.findAll(
        {include: [{model: Category}]},
        {
          order: [['id', 'ASC']],
        }
      )
    )
    .then(product => res.json(product))
    .catch(next);
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
