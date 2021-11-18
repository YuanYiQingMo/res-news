module.exports = {
    publicPath: '/',
    devServer: {
        proxy: {
            '/api':{
                target:'http://172.18.91.116:8080/',
                wx:true,
                changeOrigin:true,
                pathRewrite: {   //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
                    '^/api': ''
                }
            },
            // '/rec-pred':{
            //     target:'http://172.31.128.206:8080',
            //     ws:true,
            //     changeOrigin:true
            // }
        }
    }
}
