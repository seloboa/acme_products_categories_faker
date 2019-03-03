const {db, Category, Product} = require('./models');

db.sync({force: true}).then(async () => {
  const [fooCat, barCat, bazzCat] = await Promise.all([
    Category.create({name: 'foo cat'}),
    Category.create({name: 'bar cat'}),
    Category.create({name: 'bazz cat'}),
  ]);
  const [fooPro, barPro, bazzPro] = await Promise.all([
    Product.create({name: 'foo pro', categoryId: fooCat.id}),
    Product.create({name: 'bar pro', categoryId: barCat.id}),
    Product.create({name: 'bazz pro', categoryId: bazzCat.id}),
  ]);
  console.log('db seeded');
});
