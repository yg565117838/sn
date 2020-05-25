<template>
  <div id="app">
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
  </div>
</template>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,body,#app{
  height: 100%;
}
body{
  min-width: 320px;
  line-height: 1.5;
  font-family: Arial,Helvetica,STHeiTi,sans-serif;
  background: #f2f2f2;
}
@media screen and (min-width: 320px) {
  html {
    font-size: 21.33px;
  }
}

@media screen and (min-width: 360px) {
  html {
    font-size: 24px;
  }
}

@media screen and (min-width: 375px) {
  html {
    font-size: 25px;
  }
}

@media screen and (min-width: 384px) {
  html {
    font-size: 26.67px;
  }
}

@media screen and (min-width: 414px) {
  html {
    font-size: 27.6px;
  }
}

@media screen and (min-width: 424px) {
  html {
    font-size: 28.27px;
  }
}

@media screen and (min-width: 480px) {
  html {
    font-size: 32px;
  }
}

@media screen and (min-width: 540px) {
  html {
    font-size: 36px;
  }
}

@media screen and (min-width: 720px) {
  html {
    font-size: 48px;
  }
}
@media screen and (min-width: 750px) {
  html {
    font-size: 50px;
  }
}
#app{
  margin: 0 auto;
  width: 15rem;
}
</style>
