<template>
  <div class="container">
    <form>
      社团名字:<input class="input" placeholder="请输入名字" />
      社团简介:<textarea class="input" placeholder="请输入简介" />
      <button class="button" @click="uploadImage" >上传社团微信群的二维码</button>
      <button class="button" type="submit" @click="creatAClub">创建一个社团</button>
    </form>
  </div>
</template>

<script>
import requestManager from '@/utils/requestManager'
export default {
  data () {
    return { }
  },
  methods: {
    creatAClub (){
      requestManager.testGet(function (res){
        console.log(res)
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