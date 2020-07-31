const path = require('path'); //引入path模块
function resolve(dir) {
    return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}

module.exports = {
    publicPath: '/homeList', //公共路径
    outputDir: 'homeList',
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('./src'))
            .set('components', resolve('./src/components'))
            .set('views', resolve('./src/views'))
            .set('utils', resolve('./src/utils'))
            .set('api', resolve('./src/api'))
        //set第一个参数：设置的别名，第二个参数：设置的路径

    },
    devServer: {
        port: 12333, // 启动端口
        open: true, // 启动后是否自动打开网页
        // proxy: {
        //     '*': {
        //         target: 'http://localhost:12333',
        //         changeOrigin: true, //跨域
        //         secure: false,
        //     }
        // }
    }
}