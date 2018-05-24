<template>
  <div class="listContainer">
    <div class="listItems" v-for="(item,index) in clubList" :key="index" @click="chooseClub(item.name)">
       {{item.name}}
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      clubList : [
        {name:'足球社团'},
        {name:'篮球社团'},
        {name:'羽毛球社团'},
      ]
    }
  },
  methods: {
    chooseClub(e){
      var pageUrl = 'clubDetails/main?title=' + e
      wx.navigateTo({ url: pageUrl });
    },
      sendReq(){
        console.log('发送请求')
          wx.request({
            url: 'https://ip4ezbxh.qcloud.la/weapp/test', //开发者服务器接口地址",
            method: 'GET',
            dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
            success: res => {console.log(res)},
            fail: () => {},
            complete: () => {}
          });
      }
  },

  created () {}
}
</script>

<style scoped>

.listContainer{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.listItems{
  width: 100%;
  padding: 10px;
  margin: 3px;
  border-bottom-width: 1px;
  border-bottom-style: solid;

}

</style>