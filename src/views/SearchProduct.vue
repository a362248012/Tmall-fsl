<template>
    <div>
        <div class="search-top">
            <van-icon name="arrow-left" class="go-back" @click="goback"/>
            <div class="label-box" @click="goback">
                {{this.$route.query.title || ''}}
            </div>
        </div>
        <div class="tabbar-box">
            <van-tabbar v-model="active" :fixed="false" active-color="#DD2727" :border="false">
                <van-tabbar-item>综合</van-tabbar-item>
                <van-tabbar-item>销量</van-tabbar-item>
                <van-tabbar-item>价格<van-icon name="arrow-up" /></van-tabbar-item>
                <van-tabbar-item>价格<van-icon name="arrow-down" /></van-tabbar-item>
            </van-tabbar>
        </div>
        <div class="product-list">
            <div class="product-item" v-for="item in productData" :key="item.id">
                <a :href="item.url">
                    <div class="img-box">
                        <img :alt="item.name" v-lazy="item.imgUrl">
                    </div>
                    <div class="content-box">
                        <div class="title">{{item.name}}</div>
                        <div class="detail">
                            <span class="price">￥{{item.price}}</span>
                            <span class="sale-num">{{item.saleNum}}</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import { Tabbar, TabbarItem, Icon } from 'vant'
    export default {
        name: "SearchProduct",
        components: {
            "van-icon": Icon,
            "van-tabbar": Tabbar,
            "van-tabbar-item": TabbarItem
        },
        data() {
            return {
                active: 0,
                productData: [
                    {
                        name: '父亲节送妈妈生日礼物送爸爸送给母亲老人用品婆婆长辈的高档实用',
                        id: 0,
                        url: 'https://detail.tmall.com/item.htm?id=570171621266&skuId=4517619418125&pic=//img.alicdn.com/bao/uploaded/i2/3066503141/O1CN01YGMd8H1Z4cdsRLbpv_!!3066503141-0-lubanu-s.jpg_560x840Q50s50.jpg_.webp&itemTitle=%E7%88%B6%E4%BA%B2%E8%8A%82%E9%80%81%E5%A6%88%E5%A6%88%E7%94%9F%E6%97%A5%E7%A4%BC%E7%89%A9%E9%80%81%E7%88%B8%E7%88%B8%E9%80%81%E7%BB%99%E6%AF%8D%E4%BA%B2%E8%80%81%E4%BA%BA%E7%94%A8%E5%93%81%E5%A9%86%E5%A9%86%E9%95%BF%E8%BE%88%E7%9A%84%E9%AB%98%E6%A1%A3%E5%AE%9E%E7%94%A8&price=328.00&from=h5',
                        imgUrl: '//img.alicdn.com/bao/uploaded/i2/3066503141/O1CN01YGMd8H1Z4cdsRLbpv_!!3066503141-0-lubanu-s.jpg_560x840Q50s50.jpg_.webp',
                        price: '328.00',
                        saleNum: '月销1.2万笔'
                    },
                    {
                        name: '父亲节送妈妈生日礼物送爸爸送给母亲老人用品婆婆长辈的高档实用',
                        id: 1,
                        url: 'https://detail.tmall.com/item.htm?id=570171621266&skuId=4517619418125&pic=//img.alicdn.com/bao/uploaded/i2/3066503141/O1CN01YGMd8H1Z4cdsRLbpv_!!3066503141-0-lubanu-s.jpg_560x840Q50s50.jpg_.webp&itemTitle=%E7%88%B6%E4%BA%B2%E8%8A%82%E9%80%81%E5%A6%88%E5%A6%88%E7%94%9F%E6%97%A5%E7%A4%BC%E7%89%A9%E9%80%81%E7%88%B8%E7%88%B8%E9%80%81%E7%BB%99%E6%AF%8D%E4%BA%B2%E8%80%81%E4%BA%BA%E7%94%A8%E5%93%81%E5%A9%86%E5%A9%86%E9%95%BF%E8%BE%88%E7%9A%84%E9%AB%98%E6%A1%A3%E5%AE%9E%E7%94%A8&price=328.00&from=h5',
                        imgUrl: '//img.alicdn.com/bao/uploaded/i2/3066503141/O1CN01YGMd8H1Z4cdsRLbpv_!!3066503141-0-lubanu-s.jpg_560x840Q50s50.jpg_.webp',
                        price: '328.00',
                        saleNum: '月销1.2万笔'
                    },
                    {
                        name: '父亲节送妈妈生日礼物送爸爸送给母亲老人用品婆婆长辈的高档实用',
                        id: 2,
                        url: 'https://detail.tmall.com/item.htm?id=570171621266&skuId=4517619418125&pic=//img.alicdn.com/bao/uploaded/i2/3066503141/O1CN01YGMd8H1Z4cdsRLbpv_!!3066503141-0-lubanu-s.jpg_560x840Q50s50.jpg_.webp&itemTitle=%E7%88%B6%E4%BA%B2%E8%8A%82%E9%80%81%E5%A6%88%E5%A6%88%E7%94%9F%E6%97%A5%E7%A4%BC%E7%89%A9%E9%80%81%E7%88%B8%E7%88%B8%E9%80%81%E7%BB%99%E6%AF%8D%E4%BA%B2%E8%80%81%E4%BA%BA%E7%94%A8%E5%93%81%E5%A9%86%E5%A9%86%E9%95%BF%E8%BE%88%E7%9A%84%E9%AB%98%E6%A1%A3%E5%AE%9E%E7%94%A8&price=328.00&from=h5',
                        imgUrl: '//img.alicdn.com/bao/uploaded/i2/3066503141/O1CN01YGMd8H1Z4cdsRLbpv_!!3066503141-0-lubanu-s.jpg_560x840Q50s50.jpg_.webp',
                        price: '328.00',
                        saleNum: '月销1.2万笔'
                    },
                    {
                        name: '父亲节送妈妈生日礼物送爸爸送给母亲老人用品婆婆长辈的高档实用',
                        id: 3,
                        url: 'https://detail.tmall.com/item.htm?id=570171621266&skuId=4517619418125&pic=//img.alicdn.com/bao/uploaded/i2/3066503141/O1CN01YGMd8H1Z4cdsRLbpv_!!3066503141-0-lubanu-s.jpg_560x840Q50s50.jpg_.webp&itemTitle=%E7%88%B6%E4%BA%B2%E8%8A%82%E9%80%81%E5%A6%88%E5%A6%88%E7%94%9F%E6%97%A5%E7%A4%BC%E7%89%A9%E9%80%81%E7%88%B8%E7%88%B8%E9%80%81%E7%BB%99%E6%AF%8D%E4%BA%B2%E8%80%81%E4%BA%BA%E7%94%A8%E5%93%81%E5%A9%86%E5%A9%86%E9%95%BF%E8%BE%88%E7%9A%84%E9%AB%98%E6%A1%A3%E5%AE%9E%E7%94%A8&price=328.00&from=h5',
                        imgUrl: '//img.alicdn.com/bao/uploaded/i2/3066503141/O1CN01YGMd8H1Z4cdsRLbpv_!!3066503141-0-lubanu-s.jpg_560x840Q50s50.jpg_.webp',
                        price: '328.00',
                        saleNum: '月销1.2万笔'
                    },
                    {
                        name: '父亲节送妈妈生日礼物送爸爸送给母亲老人用品婆婆长辈的高档实用',
                        id: 4,
                        url: 'https://detail.tmall.com/item.htm?id=570171621266&skuId=4517619418125&pic=//img.alicdn.com/bao/uploaded/i2/3066503141/O1CN01YGMd8H1Z4cdsRLbpv_!!3066503141-0-lubanu-s.jpg_560x840Q50s50.jpg_.webp&itemTitle=%E7%88%B6%E4%BA%B2%E8%8A%82%E9%80%81%E5%A6%88%E5%A6%88%E7%94%9F%E6%97%A5%E7%A4%BC%E7%89%A9%E9%80%81%E7%88%B8%E7%88%B8%E9%80%81%E7%BB%99%E6%AF%8D%E4%BA%B2%E8%80%81%E4%BA%BA%E7%94%A8%E5%93%81%E5%A9%86%E5%A9%86%E9%95%BF%E8%BE%88%E7%9A%84%E9%AB%98%E6%A1%A3%E5%AE%9E%E7%94%A8&price=328.00&from=h5',
                        imgUrl: '//img.alicdn.com/bao/uploaded/i2/3066503141/O1CN01YGMd8H1Z4cdsRLbpv_!!3066503141-0-lubanu-s.jpg_560x840Q50s50.jpg_.webp',
                        price: '328.00',
                        saleNum: '月销1.2万笔'
                    },
                    {
                        name: '父亲节送妈妈生日礼物送爸爸送给母亲老人用品婆婆长辈的高档实用',
                        id: 5,
                        url: 'https://detail.tmall.com/item.htm?id=570171621266&skuId=4517619418125&pic=//img.alicdn.com/bao/uploaded/i2/3066503141/O1CN01YGMd8H1Z4cdsRLbpv_!!3066503141-0-lubanu-s.jpg_560x840Q50s50.jpg_.webp&itemTitle=%E7%88%B6%E4%BA%B2%E8%8A%82%E9%80%81%E5%A6%88%E5%A6%88%E7%94%9F%E6%97%A5%E7%A4%BC%E7%89%A9%E9%80%81%E7%88%B8%E7%88%B8%E9%80%81%E7%BB%99%E6%AF%8D%E4%BA%B2%E8%80%81%E4%BA%BA%E7%94%A8%E5%93%81%E5%A9%86%E5%A9%86%E9%95%BF%E8%BE%88%E7%9A%84%E9%AB%98%E6%A1%A3%E5%AE%9E%E7%94%A8&price=328.00&from=h5',
                        imgUrl: '//img.alicdn.com/bao/uploaded/i2/3066503141/O1CN01YGMd8H1Z4cdsRLbpv_!!3066503141-0-lubanu-s.jpg_560x840Q50s50.jpg_.webp',
                        price: '328.00',
                        saleNum: '月销1.2万笔'
                    },
                    {
                        name: '父亲节送妈妈生日礼物送爸爸送给母亲老人用品婆婆长辈的高档实用',
                        id: 6,
                        url: 'https://detail.tmall.com/item.htm?id=570171621266&skuId=4517619418125&pic=//img.alicdn.com/bao/uploaded/i2/3066503141/O1CN01YGMd8H1Z4cdsRLbpv_!!3066503141-0-lubanu-s.jpg_560x840Q50s50.jpg_.webp&itemTitle=%E7%88%B6%E4%BA%B2%E8%8A%82%E9%80%81%E5%A6%88%E5%A6%88%E7%94%9F%E6%97%A5%E7%A4%BC%E7%89%A9%E9%80%81%E7%88%B8%E7%88%B8%E9%80%81%E7%BB%99%E6%AF%8D%E4%BA%B2%E8%80%81%E4%BA%BA%E7%94%A8%E5%93%81%E5%A9%86%E5%A9%86%E9%95%BF%E8%BE%88%E7%9A%84%E9%AB%98%E6%A1%A3%E5%AE%9E%E7%94%A8&price=328.00&from=h5',
                        imgUrl: '//img.alicdn.com/bao/uploaded/i2/3066503141/O1CN01YGMd8H1Z4cdsRLbpv_!!3066503141-0-lubanu-s.jpg_560x840Q50s50.jpg_.webp',
                        price: '328.00',
                        saleNum: '月销1.2万笔'
                    },
                    {
                        name: '父亲节送妈妈生日礼物送爸爸送给母亲老人用品婆婆长辈的高档实用',
                        id: 7,
                        url: 'https://detail.tmall.com/item.htm?id=570171621266&skuId=4517619418125&pic=//img.alicdn.com/bao/uploaded/i2/3066503141/O1CN01YGMd8H1Z4cdsRLbpv_!!3066503141-0-lubanu-s.jpg_560x840Q50s50.jpg_.webp&itemTitle=%E7%88%B6%E4%BA%B2%E8%8A%82%E9%80%81%E5%A6%88%E5%A6%88%E7%94%9F%E6%97%A5%E7%A4%BC%E7%89%A9%E9%80%81%E7%88%B8%E7%88%B8%E9%80%81%E7%BB%99%E6%AF%8D%E4%BA%B2%E8%80%81%E4%BA%BA%E7%94%A8%E5%93%81%E5%A9%86%E5%A9%86%E9%95%BF%E8%BE%88%E7%9A%84%E9%AB%98%E6%A1%A3%E5%AE%9E%E7%94%A8&price=328.00&from=h5',
                        imgUrl: '//img.alicdn.com/bao/uploaded/i2/3066503141/O1CN01YGMd8H1Z4cdsRLbpv_!!3066503141-0-lubanu-s.jpg_560x840Q50s50.jpg_.webp',
                        price: '328.00',
                        saleNum: '月销1.2万笔'
                    }
                ]
            }
        },
        methods: {
            goback(){
                history.back()
            }
        }
    }
