import {request} from './request'

export function getItemDetail( iid ){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

export function getRecommend(){
    return request({
        url:'/recommend'
    })
}
export class GoodsInfo{
    constructor(itemInfo , columns , services){
        this.title = itemInfo.title;
        this.price = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.columns = columns;
        this.services = services;
        this.discountDesc = itemInfo.discountDesc;
        this.desc = itemInfo.desc;
        this.lowNowPrice = itemInfo.lowNowPrice;
    }   
}

export class ShopInfo{
    constructor(shopInfo){
        this.shopLogo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.shopUrl = shopInfo.shopUrl;
        this.score = shopInfo.score;
        this.cGoods = shopInfo.cGoods;
        this.cSells = shopInfo.cSells;
    }
}

export class GoodsParams{
    constructor(info , rule){
        this.image = info.images ? info.images[0] : '';
        this.infos = info.set;
        this.size = rule.tables;
    }
}

