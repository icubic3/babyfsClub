<template>
  <div class="container">
    <open-data type="userAvatarUrl" class="userinfo-avatar"></open-data>
    <open-data type="userNickName"></open-data>

    <button open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="onGetUserInfo">点击获取我的社团信息</button>
  </div>
</template>

<script>

var WXBizDataCrypt = require('@/utils/WXBizDataCrypt')

export default {
  data () {
    return {
    userInfo :{}
    }
  },
  methods: {
    
  },

  onGetUserInfo: function(e) {

  },

  created () {
    wx.getUserInfo({
      withCredentials: false,
      success: res => {},
      fail: () => {console.log('failed')},
      complete: () => {}
    });
  }
}
</script>

<style scoped>

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%
}

</style>