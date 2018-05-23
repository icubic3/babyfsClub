export default{
  testGet (result){
    wx.request({
      url: 'https://ip4ezbxh.qcloud.la/weapp/test',
      method: 'GET',
      dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
      success: res => {result(res)},
      fail: () => {showNetworkError()},
      complete: () => {}
    });
  }
}




function showNetworkError(){
    wx.showToast({
      title: '网络请求失败', //提示的内容,
      icon: 'none', //图标,
      duration: 2000, //延迟时间,
      mask: true, //显示透明蒙层，防止触摸穿透,
      success: res => {}
    });
}
