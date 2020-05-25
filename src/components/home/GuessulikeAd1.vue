<template>
    <div class="ad"  :style='{"background-image":"url("+item.bgimg+")"}' @click="notFound">
        <div class="content">
            <img :src="item.src" alt="">
        </div>
        <p class="title">{{item.title}}</p>
        <p class="desc">{{item.desc}}</p>
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
    height: 10.84rem;
    padding: 0 0 .28rem 0;
    position: relative;
    box-sizing: border-box;
    width: 6.84rem;
    overflow: hidden;
    border-radius: .24rem;
    margin-bottom: .36rem;
    background-color: #FFF;
    background-size: 6.84rem 10.84rem;
}
.content{
    width: 5.92rem;
    height: 5.92rem;
    margin: .38rem auto 0;
}
.content img{
    width: 5.92rem;
    height: 5.92rem;
}
.title{
    width: 5.96rem;
    height: .68rem;
    line-height: .68rem;
    font-size: .52rem;
    margin: 1.56rem auto 0;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.desc{
    width: 5.96rem;
    height: .68rem;
    line-height: .68rem;
    font-size: .48rem;
    margin: 0 auto;
    color: #ff7b00;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>