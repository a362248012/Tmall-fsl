<template>
  <div class="home-shell">
    <div class="home-top">
      <div class="home-top-top-shell">
        <router-link to="/classify" class="top-classify"></router-link>
        <div class="top-logo"></div>
<!--        <div class="top-login-in" @click="tab(1)"></div>-->
      </div>
      <router-link to="/search" class="top-search">
        <input type="text" placeholder="搜索商品，品牌" />
        <!-- todo:补充动画和input内容 -->
        <div class="top-search-img"></div>
      </router-link>
    </div>
    <div class="home-second-top">
      <ul class="home-top-list">
        <li>
          <a href="https://suning.tmall.com/?pos=1&acm=201704071.1003.64.1699747&scm=1003.64.201704071.OTHER_1547149173937_1699747&spm=a211ue.11501597.icon.1">
            <div class="home-top-list-img">
              <img src="/home/classify/1.jpg" style="align: center;" />
            </div>
            <p>苏宁易购</p>
          </a>
        </li>
        <li>
          <a href="https://chaoshi.m.tmall.com/?pos=2&acm=201704071.1003.64.1699747&_ig=shoumao&scm=1003.64.201704071.OTHER_1545931209467_1699747&spm=a211ue.11501597.icon.2">
            <div class="home-top-list-img">
              <img src="/home/classify/2.png" />
            </div>
            <p>天猫超市</p>
          </a>
        </li>
        <li>
          <a href="https://pages.tmall.com/wow/jinkou/act/zhiying?wh_from=icon&pos=3&acm=201704071.1003.64.1699747&scm=1003.64.201704071.OTHER_1547673722287_1699747&spm=a211ue.11501597.icon.3">
            <div class="home-top-list-img">
              <img src="/home/classify/3.jpg" />
            </div>
            <p>天猫国际</p>
          </a>
        </li>
        <li>
          <a href="https://tb.cn/x/ju?pos=4&acm=201704071.1003.64.1699747&scm=1003.64.201704071.OTHER_1547844648097_1699747&spm=a211ue.11501597.icon.4">
            <div class="home-top-list-img">
              <img src="/home/classify/4.jpg" />
            </div>
            <p>聚划算</p>
          </a>
        </li>
        <li>
          <router-link to="/classify">
            <div class="home-top-list-img">
              <img src="/home/classify/5.jpg" />
            </div>
            <p>分类</p>
          </router-link>
        </li>
      </ul>
    </div>

    <!--***************轮播图开始**************-->
    <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white">
      <van-swipe-item>
        <a href="https://pages.tmall.com/wow/mit/act/download?mmstat=tb_homepagejiao&src=tb_homepage&pos=1&acm=201810194.1003.2.7697690&scm=1003.2.201810194.OTHER_1587988720254_7697690&firstModule=7&spm=a211ue.11501597.banner.1">
          <img src="/home/roll/1.jpg"/>
        </a>
      </van-swipe-item>
      <van-swipe-item>
        <a href="https://shop491733054.m.taobao.com?pos=1&acm=&scm=1049.lyg_turing_-1_335.146383.146383-THJH_215488&spm=a211ue.11501597.banner.2">
          <img src="/home/roll/2.jpg"/>
        </a>
      </van-swipe-item>
      <van-swipe-item>
        <a href="https://haier.tmall.com/shop/view_shop.htm?mytmenu=mdianpu&user_number_id=470168984&utkn=g,xkr3n65z3g333rxmxwrll2q1585880124865&pos=1&acm=&scm=1049.lyg_turing_-1_124.145284.145284-THJH_213897&spm=a211ue.11501597.banner.3">
          <img src="/home/roll/3.jpg"/>
        </a>
      </van-swipe-item>
      <van-swipe-item>
        <a href="https://pages.tmall.com/wow/a/act/tmall/dailygroup/1116/wupr?pos=1&wh_pid=daily-191884&acm=2017041213-1.1003.2.7704661&scm=1003.2.2017041213-1.OTHER_1589836459808_7704661&spm=a211ue.11501597.banner.4">
          <img src="/home/roll/4.jpg"/>
        </a>
      </van-swipe-item>
      <van-swipe-item>
        <a href="https://pages.tmall.com/wow/a/act/tmall/dailygroup/1116/wupr?pos=1&wh_pid=daily-191884&acm=2017041213-1.1003.2.7704661&scm=1003.2.2017041213-1.OTHER_1589836459808_7704661&spm=a211ue.11501597.banner.4">
          <img src="/home/roll/5.jpg"/>
        </a>
      </van-swipe-item>
    </van-swipe>
    <!--***************轮播图结束******************-->

    <div class="home-promotion">
      <div class="home-promotion-small home-sale">
        <div class="home-promontion-title">限时抢购</div>
        <div class="home-time">
          <span>{{hou}}</span>:
          <span>{{min}}</span>:
          <span>{{sec}}</span>
        </div>
        <div class="home-promontion-in-shell">
          <div class="home-promontion-in-one">
            <a href="https://jupage.taobao.com/wow/tqg/act/tqgtmallhome?wh_weex=true&wh_biz=tm&wx_navbar_transparent=true&topJuIds=10001021484493,10001007791869&wx_navbar_hidden=true&wx_navbar_transparent=true&disableNav=YES&spm=a211ue.11501597.flash_sale.1">
              <img src="/home/promontion/1.jpg" />
              <span>实属好货</span>
            </a>
          </div>
          <div class="home-promontion-in-two">
            <a href="https://jupage.taobao.com/wow/tqg/act/tqgtmallhome?wh_weex=true&wh_biz=tm&wx_navbar_transparent=true&topJuIds=10001021484493,10001007791869&wx_navbar_hidden=true&wx_navbar_transparent=true&disableNav=YES&spm=a211ue.11501597.flash_sale.1">
              <img src="/home/promontion/2.jpg" />
              <span>限时特价</span>
            </a>
          </div>
        </div>
      </div>
      <div class="home-promotion-small home-goods">
        <div class="home-promontion-title">天猫好物</div>
        <div class="home-promontion-in-shell">
          <div class="home-promontion-in-one">
            <a href="https://jupage.taobao.com/wow/tqg/act/tqgtmallhome?wh_weex=true&wh_biz=tm&wx_navbar_transparent=true&topJuIds=10001021484493,10001007791869&wx_navbar_hidden=true&wx_navbar_transparent=true&disableNav=YES&spm=a211ue.11501597.flash_sale.1">
              <img src="/home/promontion/3.jpg" />
              <span>时髦设计</span>
            </a>
          </div>
          <div class="home-promontion-in-two">
            <a href="https://jupage.taobao.com/wow/tqg/act/tqgtmallhome?wh_weex=true&wh_biz=tm&wx_navbar_transparent=true&topJuIds=10001021484493,10001007791869&wx_navbar_hidden=true&wx_navbar_transparent=true&disableNav=YES&spm=a211ue.11501597.flash_sale.1">
              <img src="/home/promontion/4.jpg" />
              <span>半身裙</span>
            </a>
          </div>
        </div>
      </div>
      <div class="home-promotion-small home-ju">
        <div class="home-promontion-title">聚划算</div>
        <div class="home-promontion-in-shell">
          <div class="home-promontion-in-one">
            <a href="#">
              <img src="/home/promontion/5.jpg" />
              <span>满199元减免</span>
            </a>
          </div>
          <div class="home-promontion-in-two">
            <a href="#">
              <img src="/home/promontion/6.jpg" />
              <span>抢100元券</span>
            </a>
          </div>
        </div>
      </div>
      <div class="home-promotion-small home-sale">
        <div class="home-promontion-title">天猫闪降</div>
        <div class="home-promontion-in-shell">
          <div class="home-promontion-in-one">
            <a href="#">
              <img src="/home/promontion/7.jpg" />
              <span>人气爆款</span>
            </a>
          </div>
          <div class="home-promontion-in-two">
            <a href="#">
              <img src="/home/promontion/8.jpg" />
              <span>降价好货</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="home-bottom-title">猜你喜欢</div>
    <ul class="home-bottom-goods">
      <li v-for="(item, index) in onelist" :key="index">
        <router-link class="home-bottom-goods-link" :to="'/good?name='+item.name+'&thumb='+item.thumb+'&people='+item.people+'&post='+item.post+'&price='+item.price">
          <div class="home-bottom-goods-img">
            <img :src="item.thumb"/>
          </div>
          <div class="home-bottom-goods-brand">{{item.brand}}</div>
          <div class="home-bottom-goods-name">{{item.name}}</div>
          <div class="home-bottom-goods-sale">
            <span>{{item.sale}}</span>
          </div>
          <div class="home-bottom-goods-price">￥{{item.price}}</div>
          <div class="home-bottom-goods-btn">看相似</div>
        </router-link>
      </li>
      <li>
        <a href="https://pages.tmall.com/wow/mit/act/download?firstModule=3&mmstat=tb_homepageprice&src=tb_homepageprice&spm=a211ue.11501597.new-recommend.dingkeng">
          <img src="/home/goods/redbag.jpg" class="redbag" />
        </a>
      </li>
      <li v-for="item in goodsList" :key="item.num">
        <router-link class="home-bottom-goods-link" :to="'/good?name='+item.name+'&thumb='+item.thumb+'&people='+item.people+'&post='+item.post+'&price='+item.price">
          <div class="home-bottom-goods-img">
            <img :src="item.thumb"/>
          </div>
          <div class="home-bottom-goods-brand">{{item.brand}}</div>
          <div class="home-bottom-goods-name">{{item.name}}</div>
          <div class="home-bottom-goods-sale">
            <span>{{item.sale}}</span>
          </div>
          <div class="home-bottom-goods-price">￥{{item.price}}</div>
          <div class="home-bottom-goods-btn">看相似</div>
        </router-link>
      </li>
    </ul>
    <img v-if="btnFlag" class="go-top" src="/home/top/1.jpg" @click="backTop" />
    <div>
      <component :is="tabname" v-show="showtab"></component>
    </div>
  </div>
