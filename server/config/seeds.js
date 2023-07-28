const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Comics' },
    { name: 'Collectibles' },
    { name: 'Statues' },
    { name: 'Toys' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Cheeseburger',
      description:
        'Buttery, Flaky , Butter , Crust.',
      image: 'hamburger.png',
      category: categories[0]._id,
      price: 2.99,
      quantity: 50
    },
    {
      name: 'Kope Luak',
      description:
        'Extra Brown Coffee.',
      image: 'coffee.png',
      category: categories[0]._id,
      price: 41.99,
      quantity: 50
    },
    {
      name: 'Funko Pop',
      category: categories[3]._id,
      description:
        'Superman',
      image: 'funko.png',
      price: 17.99,
      quantity: 20
    },
    {
      name: 'Comic Books',
      category: categories[1]._id,
      description:
       ' Classic  Comics',
      image: 'comic.png',
      price: 93.99,
      quantity: 50
    },
    {
      name: 'Store Sticker',
      category: categories[1]._id,
      description:
        'Support your Store!',
      image: 'BlackBoltProfilePNG.webp',
      price: 1.99,
      quantity: 100
    },
    {
      name: 'Godzilla Sticker',
      category: categories[1]._id,
      description:
        "Dave's Comic's Logo",
      image: 'godzilla.png',
      price: 1.99,
      quantity: 300
    },
    {
      name: 'Harper',
      category: categories[2]._id,
      description:
        'Newton County Animal Rescue',
      image: 'harper.png',
      price: 199.99,
      quantity: 308
    },
    {
      name: 'Bowling',
      category: categories[3]._id,
      description:
        'bowling items',
      image: 'bowling.png',
      price: 19.99,
      quantity: 100
    },
    {
      name: 'Action Figures',
      category: categories[3]._id,
      description: 'Robocop Action Figure',
      image: 'robocop.png',
      price: 19.99,
      quantity: 1000
    },
    {
      name: 'Cards',
      category: categories[2]._id,
      description:
        'Pokemon Cards',
      image: 'pokemon.png',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Toys',
      category: categories[4]._id,
      description:
        'Anime Collectibles',
      image: 'naruto.png',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Jeep',
      category: categories[3]._id,
      description:
        'Jeep',
      image: 'jeep.png',
      price: 59000,
      quantity: 60
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Aubree',
    lastName: 'Gossett',
    email: 'Aubree@testmail.com',
    password: 'password123456',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Joe',
    lastName: 'Gossett',
    email: 'GGoose@testmail.com',
    password: 'password123456'
  });

  console.log('users seeded');

  process.exit();
});
