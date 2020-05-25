<template>
    <div class="content">
        <div class="title">
            <p>{{item.title}}</p>
            <span>{{item.name}}</span>
        </div>
        <p class="desc">{{item.desc}}</p>
        <div class="main">
            <div class="left" @click="notFound">
                <img :src="item.src1" alt="">
            </div>
            <div class="right" @click="notFound">
                <img :src="item.src2" alt="">
            </div>
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
.content{
    width: 7rem;
    height: 5.16rem;
}
.title{
    height: 1.16rem;
    display: flex;
    padding: .36rem 0 0 .48rem;
    align-items: center;
}
.title p{
    font-weight: 700;
    font-size: .56rem;
    margin-right: .16rem;
}
.title span{
    display: block;
    background: #f9f5ee;
    border-radius: .56rem;
    height: .56rem;
    line-height: .56rem;
    font-size: .44rem;
    color: #ab813a;
    padding: 0 .24rem;
}
.count{
    font-size: .56rem;
    color: #333;
    display: flex;
    align-items: center;
}
.count span:nth-child(2n+1){
    display: block;
    background: #fc0;
    font-size: .4rem;
    margin: 0 .05rem;
    width: .68rem;
    height: .56rem;
    line-height: .56rem;
    text-align: center;
    border-radius: .18rem;
    font-weight: bold;
}
.desc{
    font-size: .48rem;
    color: #999;
    overflow: hidden;
    margin: .08rem 0 0 .48rem;
    width: 6rem;
    height: .6rem;
    line-height: .6rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: .08rem;
}
.main{
    margin-top: .3rem;
    padding-left: .56rem;
    display: flex;
}
.left{
    width: 2.8rem;
    margin-right: .3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.left img{
    width: 2.8rem;
    height: 2.8rem;
}
.right{
    width: 2.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.right img{
    width: 2.8rem;
    height: 2.8rem;
}
</style>