</template>

<script>
import { onelist } from "../components/home/onelist.js";
import user from "../components/home/user.vue";
import {Swipe, SwipeItem} from 'vant'

export default {
  components: {
    user: user,
    "van-swipe": Swipe,
    "van-swipe-item": SwipeItem
  },
  data() {
    return {
      onelist: onelist,
      btnFlag: "",
      hou: 0,
      min: 0,
      sec: 0,
      tabname: "user",
      pageindex: 1,
      showtab: false
    };
  },
  computed: {
    goodsList() {
      return this.$store.state.goodsList;
    }
  },
  created() {
    let that = this;
    that.time();
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },

  methods: {
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },

    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 100) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    },
    time() {
      var that = this;
      var interval = setInterval(function timestampToTime() {
        var date = new Date(2020, 5, 5, 15, 30, 0, 999) - new Date().getTime();
        //new Date当前的时间戳，也可以换成自定义的时间戳
        if (date > 0) {
          let time = date / 1000;
          // 获取时、分、秒,毫秒
          that.hou =
            parseInt((time % (60 * 60 * 24)) / 3600) < 10
              ? "0" + parseInt((time % (60 * 60 * 24)) / 3600)
              : parseInt((time % (60 * 60 * 24)) / 3600);
          that.min =
            parseInt(((time % (60 * 60 * 24)) % 3600) / 60) < 10
              ? "0" + parseInt(((time % (60 * 60 * 24)) % 3600) / 60)
              : parseInt(((time % (60 * 60 * 24)) % 3600) / 60);
          that.sec =
            parseInt(((time % (60 * 60 * 24)) % 3600) % 60) < 10
              ? "0" + parseInt(((time % (60 * 60 * 24)) % 3600) % 60)
              : parseInt(((time % (60 * 60 * 24)) % 3600) % 60);
        } else {
        }
      }, 1000);
    },
    tab(index) {
      this.pageindex = index;
      if (index === 1) {
        this.tabname = "user";
        this.showtab = true;
      }
    }
  }
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  a {
    text-decoration: none;
  }
}
/* 顶部栏固定定位用 */
.home-shell {
  position: relative;
}
/* 顶部栏页面 */
.home-top {
  width: 100%;
  height: 90px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: rgb(255, 0, 54);
}
.home-top-top-shell {
  width: 100%;
  height: 44px;
}
.top-classify {
  display: inline-block;
  width: 35px;
  height: 100%;
  background: url(/home/top/2.jpg) no-repeat;
  background-size: 256px 28px;
  background-position: 10px 5px;
  vertical-align: top;
}
.top-logo {
  display: inline-block;
  width: 79%;
  height: 100%;
  background: url(/home/top/3.jpg) no-repeat center;
  background-size: 101px 17px;
}
.top-login-in {
  vertical-align: top;
  float: right;
  width: 8%;
  margin-right: 2%;
  height: 100%;
  background: url(/home/top/2.jpg) no-repeat;
  background-size: 256px 28px;
  background-position: -34px 6px;
}

