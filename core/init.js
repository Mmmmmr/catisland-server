const requireDirectory = require('require-directory')
const Router = require('koa-router')


class InitManage{
    static initCore(app){
        InitManage.app = app
        InitManage.whenLoadRouter()
        InitManage.loadException()
        InitManage.loadConfig()
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

    static loadConfig(path = ''){
        const configPath = path || process.cwd() + '/config/config.js'
        const config = require(configPath)
        global.config = config
    }

    static loadException(){
        const errors = require('./http-exception')
        global.errs = errors
    }
}

module.exports = InitManage
