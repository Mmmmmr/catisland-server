const Router = require('koa-router')
const router = new Router({
    prefix: '/v1/classic'
})
const {Auth} = require('../../../middlewares/auth')

const {PositiveIntegerValidator} = require('../../validators/validator')

router.get('/latest', new Auth().m,(ctx, next) => {
    // const param = ctx.params
    // const query = ctx.request.query
    // const body = ctx.request.body
    // const header = ctx.request.headers

    // const v = new PositiveIntegerValidator().validate(ctx)
    // ctx.body = {
    //     key: 'latest'
    // }
    ctx.body = ctx.auth.uid
})

module.exports = router

