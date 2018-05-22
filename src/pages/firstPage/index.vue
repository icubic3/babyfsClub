<template>
  <div class="container">
      <button @click="goToCreatAClub" class="reqBtn">创建一个社团</button>
      <button @click="goToFindAClub" class="reqBtn">寻找感兴趣的社团</button>
  </div>
</template>

<script>

export default {
  data () {
    return { }
  },
  methods: {
    goToCreatAClub(){
      wx.navigateTo({ url: '../creatClubPage/main'});
    },
    goToFindAClub(){
      wx.navigateTo({ url: '../searchClubPage/main'});
    }
  },

  created () {}
}
</script>

<style scoped>
.reqBtn{
  width: 55%;
  margin: 10pt;
}

</style>