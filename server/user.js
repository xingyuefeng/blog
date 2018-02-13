const express = require('express');
const model = require('./model')
const user = model.getModel('user')
const utils = require('utility')

var router = express.Router();

router.post('/login', function(req, res) {
  const {zh,pass} = req.body
  user.findOne({zh: zh, pass: utils.md5(pass)}, {'pass': 0}, function(err, docs) {
    if(docs) {
      res.cookie('userid',docs._id)
      return res.json({code: 0,data: docs})
    } else {
      return res.json({code: 1,msg: '登陆出错'})
    }
  })
})

module.exports = router