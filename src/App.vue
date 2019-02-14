<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
         <button @click="goback()">后退</button>
         <button @click="goHome()">回到首页</button>
    </div>
    <div>
        <router-link to="/">首页</router-link> | 
        <router-link to="/hi1">Hi1页面</router-link>| 
        <router-link to="/params/198/ks website is very good">params</router-link> |
        <router-link to="/gohome">gohome</router-link>|
        <router-link to='/KS'>ks</router-link>|
        <router-link to="/aaabbb">Error</router-link>
    </div>
    <transition name="fade" mode="out-in">
           <router-view/>
    </transition>
   
    
    <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px"></router-view>
    <router-view name="right" style="float:left;width:50%;background-color:#c0c;height:300px"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
     goback(){
        this.$router.go(-1);
     },
     goHome(){
       this.$router.push('/');
     }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
