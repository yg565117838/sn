<template>
    <div class="enter-list">
        <div class="content" v-for="(item,index) in channel" :key="index" @click="notFound">
            <img :src="item.src" alt="">
            <span>{{item.text}}</span>
        </div>
    </div>
</template>
<script>
import {channel} from '../../data/home/channel.js';
export default {
    data(){
        return {
            channel
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
.enter-list{
    display: flex;
    flex-wrap: wrap;
}
.content{
    width: 3rem;
    height: 2.84rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
}
img{
    width: 1.68rem;
    height: 1.68rem;
}
span{
    font-size: .44rem;
    color: #666;
    margin-top: .1rem;
}
</style>