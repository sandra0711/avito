const express = require('express');
const router = express.Router();

const fs = require('fs').promises;

const User = require('../models/user');
const Good = require('../models/good');
const Group = require('../models/group');
const path = require('path');

// мультивер для того, чтобы принять и сохранить в нужном формате изображение
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage });
const cpUpload = upload.single('file');

// добавление товара
router
  .route('/add')
  .get(async (req, res) => {
    const groups = await Group.find();
    let user = '';
    user = await User.findById(req.session.userId);
    let firstName = '';
    if (user) {firstName = user.firstName};
    res.render('goodadd', { groups, firstName });
  })
  .post(cpUpload, async (req, res) => {
    console.log('hghghgh', req.body)
    console.log(req.file)
    const newGood = new Good({
      group: req.body.group,
      title: req.body.title,
      about: req.body.about,
      image: '/images/' + req.file.filename,
      price: req.body.price,
      seller: req.session.userId,
    });
    await newGood.save();
    res.redirect('/');
  });
router.get('/group/:id', async (req, res) => {
  const groups = await Group.find();
  const goods = await Good.find({ group: req.params.id });
  const user = await User.findById(req.session.userId);
  const firstName = user.firstName;
  res.render('index', {firstName, goods, groups})
})

router.get('/:id', async (req, res) => {
  const good = await Good.findById(req.params.id).populate('group');
  const user = await User.findById(req.session.userId);
  const firstName = user.firstName;
  res.render('goodprofile', { good, firstName})
})

module.exports = router;
