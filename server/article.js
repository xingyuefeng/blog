const express = require('express');
const model = require('./model')
const article = model.getModel('article')
const fs = require('fs')
const multer  = require('multer')

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

// 图片上传

// 使用硬盘存储模式设置存放接收到的文件的路径以及文件名
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      // 接收到文件后输出的保存路径（若不存在则需要创建）
      cb(null, 'upload/');    
  },
  filename: function (req, file, cb) {
      // 将保存文件名设置为 时间戳 + 文件原始名，比如 151342376785-123.jpg
      cb(null, Date.now() + "-" + file.originalname);  
  }
});

// 创建文件夹
var createFolder = function(folder){
  try{
      // 测试 path 指定的文件或目录的用户权限,我们用来检测文件是否存在
      // 如果文件路径不存在将会抛出错误"no such file or directory"
      fs.accessSync(folder); 
  }catch(e){
      // 文件夹不存在，以同步的方式创建文件目录。
      fs.mkdirSync(folder);
  }  
};

var uploadFolder = './upload/';
createFolder(uploadFolder);

// 创建 multer 对象
var upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), function(req, res, next) {
  console.log(req.file)
  res.json({data: req.file.path})
})

module.exports = router