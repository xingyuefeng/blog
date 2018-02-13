var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/blog", function(err) {
    if(err){
        console.log('连接失败');
    }else{
        console.log('连接成功');
    }
});


const models = {
  user: {
    'zh': {type: String, require: true},
    'pass': {type: String, require: true}
  },
  article: {
    'title': {type: String, require: true},
    'content': {type: String, require: true},
    'create_time': {type: Number, default: new Date().getTime()},
    'type': {type: Number, require: true}
  }
}

for(let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  getModel: function(name) {
    return mongoose.model(name)
  }
}