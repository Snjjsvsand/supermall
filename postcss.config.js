module.exports = {
    plugins:{
        autoprefixer:{},
        "postcss-px-to-viewport":{
            viewportWidth:375,
            viewportHeight:667,
            //精度
            unitPrecision:5,
            viewportUnit:'vw',
            //忽略（不转换为vw）的类
            selectorBlackList:['ignore'],
            //最小转换单位（小于1px就不转换了）
            minPixelValue:1,
            mediaQuery:false,
            //忽略（不转换为vw）的文件
            // exclude:[/TabBar/]
        }
    }
}