.top-search {
  display: block;
  position: relative;
  input {
    font-size: 14px;
    display: block;
    width: 95%;
    height: 38px;
    margin-left: 2.5%;
    border-radius: 5px;
    border: 1px transparent;
    padding-left: 10%;
    color: rgba(0, 0, 0, 0.3);
  }
}
.top-search-img {
  position: absolute;
  left: 0;
  top: 0;
  width: 35px;
  height: 100%;
  background: url(/home/top/2.jpg) no-repeat;
  background-size: 256px 28px;
  background-position: -59px 6px;
}

/* 次级选择栏 */
.home-second-top {
  margin-top: 97px;
}

.home-top-list {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  list-style-type: none;
  padding: 10px 10px 0;
}
.home-top-list > li {
  height: 77px;
}
.home-top-list-img {
  width: 42px;
  height: 42px;
  margin: 2px auto 4px auto;
}
.home-top-list-img > img {
  width: 100%;
  height: 100%;
}
.home-top-list > li > a {
  text-decoration: none;
}
.home-top-list > li > a > p {
  font-size: 11.0933px;
  text-align: center;
  line-height: 24px;
  color: rgb(0, 0, 0);
}

/*轮播图  */
.my-swipe {
  text-align: center;
  a {
    display: block;
    img {
      width: 351px;
      height: 132px;
    }
  }
}


