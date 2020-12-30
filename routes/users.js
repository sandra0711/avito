const express = require('express');
const router = express.Router();
const sha256 = require('sha256');

const User = require('../models/user');

// регистрация
router
.route('/register')
.get(async (req, res) => {
  res.render('register');
})
.post(async (req, res) => {
  const newUser = new User({
    email: req.body.email.toLowerCase(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: sha256(req.body.password1),
  });
  await newUser.save();
  req.session.userId = newUser._id;
  res.redirect('/');
});

// // вход
// router.route('/login')
// .get(async (req, res) => {
//   res.render('users/login');
// })
// .post(async (req, res) => {
//   const user = await User.findOne({
//     email: req.body.email.toLowerCase(),
//     password: sha256(req.body.password),
//   });
//   if (user) {
//     req.session.userId = user._id;
//     res.redirect('/');
//   } else {
//     return res.render('users/login', {
//       error: 'Неправильный логин или пароль. Попробуйте снова.',
//     });
//   }
// });
// // сообщения по автору
// router.get('/:id/entries', async (req, res) => {
//   const entriesByAuthor = await Entry.find({ author: req.params.id });
//   console.log(entriesByAuthor);
//   return res.json(entriesByAuthor);
// });

// Выход
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});




// Проверка уникальности электронного адреса
router.post('/email', async (req, res) => {
  const sameEmail = await User.findOne({ email: req.body.email });
  if (sameEmail) {
    return res.json({ error: true });
  };
});

module.exports = router;
