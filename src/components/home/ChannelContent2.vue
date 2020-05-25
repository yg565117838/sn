<template>
    <div class="content">
        <div class="title">
            <p>{{item.title}}</p>
        </div>
        <p class="desc">{{item.desc}}</p>
        <div class="main">
            <div class="left" @click="notFound">
                <img :src="item.src1" alt="">
                <p>{{item.text1}}</p>
            </div>
            <div class="right" @click="notFound">
                <img :src="item.src2" alt="">
                <p>{{item.text2}}</p>
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
    margin-top: .1rem;
    padding-left: .56rem;
    display: flex;
}
.left{
    width: 2.4rem;
    margin-right: 1.1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.left img{
    width: 2.4rem;
    height: 2.4rem;
}
.main p{
    width: 3rem;
    height: 1.08rem;
    padding-top: .44rem;
    line-height: .64rem;
    overflow: hidden;
    font-size: .4rem;
    text-align: center;
    margin-top: -.44rem;
    background-image: url(../../assets/home/backgroud/9.png);
    background-size: 3rem 1.08rem;
}
.right{
    width: 2.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.right img{
    width: 2.4rem;
    height: 2.4rem;
}
</style>