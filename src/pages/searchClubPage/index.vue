<template>
  <div class="listContainer">
    <div class="listItems" v-for="(item,index) in clubList" :key="index" @click="chooseClub(item.name)">
       {{item.name}}
    </div>
  </div>
</template>

<script>
import requestManager from '@/utils/requestManager'

export default {
  data () {
    return {
      clubList : []
    }
  },
  methods: {
    chooseClub(e){
      var pageUrl = 'clubDetails/main?title=' + e
      wx.navigateTo({ url: pageUrl });
    },
  },
  async onLoad(options){
     requestManager.getClubList(res => {
      this.clubList = res.data.data.data.info
      console.log(res.data.data.data.info)
    })
  }
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