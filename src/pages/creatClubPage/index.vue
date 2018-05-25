<template>
  <div class="container">
    <form>
      社团名字:<input class="input" placeholder="请输入名字" v-model="inputText.name" />
      社团简介:<textarea class="input" placeholder="请输入简介" v-model="inputText.tag" />
      <button class="button" @click="uploadImage" >上传社团微信群的二维码</button>
      <button class="button" type="submit" @click="creatAClub">创建一个社团</button>
    </form>
  </div>
</template>

<script>
import requestManager from '@/utils/requestManager'
export default {
  data () {
    return {
      inputText:{}
    }
  },
  methods: {
    creatAClub (){
      var data = this.inputText
      requestManager.creatAClub(data,res => {
        if (res.data.code == 0){
          wx.showToast({
            title: '创建成功!', //提示的内容,
            icon: 'success', //图标,
            duration: 2000, //延迟时间,
            mask: true, //显示透明蒙层，防止触摸穿透,
            success: res => {}
          });
        }else{
          wx.showToast({
            title: '创建失败!', //提示的内容,
            icon: 'none', //图标,
            duration: 2000, //延迟时间,
            mask: true, //显示透明蒙层，防止触摸穿透,
            success: res => {}
          });
        }
      })
    },
    uploadImage (){
      console.log('upload image')
    }
  },

  created () {}
}
</script>

<style scoped>

.button{
  margin-bottom: 25px;
}

.input{
  border-color: black;
  border: 2px;
  border-style: solid;
  margin-bottom: 25px;
}

</style>