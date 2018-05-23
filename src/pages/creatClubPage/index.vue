<template>
  <div class="container">
       <button @click="creatAClub">创建一个社团</button>
  </div>
</template>

<script>
import requestManager from '@/utils/requestManager'
export default {
  data () {
    return { }
  },
  methods: {
    creatAClub(){
      requestManager.testGet(function (res){
        console.log(res)
      })
    },
  },

  created () {}
}
</script>

<style scoped>

</style>