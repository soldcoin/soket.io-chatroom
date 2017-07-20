<template>
  <div id="app">
    <component :is="currentView" v-on:cameIn="tabView" :userdata="user"></component>
  </div>
</template>

<script>
// import navHeader from './components/header'
// import inputBox from './components/input.vue'
// import inMsg from './components/receiveMessage.vue'
// import outMsg from './components/sendMessage.vue'
import chatroom from './components/chatroom.vue';
import login from './components/login.vue';

export default {
  data () {
    return {
      user: {},
      currentView: 'login-name'
    }
  },
  components: {
    'chat-room': chatroom,
    'login-name': login
  },
  methods: {
    tabView (data) {
      if (!data.name) return;
      this.user = data;
      this.currentView = 'chat-room';
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body, html {
  width: 100%;
  height: 100%;
  font-family: "微软雅黑";
}
.clearfix:after{
  content:'.';
  display:block;
  height:0;
  clear:both;
  visibility:hidden;
}
#app {
  font-family: '微软雅黑', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;

  position: relative;
}
/*.chat-content {
  position: fixed;
  left: 0;
  top: 0.88rem;
  bottom: 0.88rem;
  width: 100%;
  background: #f5f5f5;
  overflow-y: scroll;
}*/
</style>
