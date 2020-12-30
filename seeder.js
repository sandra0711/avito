// Подключаем mongoose.
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/avito', { useNewUrlParser: true, useUnifiedTopology: true });

const User = require('./models/user');
const Group= require('./models/group')

const groups = [
  {
    name: 'Одежда',
  },
  {
    name: 'Бытовая техника',
  },
  {
  name: 'Мебель',
  },
  {
  name: 'Игрушки',
  },
  {
  name: '"Электроника',
  }];

Group.insertMany(groups).then(() => {
  mongoose.connection.close();
});
// const users = [
//   {
//     firstName: 'Татьяна',
//     lastName: 'Михайлова',
//     email: 'mmm@bk.ru',
  
//   },
//   {
//     firstName: 'Елена',
//     lastName: 'Горбунова',
//     email: 'ggg@bk.ru',
  
//   }];

// User.insertMany(users).then(() => {
//   mongoose.connection.close();
// });
