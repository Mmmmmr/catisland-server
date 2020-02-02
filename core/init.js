const requireDirectory = require('require-directory')
const Router = require('koa-router')


class InitManage{
    static initCore(app){
        InitManage.app = app
        InitManage.whenLoadRouter()
        InitManage.loadException()
    }


    static whenLoadRouter(){
        const apiDirectory = `${process.cwd()}/app/api`
        requireDirectory(module, apiDirectory, {
            visit: (obj) => {
                if(obj instanceof Router){
                    InitManage.app.use(obj.routes())
                }
            }
        });
    }

    static loadException(){
        const errors = require('./http-expetion')
        global.errs = errors
    }
}

module.exports = InitManage
