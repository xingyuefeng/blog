const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const user = require('./user')
const article = require('./article')

app.use(cors({
  origin: ['http://localhost:8080'],
  methods: ['GET','POST']
}))

app.get('/first', function (req, res) {
  res.json({name: 123})
})

//解析cookie
app.use(cookieParser())
// 解析post 传过来的参数

app.use(bodyParser.json())

app.use('/user', user)

app.use('/article', article)

app.listen(3000, function () {
  console.log('listening on port 3000!')
})