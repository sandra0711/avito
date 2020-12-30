// const express = require('express');
// const router = express.Router();

// const fs = require('fs').promises;

// const User = require('../models/user');
// const Good = require('../models/good');
// const Group = require('../models/group');
// const path = require('path');

// const multer = require('multer');
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public/images')
//   },
//   filename: function (req, file, cb) {
//     console.log(file);
//     cb(null, file.originalname)
//   }
// })
// const upload = multer({ storage });
// const cpUpload = upload.fields([
//   { name: 'title', maxCount: 1 },
//   { name: 'about', maxCount: 1 },
//   { name: 'price', maxCount: 1 },
//   { name: 'group', maxCount: 1 },
//   { name: 'file', maxCount: 1 },
// ]);

// // регистрация
// router
// .route('/add')
//   .get(async (req, res) => {
//     const groups = await Group.find(); 
//     res.render('goodadd', { groups });
//   })
//   .post(cpUpload, async (req, res) => {
//     console.log('hghghgh', req.body)
//     console.log(req.files)
//     // const buf = Buffer.from(req.body.file);
//     // fs.writeFile(path.resolve(__dirname, '../public/images/test1.jpg'), buf);
//     // const newGood = new Good({
//     //   group: req.body.group, 
//     //   title: req.body.title,
//     //   // about: req.body.about,
//     //   image: req.body.file,
//     //   price: req.body.price,
//     //   seller: req.session.userId,
//       // seller: req.body.seller,
//       // group: req.body.group,
//       res.redirect('/');

//     })
//     // await newGood.save();
//     // console.log(newGood);




// // // вход
// // router.route('/login')
// // .get(async (req, res) => {
// //   res.render('users/login');
// // })
// // .post(async (req, res) => {
// //   const user = await User.findOne({
// //     email: req.body.email.toLowerCase(),
// //     password: sha256(req.body.password),
// //   });
// //   if (user) {
// //     req.session.userId = user._id;
// //     res.redirect('/');
// //   } else {
// //     return res.render('users/login', {
// //       error: 'Неправильный логин или пароль. Попробуйте снова.',
// //     });
// //   }
// // });
// // // сообщения по автору
// // router.get('/:id/entries', async (req, res) => {
// //   const entriesByAuthor = await Entry.find({ author: req.params.id });
// //   console.log(entriesByAuthor);
// //   return res.json(entriesByAuthor);
// // });

// // Выход
// // router.get('/logout', (req, res) => {
// //   req.session.destroy();
// //   res.redirect('/');
// // });




// // Проверка уникальности электронного адреса
// // router.post('/email', async (req, res) => {
// //   console.log('я здесь')
// //   const sameEmail = await User.findOne({ email: req.body.email });
// //   if (sameEmail) {
// //     return res.json({ error: true });
// //   };
// // });

// module.exports = router;
