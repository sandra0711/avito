const express = require('express');
const router = express.Router();

const User = require('../models/user');
const Good = require('../models/good');
const Group= require('../models/group');

/* GET home page. */
router.get('/', async (req, res, next) => {
  let user = '';
  user = await User.findById(req.session.userId);
  let firstName = '';
  if (user) { firstName = user.firstName };
  goods = await Good.find();
  const groups = await Group.find();
  res.render('index', { firstName, goods, groups });
});

module.exports = router;