/* 促销栏 */
.home-promotion {
  display: flex;
  flex-wrap: wrap;
  height: 233px;
  /* border: 1px solid skyblue; */
}

.home-promotion-small {
  width: 45.5%;
  height: 48%;
  margin-left: 3%;
  margin-bottom: 2%;
  position: relative;
}

.home-sale {
  background: url(/home/promontion/shell1.png) no-repeat;
  background-size: 100% 175%;
}
.home-goods {
  background: url(/home/promontion/shell2.png) no-repeat;
  background-size: 100% 100%;
}
.home-ju {
  background: url(/home/promontion/shell3.png) no-repeat;
  background-size: 100% 100%;
}
.home-promontion-title {
  font-size: 16px;
  line-height: 16px;
  font-family: undefined;
  color: rgb(32, 32, 32);
  font-weight: bold;
  margin-top: 8px;
  margin-left: 5%;
}
.home-time {
  position: absolute;
  top: 10px;
  right: 10px;
  margin-left: 8%;
  font-size: 10px;
  span {
    padding: 2px;
    background-color: rgb(0, 0, 0);
    font-size: 10px;
    color: white;
    border-radius: 3px;
  }
}
.home-promontion-in-shell {
  width: 172.5px;
  height: 128.5px;
  margin-left: 4%;
}
.home-promontion-in-one,
.home-promontion-in-two {
  vertical-align: top;
  display: inline-block;
  width: 77.5px;
  height: 77.5px;
  position: relative;
  text-align: center;
}
.home-promontion-in-one > a > img {
  width: 77.5px;
  height: 77.5px;
}
.home-promontion-in-one > a > span {
  display: inline-block;
  width: 55px;
  position: absolute;
  left: 50%;
  margin-left: -20px;
  top: 80%;
  color: rgb(255, 0, 54);
  font-size: 10px;
  background-color: rgb(255, 237, 241);
  max-width: 66.1333px;
  overflow: hidden;
  white-space: nowrap;
  border: 1px solid rgb(255, 0, 54);
}
.home-promontion-in-two > a > img {
  width: 77.5px;
  height: 77.5px;
}
.home-promontion-in-two > a > span {
  display: inline-block;
  width: 55px;
  position: absolute;
  left: 50%;
  margin-left: -20px;
  top: 80%;
  color: rgb(255, 0, 54);
  font-size: 8.5px;
  background-color: rgb(255, 237, 241);
  max-width: 66.1333px;
  overflow: hidden;
  white-space: nowrap;
  border: 1px solid rgb(255, 0, 54);
}

