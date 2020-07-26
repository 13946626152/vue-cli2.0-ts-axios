<template>
	
  <div  class="content-wrapper" >
	  <div @click.stop="clickGo(1)">首页</div>
      <div @click.stop="clickGo(2)">列表页</div>
      <div @click.stop="clickGo(3)">关于</div>
       <h1>list页</h1>
       <div>{{a}}</div>
       <div>{{b}}</div>
       <div>{{c}}</div>
       <div>{{d}}</div>
  </div>
</template>



<script lang = "ts" >
  // import Headerseach from '../components/Headerseach';
  import { Component, Vue } from "vue-property-decorator";
  interface obj {
      a: string;
      b: number;
    }
	
 @Component({
      props: [],
      components: {},
      computed: {},
      watch: {},
      mounted () {},
      created () {}
    })
	export default class a extends Vue {
      // data
      a:number = 1
      b:string = '2'
      c:boolean = true
      d:obj = {
        a: 'qi',
        b: 77
      }
      // methods
      funA () {}
      funB () {}
    }
</script>

<style  scoped type="text/css">



</style>
