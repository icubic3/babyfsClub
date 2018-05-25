var serverDomain = 'https://ip4ezbxh.qcloud.la/weapp/'

var creatClubUrl = 'addClub'
var getClubListUrl = 'clubList'


export default{
  testGet (result){
    
  },
  creatAClub(data, result){
    const url = serverDomain + creatClubUrl
    postRequestWithUrl(url, data, result);
  },
  getClubList(result){
    const url = serverDomain + getClubListUrl
    getRequestWithUrl(url, result);
  }
}

function postRequestWithUrl(url,data,result){
  wx.request({
    url: url,
    data: data,
    method: 'POST',
    dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
    success: res => {result(res)},
    fail: () => {showNetworkError()},
    complete: () => {}
  });
}

function getRequestWithUrl(url,result){
  wx.request({
    url: url,
    method: 'GET',
    dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
    success: res => {result(res)},
    fail: () => {showNetworkError()},
    complete: () => {}
  });
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