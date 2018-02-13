const express = require('express');
const model = require('./model')
const article = model.getModel('article')

var router = express.Router();

router.post('/push', function(req, res) {
  const {title, content, type} = req.body
  article.create({title, content, type}, function(err, docs) {
    if(err) {
      return res.json({code: 1, msg: 'error'})
    }
    if(docs) {
      return res.json({code: 0, msg: 'success'})
    }
  })
})

router.post('/list', function(req, res) {
  const {type} = req.body
  article.find({type}, function(err, docs) {
    if(err) {
      return res.json({code: 1, msg: 'error'})
    }
    if(docs) {
      return res.json({code: 0, list: docs})
    }
  })
})

router.post('/detail', function(req, res) {
  const {id} = req.body
  article.findOne({_id: id}, function(err, docs) {
    if(err) {
      return res.json({code: 1, msg: 'error'})
    }
    if(docs) {
      console.log(docs)
      return res.json({code: 0, data: docs})
    }
  })
})

router.post('/all', function(req, res) {
  article.find({}, function(err, docs) {
    if(err) {
      return res.json({code: 1, msg: 'error'})
    }
    if(docs) {
      return res.json({code: 0, list: docs})
    }
  })
})

router.post('/update', function(req, res) {
  const {id, title, content, type, create_time} = req.body
  article.update({_id: id},{title, content, create_time, type}, function(err, docs) {
    if(err) {
      return res.json({code: 1, msg: 'error'})
    }
    if(docs) {
      return res.json({code: 0, msg: '更新成功'})
    }
  })
})

router.post('/delete', function(req, res) {
  const {id} = req.body
  article.remove({_id: id}, function(err, docs) {
    if(err) {
      return res.json({code: 1, msg: 'error'})
    }
    if(docs) {
      return res.json({code: 0, msg: '删除成功'})
    }
  })
})

module.exports = router