/* 底部 */
.home-bottom-title {
  font-size: 18px;
  color: rgb(51, 51, 51);
  font-weight: bold;
  line-height: 26px;
  margin-left: 12px;
  margin-top: 10px;
}
.home-bottom-goods {
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 49.5% 49.5%;
  list-style-type: none;
  background: url(/home/goods/shell.jpg) no-repeat;
  background-size: 100% 125px;
}
.home-bottom-goods > li {
  margin-left: 10px;
  margin-right: 5px;
  margin-top: 2.5px;
  margin-bottom: 2.5px;
  font-size: 14px;
  border: 1px solid rgb(237, 237, 237);
  background-color: white;
}
.home-bottom-goods-link {
  text-decoration: none;
}
.home-bottom-goods-img {
  width: 138px;
  height: 138px;
  margin: 10px auto 5px auto;
}
.home-bottom-goods-img > img {
  width: 100%;
  height: 100%;
}
.home-bottom-goods-brand {
  width: 85%;
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
  background-color: rgb(205, 163, 177);
  color: white;
}
.home-bottom-goods-name {
  height: 36px;
  width: 85%;
  line-height: 18px;
  margin: 1px auto 3px auto;
  color: rgb(62, 62, 62);
  overflow: hidden;
  text-overflow: ellipsis;
}
.home-bottom-goods-sale {
  span {
    margin-left: 8%;
    margin-bottom: 2px;
    color: rgb(255, 0, 54);
    border: 1px solid rgb(255, 0, 54);
    font-size: 9.38667px;
    height: 11.0933px;
    line-height: 11.0933px
  }
  ;
}
.home-bottom-goods-price {
  margin-top: 6px;
  margin-left: 8%;
  color: rgb(255, 0, 0);
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
}
.home-bottom-goods-btn {
  float: right;
  background-color: rgb(255, 230, 235);
  width: 35%;
  border-radius: 10px;
  color: rgb(255, 0, 54);
  font-size: 10px;
  height: 20px;
  text-align: center;
  margin-right: 5%;
  margin-top: 10px;
}
.go-top {
  width: 37.5467px;
  height: 37.5467px;
  position: fixed;
  top: 89%;
  left: 87%;
}
.redbag {
  width: 100%;
  height: 100%;
}
</style>