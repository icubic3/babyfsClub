<template>
  <div class="listContainer">
    <text>扫码来加入社团群</text>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
    chooseClub(e){     
      console.log(e)
    },
  },

  async onLoad(options){
      wx.setNavigationBarTitle({ title: options.title });
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