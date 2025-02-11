const { User } = require('../models');

const userData = [
    {
        name: "Zarn Walle",
        email: "test@test.com",
        password: "password",
    },
    {
        name: "Freddy Two Shoes",
        email: "balls@woahmama.com",
        password: "password",
    }
];
const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;

// await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });