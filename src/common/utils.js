//用来放自定义工具函数

//防抖函数：
/*
    debounce
    只有在某个时间内，没有再次触发某个函数时，才真正的调用这个函数
    
    为了防止用户高频率的输入使对服务器无用请求过于频繁
    限制高频率请求的一种函数

    例：输入框仍在被输入时下拉框不显示联想数据
*/
export function debounce(fun , delay = 300){
    let timer = null
    
    return function(...args){
        timer && clearTimeout(timer)
        //setTimeout等异步操作，即使不传第二个时间参数，也会被放在后面执行
        timer = setTimeout(()=>{
            fun.apply(this , args);
        }, delay)
    }

}
/*
    节流函数：使函数在一定时间内只执行一定次数

    例：游戏角色攻击频率
*/


export function formatDate(date) {

      var date = new Date(date);
    
      var YY = date.getFullYear() + '-';
    
      var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    
      var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
    
    
      return YY + MM + DD;
    
}
