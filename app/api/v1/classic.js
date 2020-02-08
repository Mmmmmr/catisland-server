const Router = require('koa-router')
const router = new Router({
    prefix: '/v1/classic'
})
const {Auth} = require('../../../middlewares/auth')
const {Flow} = require('../../model/flow')

const {Art} = require('../../model/art')

const {PositiveIntegerValidator} = require('../../validators/validator')

router.get('/latest', new Auth().m,async (ctx, next) => {
    // const param = ctx.params
    // const query = ctx.request.query
    // const body = ctx.request.body
    // const header = ctx.request.headers
    const flow = await Flow.findOne({
        order: [
            [
                'index', 'DESC'
            ]
        ]
    })
    const art = await Art.getData(flow.art_id, flow.type)
    art.setDataValue('index', flow.index)
    ctx.body = art
})

module.exports = router

