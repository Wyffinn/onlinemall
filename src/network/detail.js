import {request} from "./request";

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid,
    }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title,
    this.newPrice = itemInfo.price,
    this.oldPrice = itemInfo.oldPrice,
    this.realPrice = itemInfo.lowNowPrice,
    this.discountDesc = itemInfo.discountDesc,
    this.desc = itemInfo.desc
    this.columns = columns,
    this.services = services
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.goods = shopInfo.cGoods,
    this.sells = shopInfo.cSells,
    this.fans = shopInfo.cFans,
    this.name = shopInfo.name,
    this.logo = shopInfo.shopLogo,
    this.score = shopInfo.score
  }
}

export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
