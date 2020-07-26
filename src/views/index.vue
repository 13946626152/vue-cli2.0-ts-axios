<template>
  <div class="home">
    <Header :headerObj="headerObj"></Header>
    <div id="aa">

    </div>
    <div @click.stop="clickGo(1)">首页</div>
    <div @click.stop="clickGo(2)">列表页</div>
    <div @click.stop="clickGo(3)">关于</div>
    <h1>首页</h1>
    <button @click="click1">点击1</button>
    <button @click="click2">点击2</button>
    <button @click="click3">点击3</button>
    <button @click="click4">点击4</button>
    <button @click="click5">点击5</button>
    <button @click="click6">点击6</button>
    <button>点击7</button>
    <button @click="click8">点击8</button>
    <div v-if="type==0">
      <div class="abc"></div>
      <img class="abc2" src="../assets/images/11.jpg" />
      <img class="abc2" :src="imgUrler" />
    </div>
    <div v-if="type==1">{{ajaxData}}</div>
    <div v-if="type==2">{{ajaxData}}</div>
    <div v-if="type==3">
      <div v-html="ajaxData"></div>
    </div>
    <div v-if="type==4">
      <div v-html="ajaxData"></div>
    </div>
    <div v-if="type==5">
      {{ajaxData}}
      <div v-for="(list,index) in ajaxData" :key="index">{{list.name}}</div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import rq from "../api/http/index";
import '@/assets/js/jquery-1.8.3.min.js'
// import Url from '../config.js'
export default {
  name: "index",
  components: {
    Header
  },
  // 钩子函数 主要用在 页面加载之前加载数据
  created() {
    // alert(process.env.NODE_ENV)
    // console.log(process.env)
  },
  data() {
    return {
      num: 1,
      type: -1,
      ajaxData: null,
      headerObj: {
        leftFun: () => {
          this.headerfun();
        },
        type: 1,
        title: "今天好天气"
      },

      imgUrler: require("../assets/images/11.jpg")
    };
  },
  // 方法
  methods: {
    headerfun() {},
     click8(){
      console.log( $('#aa'))
       console.log( $)
    },

    click7(){

          this.$router.push({path:'/list'})
    },

    click6() {
      rq.requests
        .post("/api/control/login", {
          params: {
            login: true,
            time: "2020.6.27"
          }
        })
        .then(res => {
          this.ajaxData = res.data;

          this.type = 5;
          /*!
           * 处理成功的函数 相当于succ
           */ console.log(this.ajaxData);
        })
        .catch(error => {
          console.log(error); //错误处理 相当于error
        });
    },
    click5() {
      rq.requests
        .post("/api/control/login", {
          params: {
            login: true,
            time: "2020.6.27"
          }
        })
        .then(res => {
          this.ajaxData = res.data;

          this.type = 5;
          console.log(this.ajaxData); //处理成功的函数 相当于succ
        })
        .catch(error => {
          // console.log(error)//错误处理 相当于error
        });
    },
    click4() {
      rq.requests
        .post("/api/about", {
          params: {
            type: "4",
            time: "2020.6.26"
          }
        })
        .then(res => {
          this.ajaxData = res.data;
          this.type = 4;
          console.log(this.ajaxData); //处理成功的函数 相当于succ
        })
        .catch(error => {
          // console.log(error)//错误处理 相当于error
        });
    },
    click3() {
      rq.requests
        .post("/api/list", {
          params: {
            type: "3",
            time: "2020.6.26"
          }
        })
        .then(res => {
          this.ajaxData = res.data;
          this.type = 3;
          console.log(this.ajaxData); //处理成功的函数 相当于succ
        })
        .catch(error => {
          // console.log(error)//错误处理 相当于error
        });
    },
    click2() {

alert(11)

      rq.requests
        .get("/api/data2?type=1&time=2020", {})
        .then(res => {
          this.ajaxData = res.data;
          this.type = 1;
          console.log(this.ajaxData); //处理成功的函数 相当于succ
        })
        .catch(error => {
          // console.log(error)//错误处理 相当于error
        });
    },
    click1() {
      rq.requests
        .get("/api/data1?type=1&time=2020", {})
        .then(res => {
          this.ajaxData = res.data;
          this.type = 1;
          console.log(this.ajaxData); //处理成功的函数 相当于succ
        })
        .catch(error => {
          // console.log(error)//错误处理 相当于error
        });
    },
  
    
    
    
    
    // 点击跳转
    clickGo(index) {
      if (index == 1) {
        this.$router.push({ path: "/index" });
      } else if (index == 2) {
        this.$router.push({ path: "/list" });
      } else if (index == 3) {
        this.$router.push({ path: "/about" });
      }
    }
  }
};
</script>
<style  scoped type="text/css">
.abc {
  width: 200px;
  height: 200px;
  background: url("../assets/images/33.jpg");
  background-size: 100%;
}
.abc2 {
  width: 200px;
  height: 200px;
}
</style>
