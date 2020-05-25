<template>
    <div class="title-four ">
        <div class="left-title">
            <p class="title">为您推荐</p>
            <p class="desc">精选频道</p>
        </div>
        <div class="four-space">
            <div class="four-item" v-for="(item,index) in forYou" :key="index" @click="notFound">
                <div>
                    <img :src="item.src" alt="">
                </div>
                <p>{{item.text}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import {forYou} from '../../data/home/forYou.js';
export default {
    data(){
        return {
            forYou
        }
    },
    methods:{
        notFound(){
            this.$router.push('404');
        }
    }
}
</script>
<style scoped>
.title-four {
    display: flex;
    width: 14.04rem;
    height: 3.44rem;
    background: #FFF;
    overflow: hidden;
    margin: 0 auto;
}
.left-title {
    box-sizing: border-box;
    width: 3.46rem;
    height: 3.44rem;
    padding: .94rem .36rem 0 .36rem;
}
.title{
    width: 2.74rem;
    height: .9rem;
    line-height: .9rem;
    font-size: .64rem;
    color: #444;
    font-weight: bold;
}
.desc{
    width: 2.74rem;
    height: .64rem;
    line-height: .64rem;
    font-size: .48rem;
    color: #999;
}
.four-space {
    display: flex;
    width: 10.16rem;
    height: 3.44rem;
    justify-content: space-between;
}
.four-item{
    width: 2.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.four-item div{
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.four-item img{
    width: 100%;
    max-height: 100%;
}
.four-item p{
    width: 2.4rem;
    font-size: .44rem;
    text-align: center;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>