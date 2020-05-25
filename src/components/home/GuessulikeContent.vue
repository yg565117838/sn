<template>
    <div class="guessulike-content" @click="myClick">
        <div class="content-image">
            <img :data-src="item.src" alt="" class="lazy-img" src=''>
        </div>
        <p class="content-title">{{item.title}}</p>
        <p class="content-tag">
            <span class="tag-zy" v-show="item.zy!=''">{{item.zy}}</span>
            <span class="tar-qt" v-show="item.qt!=''">{{item.qt}}</span>
            <span class="tag-text" v-for="(item2,index) in item.text" :key="index">{{item2}}</span>
        </p>
        <div class="content-price">
            <div class="real-price">
                <span class="flag">￥</span>
                <span class="price">{{item.price1}}</span>
                <span class="price2">{{item.price2}}</span>
                <span class="evaluate">{{item.evaluate}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['item'],
    methods:{
        myClick(){
            this.$router.push({
                path:'/details',
                query:{
                    title:this.item.title,
                    price1:this.item.price1,
                    price2:this.item.price2,
                    spece:this.item.spece,
                    name:this.item.qt,
                    img:this.item.src
                }
            })
        }
    }
}
</script>
<style scoped>
.guessulike-content{
    position: relative;
    box-sizing: border-box;
    width: 6.84rem;
    overflow: hidden;
    border-radius: .24rem;
    margin-bottom: .36rem;
    background-color: #FFF;
    height: 10.84rem;
    padding: 0 0 .28rem 0;
}
.content-image{
    position: relative;
    width: 6.84rem;
    height: 6.84rem;
}
.content-image img{
    width: 6.84rem;
    height: 6.84rem;
    border-radius: .24rem .24rem 0 0;
}
.content-title{
    margin: .36rem auto 0;
    width: 6.36rem;
    height: 1.34rem;
    font-size: .52rem;
    line-height: .68rem;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
}
.content-tag{
    display: flex;
    width: 5.38rem;
    margin: .22rem .24rem .48rem;
    height: .48rem;
    overflow: hidden;
    flex-wrap: wrap;
}
.tag-zy{
    display: block;
    margin-right: .12rem;
    height: .36rem;
    line-height: .36rem;
    font-size: .36rem;
    text-align: center;
    padding: .06rem .12rem;
    margin-bottom: .04rem;
    border-radius: .12rem;
    box-sizing: content-box;
    background: #fc0;
}
.tar-qt{
    display: block;
    margin-right: .12rem;
    height: .36rem;
    line-height: .36rem;
    font-size: .36rem;
    text-align: center;
    padding: .06rem .12rem;
    margin-bottom: .04rem;
    border-radius: .12rem;
    box-sizing: content-box;
    background: #7a51fa;
    color: #fff;
}
.tag-text{
    margin: 0 .06rem .04rem .04rem;
    border-radius: .12rem;
    height: .48rem;
    padding: .04rem .24rem;
    line-height: .4rem;
    font-size: .36rem;
    box-sizing: border-box;
    border: 1px solid #fb0;
    background: #fefbee;
}
.content-price{
    height: .76rem;
    margin-left: .24rem;
    line-height: .76rem;
}
.real-price{
    display: flex;
    height: .76rem;
    font-size: .48rem;
    color: #f42;
    font-weight: bold;
    align-items: flex-end;
}
.flag{
    line-height: .56rem;
}
.price{
    font-size: .72rem;
    line-height: .72rem;
}
.price2{
    line-height: .56rem;
}
.evaluate{
    color: #999;
    margin-left: .26rem;
    font-weight: normal;
    font-size: .4rem;
}
</style>