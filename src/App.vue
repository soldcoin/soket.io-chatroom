<template>
  <div id="app">
    <nav-header></nav-header>
    <div class="chat-content">
      <in-msg></in-msg>
      <out-msg></out-msg>
    </div>
    <input-box></input-box>
  </div>
</template>

<script>
import navHeader from './components/header'
import inputBox from './components/input.vue'
import inMsg from './components/receiveMessage.vue'
import outMsg from './components/sendMessage.vue'

export default {
  name: 'app',
  components: {
    'nav-header': navHeader,
    'input-box': inputBox,
    'in-msg': inMsg,
    'out-msg': outMsg
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.chat-content {
  position: fixed;
  left: 0;
  top: 0.88rem;
  bottom: 0.88rem;
  width: 100%;
  overflow: scroll;
}
</style>
