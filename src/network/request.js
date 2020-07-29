import axios from 'axios'

export function request(config){
    //1.创建axios实例
    const instance = axios.create({
        baseURL:'BASE_URL',
        //需要接口的可以添加coderwhy老师的vx coderwhy003 进行购买
        timeout:5000
    })
    //2.axios的拦截器

    instance.interceptors.request.use(config => {
        return config
    } , err => {
        console.log(err)
    });

    instance.interceptors.response.use(res => {
        return res.data
    },err => {
        console.log(err)
    });

    return instance(config)
}
