const requireDirectory = require('require-directory')
const Router = require('koa-router')


class InitManage{
    static initCore(app){
        InitManage.app = app
        this.whenLoadRouter()
    }


    static whenLoadRouter(){
        const apiDirectory = `${process.cwd()}/app/api`
        const modules = requireDirectory(module, apiDirectory, {
            visit: (obj) => {
                if(obj instanceof Router){
                    InitManage.app.use(obj.routes())
                }
            }
        })
    }
}

module.exports = InitManage
