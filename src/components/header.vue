<template>
  <div class="header">
       <div class="left" @click="clickLeft"> </div>
       <div class="content" v-if="headerObj.title">{{headerObj.title}} </div>
       <div class="right"> </div>
       
  </div>
</template>

<script>
  /**
      * @Author：张有彬
      * @Date:2018年06月17日
      * @Version:1.0
      * @DESCRIPTION:头部组件
      */  
export default {
  name: 'Header',
  props:['headerObj'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    
  },
  methods:{
    
     clickLeft(){
         this.headerObj.leftFun()
     },
  }
}
</script>


<style scoped>
.header{
 
  width:750px;
  height:100px;
  background: yellow;
  overflow: hidden;
  display:flex;
  justify-content: space-between;
}
.left{
  width:100px;
  height:100px;
  background: tomato;
}
.content{
   width:400px;
  height:100px;
  background: blue
}
.right{
    width:100px;
  height:100px;
  background: gray;
}

</style>
