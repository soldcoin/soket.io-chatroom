<template>
  <div class="room-container">
    <div class="nav-container">
      <div class="header-left">
        <img src="../assets/logo.png" />
      </div>
      <div class="header-right">{{ userdata.name }}</div>
    </div>

    <div class="chatroom">
      <div v-bind:class="'msgBox ' + (item.isCurrent ?　'outBox' : 'inBox')"
           v-for="(item, index) in msgGroup"
           v-bind:key="index">
        <div>
          <div v-bind:class="(item.isCurrent ?　'msg-mine ' : '') + 'message clearfix'">
            <div class="info">
              <img src="../assets/logo.png" />
            </div>
            <p class="item">{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="input-box">
      <input v-model="outMsg"
             @keydown.enter="sendMsg"
             name="message"
             id="message" /><button v-on:click="sendMsg">Send</button>
    </div>
  </div>
</template>

<script type="text/javascript">
import io from "socket.io-client";
// const socket = io();                          //在Vue实例中初始化socket.io才能实时检测到connect事件，

export default {
  name: "chatroom",
  props: {
    userdata: {}
  },
  data() {
    return {
      msgGroup:
        (localStorage.msg_history && JSON.parse(localStorage.msg_history)) ||
        [],
      outMsg: "",
      socket: io("http://35.234.7.136")
    };
  },
  watch: {
    msgGroup(val) {
      localStorage.msg_history = JSON.stringify(val);
      this.scrollEnd();
    }
  },
  methods: {
    sendMsg() {
      if (!this.outMsg) return;
      let toMsg = {
        data: new Date().getTime(),
        content: this.outMsg,
        isCurrent: true
      };
      this.socket.emit("sendMsg", toMsg);
      this.msgGroup.push(toMsg);
      this.outMsg = "";
    },
    scrollEnd() {
      setTimeout(() => {
        this.chatroom = document.querySelector(".chatroom");
        this.chatroom.scrollTop = this.chatroom.scrollHeight;
      }, 0);
    },
    test() {}
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.scrollEnd();

    this.socket.on("receiveMsg", data => {
      //接收消息
      data.isCurrent = false;
      this.msgGroup.push(data);
    });

    this.socket.on("connect", () => {
      //监听登录
      console.log("connect fired");
      this.socket.emit("login", this.userdata);
    });

    this.socket.on("reconnect", () => {
      //监听登录(重连)
      console.log("reconnect fired");
    });

    this.socket.on("user join", data => {
      //用户连接提示
      // console.log(data.name + '进入房间');
    });

    this.socket.on("user left", data => {
      //用户退出提示
      // console.log(data.name + '离开房间');
    });
  },
  beforeUpdate() {},
  updated() {},
  beforeDestory() {},
  destoryed() {}
};
</script>

<style lang="scss" type="text/css">
.nav-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 0.88rem;
  background-color: #2eb5e5;
  display: flex;
  & > div {
    flex: 1;
  }
  .header-left {
    padding: 0.04rem 0;
    img {
      display: block;
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 0.3rem;
      vertical-align: middle;
    }
  }
}

.chatroom {
  position: absolute;
  left: 0;
  top: 0.88rem;
  bottom: 0.78rem;
  width: 100%;
  background: #f5f5f5;
  overflow-y: scroll;
  .inBox {
    .message {
      display: flex;
      width: 100%;
      padding: 0.2rem;
      .info {
        width: 0.56rem;
        height: 100%;
        margin: 0 0.2rem;
        min-height: 0.56rem;
        // background: #ff5a00;
        position: relative;
        img {
          display: block;
          border: none;
          width: 0.56rem;
          height: 0.56rem;
          border: 1px solid #e5e5e5;
          border-radius: 0.28rem;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
      p.item {
        font-size: 0.28rem;
        line-height: 0.36rem;
        min-height: 0.36rem;
        max-width: 70%;
        text-align: left;
        padding: 0.1rem 0.2rem;
        background: #fff;
        border-radius: 0.1rem;
        position: relative;
        &::before {
          content: "";
          display: block;
          width: 0;
          height: 0;
          position: absolute;
          left: -0.2rem;
          top: 0.28rem;
          transform: translateY(-50%);
          border-right: 0.1rem solid #fff;
          border-left: 0.1rem solid transparent;
          border-top: 0.1rem solid transparent;
          border-bottom: 0.1rem solid transparent;
        }
      }
    }
    .msg-mine {
    }
  }

  .outBox {
    .message {
      display: flex;
      width: 100%;
      padding: 0.2rem;
      .info {
        width: 0.56rem;
        height: 100%;
        margin: 0 0.2rem;
        min-height: 0.56rem;
        // background: #ff5a00;
        position: relative;
        img {
          display: block;
          border: none;
          width: 0.56rem;
          height: 0.56rem;
          border: 1px solid #2eb5e5;
          border-radius: 0.28rem;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
      p.item {
        font-size: 0.28rem;
        line-height: 0.36rem;
        min-height: 0.56rem;
        max-width: 70%;
        text-align: left;
        padding: 0.1rem 0.2rem;
        // background: #e5e5e5;
        border-radius: 0.1rem;
        position: relative;
        &::before {
          content: "";
          display: block;
          width: 0;
          height: 0;
          position: absolute;
          left: -0.2rem;
          top: 0.28rem;
          transform: translateY(-50%);
          border-right: 0.1rem solid #2eb5e5;
          border-left: 0.1rem solid transparent;
          border-top: 0.1rem solid transparent;
          border-bottom: 0.1rem solid transparent;
        }
      }
    }

    .msg-mine {
      display: block;
      .info {
        float: right;
      }
      p.item {
        float: right;
        background: #2eb5e5;
        &::before {
          display: none;
        }
        &::after {
          content: "";
          display: block;
          width: 0;
          height: 0;
          position: absolute;
          right: -0.2rem;
          top: 0.28rem;
          border: none;
          transform: translateY(-50%);
          border-left: 0.1rem solid #2eb5e5;
          border-right: 0.1rem solid transparent;
          border-top: 0.1rem solid transparent;
          border-bottom: 0.1rem solid transparent;
        }
      }
    }
  }

  p.item {
    // word-wrap: break-word;
    word-break: break-all;
  }

  .participant {
    width: 100%;
    text-align: center;
    position: relative;
    span {
      display: inline-block;
      vertical-align: middle;
      margin: 0 auto;
      width: auto;
      padding: 0 0.2rem;
      max-width: 50%;
      background: #e5e5e5;
      color: #fff;
      border-radius: 0.25rem;
      font-size: 0.3rem;
      line-height: 0.5rem;
    }
  }
}

.input-box {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.78rem;
  line-height: 0.78rem;
  padding: 0.05rem;
  border-top: 1px solid #000;
  display: flex;
  input {
    // display: inline-block;
    border: none;
    width: 80%;
    height: 0.68rem;
    line-height: 0.68rem;
    vertical-align: middle;
    outline: none;
    font-size: 0.32rem;
    padding: 0.05rem;
    border-bottom: 1px solid #2eb5e5;
    background: #f5f5f5;
  }
  button {
    // display: inline-block;
    border: none;
    width: 18%;
    height: 0.68rem;
    margin-left: 0.1rem;
    background: #2eb5e5;
    text-align: center;
    font-size: 0.32rem;
    color: #fff;
    vertical-align: middle;
  }
}
</style>