</script>

<style scoped lang="less">
    .search-top {
         padding: 8px 54px 8px 50px;
         height: 48px;
         position: relative;
         border-bottom: 1px solid #eeeeee;
         .label-box {
             height: 100%;
             background-color: #eee;
             font-size: 14px;
             line-height: 32px;
             padding-left: 10px;
         }
         .go-back {
             font-size: 20px;
             position: absolute;
             left: 10px;
             line-height: 32px;
         }
     }
    .tabbar-box {
        border-bottom: 1px solid #eeeeee;
        .van-tabbar-item {
            font-size: 15px;
        }
        .van-icon {
            vertical-align: -2px;
        }
    }
    .product-list {
        display: flex;
        flex-wrap: wrap;
        .product-item {
            width: 50%;
            a {
                color: #000000;
                text-decoration: none;
                .img-box {
                    width: 186px;
                    height: 186px;
                    img {
                        max-width: 100%;
                        max-height: 100%;
                    }
                }
                .content-box {
                    padding: 9px;
                    .title {
                        text-align: center;
                        font-size: 12px;
                        line-height: 18px;
                        color: #333333;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .detail {
                        width: 100%;
                        .price {
                            font-size: 14px;
                            font-weight: 700;
                            color: #DD2727;
                            margin-top: 4px;
                            line-height: 14px;
                            margin-right: 10px;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;
                        }
                        .sale-num {
                            font-size: 12px;
                            color: #999;
                            height: 14px;
                            line-height: 14px;
                            margin-left: 9px;
                            font-weight: 400;
                        }
                    }
                }
            }
        }
    }
</style>