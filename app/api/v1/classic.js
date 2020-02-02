const Router = require('koa-router')


const router = new Router()

router.post('/v1/classic/latest', (ctx, next) => {
    const param = ctx.params
    const query = ctx.request.query
    const body = ctx.request.body
    const header = ctx.request.headers

    const httpException = new global.errs.ParameterException()
    throw httpException
    ctx.body = {
        key: 'latest'
    }
})

module.exports = router

