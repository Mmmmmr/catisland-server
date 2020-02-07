const Router = require('koa-router')
const router = new Router()

const {PositiveIntegerValidator} = require('../../validators/validator')

router.post('/v1/:id/classic/latest', (ctx, next) => {
    const param = ctx.params
    const query = ctx.request.query
    const body = ctx.request.body
    const header = ctx.request.headers

    const v = new PositiveIntegerValidator().validate(ctx)
    ctx.body = {
        key: 'latest'
    }
})

module.exports = router

