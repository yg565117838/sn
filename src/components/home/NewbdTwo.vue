<template>
    <div class="newbd-two" @click="notFound">
        <img src="../../assets/home/backgroud/4.png" alt="" class="item-bg">
        <img :src="item.src" alt="" class="item-image">
        <p class="three-name">
            <span>人气榜</span>
        </p>
        <p class="three-title">{{item.title}}</p>
        <p class="three-desc">{{item.desc}}</p>
    </div>
</template>
<script>
export default {
    props:['item'],
    methods:{
        notFound(){
            this.$router.push('404');
        }
    }
}
</script>
<style scoped>
.newbd-two{
    position: relative;
    width: 4.52rem;
    height: 5.32rem;
    border-radius: .24rem;
    background: #FFF;
    padding-top: .3rem;
}
.item-bg{
    position: absolute;
    width: 4.52rem;
    height: 1.86rem;
    left: 0;
    bottom: 0;
    border-radius: 0 0 .24rem .24rem;
}
.item-image{
    position: relative;
    display: block;
    width: 3rem;
    height: 3rem;
    margin: 0 auto;
}
.three-name{
    position: absolute;
    width: 100%;
    height: .68rem;
    top: 3.16rem;
    left: 0;
    display: flex;
    justify-content: space-between;
}
.three-name span{
    display: block;
    height: .68rem;
    font-size: .44rem;
    line-height: .6rem;
    min-width: 2rem;
    max-width: 4rem;
    background: #FFF;
    color: #fb7f0a;
    border: .04rem solid #fb7f0a;
    border-radius: .34rem;
    text-align: center;
    margin: 0 auto;
    overflow: hidden;
}
.three-title{
    position: relative;
    width: 4.4rem;
    height: .64rem;
    font-size: .52rem;
    line-height: .64rem;
    margin: .62rem auto .06rem;
    color: #fff;
    text-align: center;
    overflow: hidden;
}
.three-desc{
    position: relative;
    width: 4rem;
    height: .48rem;
    line-height: .48rem;
    font-size: .44rem;
    margin: 0 auto;
    color: #fff;
    opacity: .8;
    text-align: center;
    overflow: hidden;
}
</style>