const Koa = require('koa')
const static = require('koa-static')
const path = require('path')
const InitManage = require('./core/init')
const parser = require('koa-bodyparser')
const catchError = require('./middlewares/exception')
require('./app/model/classic')
const app = new Koa()

app.use(catchError)
app.use(parser())

app.use(static(path.join(__dirname,'./static')))
InitManage.initCore(app)


app.listen(3000)
