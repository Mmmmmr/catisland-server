const Koa = require('koa')
const InitManage = require('./core/init')
const parser = require('koa-bodyparser')
const catchError = require('./middlewares/exception')
require('./app/model/user')

const app = new Koa()
app.use(catchError)
app.use(parser())
InitManage.initCore(app)


app.listen(3000)
