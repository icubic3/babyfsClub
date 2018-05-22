<template>
  <div class="container">
       我是个人页
  </div>
</template>

<script>

export default {
  data () {
    return { }
  },
  methods: {
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

</style>