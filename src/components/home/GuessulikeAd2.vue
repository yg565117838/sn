<template>
    <div class="ad" :style='{"background-image":"url("+item.bgimg+")"}' @click="notFound">
        <div class="content">
            <img :src="item.shop" alt="">
        </div>
        <div class="shop-detail">
            <img :src="item.logo" alt="" class="shop-logo">
            <div class="shop-other">
                <p class="shop-title">{{item.title}}</p>
                <div class="dp-infor">
                    <div class="dp-star-gray">
                        <img :src="item.gray" alt="" class="star-logo">
                    </div>
                    <div class="dp-star-blin">
                        <img :src="item.blin" alt="" class="star-logo">
                    </div>
                </div>
            </div>
        </div>
        <div class="line"></div>
        <div class="pd-enter">
            <img :src="item.logo2" alt="" class="pd-logo">
            <span class="pd-name">{{item.name}}</span>
            <span class="arrow-right"></span>
        </div>
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
.ad{
    height: 10.02rem;
    padding: 0 0 .28rem 0;
    position: relative;
    box-sizing: border-box;
    width: 6.84rem;
    overflow: hidden;
    border-radius: .24rem;
    margin-bottom: .36rem;
    background-color: #FFF;
    background-size: 6.84rem 10.02rem;
}
.content{
    width: 6.84rem;
    height: 6.84rem;
    margin: 0 auto .04rem;
}
.content img{
    width: 6.84rem;
    height: 6.84rem;
    border-radius: .24rem .24rem 0 0;
}
.shop-detail{
    display: flex;
    width: 100%;
    padding: 0 .24rem;
    box-sizing: border-box;
    justify-content: left;
}
.shop-logo{
    width: 1.44rem;
    height: 1.44rem;
}
.shop-other{
    margin-left: .24rem;
}
.shop-title{
    height: .68rem;
    width: 4.68rem;
    margin: .16rem auto 0;
    font-size: .52rem;
    line-height: .64rem;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.dp-infor{
    position: relative;
    margin: .1rem 0 0 0;
    height: .36rem;
    line-height: .68rem;
}
.dp-star-gray{
    position: absolute;
    top: 0;
    left: 0;
    width: 2.08rem;
    height: .36rem;
}
.star-logo{
    display: block;
    width: 2.08rem;
    height: .36rem;
    max-width: 2.08rem;
}
.dp-star-blin{
    width: 2.04rem;
    position: absolute;
    top: 0;
    left: 0;
    height: .36rem;
    overflow: hidden;
}
.line{
    margin: .36rem auto 0;
    width: 6.36rem;
    height: 1px;
    background: rgba(0,0,0,0.1);
}
.pd-enter{
    width: 5.96rem;
    height: .84rem;
    margin: .36rem auto 0;
    margin-top: .22rem;
}
.pd-logo{
    float: left;
    width: .84rem;
    height: .84rem;
}
.pd-name{
    float: left;
    height: .84rem;
    line-height: .84rem;
    font-size: .48rem;
    color: #666;
    margin-left: .24rem;
}
.arrow-right{
    float: right;
    width: .2rem;
    height: .36rem;
    margin-top: .24rem;
    background-image: url(../../assets/home/icon/youjiantou.png);
    background-size: .2rem .36rem;
}
</style>