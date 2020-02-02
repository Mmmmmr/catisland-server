const {HttpException} = require("../core/http-expetion");

const catchError = async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        if(error instanceof HttpException){
            ctx.body = {
                msg: error.msg,
                errorCode: error.errorCode,
                path: `${ctx.method} ${ctx.path}`
            }
            ctx.status = error.code
        }
    }
}

module.exports = catchError
