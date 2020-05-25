<template>
  <div>
    <div class="login_page">
      <div class="login_head">
        <div></div>
        <div>
          <span class="fony">联系客服</span>
          <span class="acolor">|</span>
          <span class="fony">企业注册</span>
        </div>
      </div>
      <div class="tc">
        <div class="middl">
          <div class="login_middle">
            <div class="login_title">欢迎登录苏宁易购</div>
          </div>
          <div class="input_box">
            <input
              type="text"
              placeholder="账号，验证码都是1234"
              class="login_input"
              v-model="message"
              @change="loginchange"
            />
          </div>
          <div class="yzm">
            <input type="text" v-model="one" value="1" />
            <input type="text" v-model="two" />
            <input type="text" v-model="three" />
            <input type="text" v-model="four" />
            <button
              class="getyzm"
              :class="{'h-active':index==3}"
              @click="myclick"
              :disabled="khan"
            >{{get}}</button>
          </div>
          <div class="warn">未注册的手机号验证后自动注册</div>
          <div>
            <button class="yellowbtn" @click="loginBtn">登录</button>
          </div>
          <div class="login_change">账号密码登陆</div>
        </div>

        <div class="h_error" v-if="error">验证码错误</div>

        <div>
          <div class="other">——————其他登录方式———————</div>
        </div>
        <div class="login_img">
          <img src="https://res.suning.cn/project/passport/login/wapV8/images/icon_qq.png" alt />
          <img src="https://res.suning.cn/project/passport/login/wapV8/images/icon_epp.png" alt />
          <img src="https://res.suning.cn/project/passport/login/wapV8/images/icon_k.png" alt />
        </div>
        <div class="login_text">
          我同意
          <a href class="argument">《苏宁易购会员商城》</a>
          <a href class="yi">《易付宝协议》</a>
        </div>
      </div>

      <!--  -->
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default {
  methods: {
    myclick() {
      console.log(666);
      this.khan = true;
      let time = 10;
      let timer = setInterval(() => {
        let that = this;
        if (time == 0) {
          that.khan = false;
          clearInterval(timer);
          time = 10;
          that.get = "获取验证码";
        } else {
          this.get = "还剩" + " " + time + " " + "s";
          time--;
        }
      }, 1000);
    },
    loginBtn() {
      if (
        this.message == 1234 &&
        this.one == 1 &&
        this.two == 2 &&
        this.three == 3 &&
        this.four == 4
      ) {
        localStorage.setItem("token", this.message);
        this.error = false;
        this.$router.replace({
          path: "/myebay"
        });

        this.$store.commit('seenChange');
      } else {
        this.error = true;
      }
    },
    loginchange() {
      if (this.message) {
        this.index = 3;
      } else {
        this.index = 4;
      }
    },
    hgetCode() {}
  },
  data() {
    return {
      message: "",
      one: "",
      two: "",
      three: "",
      four: "",
      error: false,
      index: 1,
      get: "获取验证码",
      khan: false
    };
  },
  created() {
    let token = localStorage.getItem("token");
    if (token) {
      this.$router.push({
        path: "/myebay"
      });
    }
  }
};
</script>

<style >
.iu {
  text-align: center;
}
.h_error {
  text-align: center;
  margin-top: 0.3rem;
  color: red;
  font-size: 0.7rem;
}
.login_head {
  display: flex;
  justify-content: space-between;
}
.fony {
  font-size: 0.5rem;
  margin-right: 0.3rem;
}
.acolor {
  font-size: 0.7rem;
  margin-right: 0.3rem;
}
.login_title {
  font-size: 0.75rem;
}
.login_middle {
  margin-left: 1.3rem;
  margin-top: 1.2rem;
}
.login_input {
  width: 82%;
  height: 1.34rem;
  /* margin: 0.417rem 0 9% 9%; */
  padding: 0.2rem 0;
  border-style: none;
  outline: none;
}

.input_box {
  width: 82%;
  margin: 1.617rem 0 9% 9%;
  border-bottom: 0.042rem solid #ccc;
}
input::-webkit-input-placeholder {
  color: #ccc;
}
.yzm input {
  width: 1.36rem;
  height: 1.36rem;
  border-style: none;
  border-bottom: 1px solid#ccc;
  outline: none;
  text-align: center;
}
.yzm {
  display: flex;
  justify-content: space-between;
  width: 82%;
  margin: 1.617rem 0 9% 9%;
}
.getyzm {
  background-color: white;
  outline: none;
  border-style: none;
  border-radius: 0.205rem;
  border: 1px solid#cccccc;
  color: #ccc;
  padding: 0.3rem 0.5rem;
}
.warn {
  width: 82%;
  margin-top: -1.5rem;
  margin-left: 1.25rem;
  font-size: 0.4rem;
}
.yellowbtn {
  width: 82%;
  margin: 1.617rem 0 9% 9%;
  height: 1.8rem;
  color: #222;
  font-size: 0.68rem;
  border-radius: 0.36rem;
  background: #fc0;
  font-weight: 700;
  outline: none;
  border-style: none;
}
.login_change {
  margin-top: -0.417rem;
  font-size: 0.65rem;
  text-align: center;
}
.tc {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.other {
  font-size: 0.55rem;
  margin-top: 5.42rem;
  width: 82%;
  margin-left: 2.08rem;
  color: #bbb;
  margin-bottom: 0.417rem;
}
.login_img img {
  width: 1.32rem;
  height: 1.32rem;
}
.login_img {
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 0 20%;
}
.login_text {
  color: #aaa;
  width: 60%;
  margin: 0.8rem 20% 0 20%;
  font-size: 0.5rem;
}
.yi {
  margin-left: 0.2rem;
}
a {
  color: black;
}
.h-active {
  color: black;
}
</style>