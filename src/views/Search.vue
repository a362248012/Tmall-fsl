<template>
  <div>
    <div class="top-search">
      <van-icon name="arrow-left" class="go-back" @click="goback"/>
      <input type="text" placeholder="搜索商品/店铺/品牌" v-model="searchInput" @keyup.enter="search" />
      <van-icon class="close-btn" v-show="searchInput !== ''" name="cross" @click="clearInput" />
    </div>
    <div class="middle-search">
      <div class="search-in" @click="toProduct(item.name)" v-for="(item, index) in tableList" :key="index">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
import { seachlist } from "../components/search/search.js";
import {Icon} from "vant"

export default {
  components: {
    "van-icon": Icon
  },
  data() {
    return {
      list: seachlist,
      searchInput: "",
      searchValue: ""
    };
  },
  created: function() {
    this.list = this.list;
  },
  computed: {
    tableList() {
      let { list = [], searchValue } = this;
      searchValue = searchValue.trim();
      if (searchValue && list && list.length) {
        return list.filter(function(item) {
          if (item.name.includes(searchValue)) {
            return item;
          }
        });
      }
      return list;
    }
  },
  methods: {
    search() {
      this.searchValue = this.searchInput.trim();
    },
    clearInput() {
      this.searchInput = ''
    },
    toProduct(name) {
      this.$router.push({
        path: "/searchProduct",
        query: {title: name}
      })
    },
    goback(){
      history.back()
    }
  }
};
</script>

<style scoped lang="less">
.top-search {
  position: relative;
  display: block;
  width: 100%;
  height: 45px;
  background-color: rgba(0,0,0,.85);
  display: flex;
  a {
    color:#ffffff;
  }
  .go-back {
    color: #ffffff;
    font-size: 30px;
    line-height: 45px;
  }
  .close-btn {
    font-size: 20px;
    line-height: 45px;
    position: absolute;
    top: 0;
    right: 20px;
  }
}
.top-search > input {
  width: 95%;
  height: 80%;
  margin: 1.25% 2.5%;
  border-radius: 5px;
  border: 1px transparent;
  font-size: 15px;
  padding-left: 10px;
}
.search-in {
  float: left;
  width: 50%;
  overflow: hidden;
  box-sizing: border-box;
  font-weight: 400;
  color: #333;
  font-size: 14px;
  white-space: nowrap;
  border-bottom: 1px solid #eee;
  padding: 0.68em 0.6em;
}
.middle-search {
  width: 98%;
  height: 100%;
  padding: 0.6em 0.6em 0;
}
</style>