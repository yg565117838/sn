<template>
    <div class="appliances">
        <div class="fixed-box">
            <ul class="box-ul">
                <li v-for="(item,index) in item" :key="'title'+index" :class="{'box-li-active':titleIndex == index}" @click="titleClick(index)" class="box-li">{{item.class2Title}}</li>
            </ul>
        </div>
        <appliances-body v-for="(item,index) in item" :key="'list'+index" :item='item' class="appliances-body"></appliances-body>
        <div class="channel-btn">
            <a href="http://c.m.suning.com/jd_index.html?safp=f73ee1cf.20291.snListcon.206&safc=0.3.wapfly_none_gg_one-gg3">进入家电频道</a>
        </div>
    </div>
</template>
<script>
import AppliancesBody from './AppliancesBody.vue';
import {appliancesList} from '../../data/classification/appliancesList.js';
export default {
    props:['item'],
    components:{
        'appliances-body':AppliancesBody
    },
    data(){
        return {
            appliancesList,
            titleIndex:0,
        }
    },
    methods:{
        titleClick(index){
            let that =this;
            this.titleIndex = index;
            let bds = document.querySelectorAll('.appliances-body');
            let h = 0;
            for(let i=0;i<index;i++){
                h += bds[i].getBoundingClientRect().height;
            };
            let appliances = document.querySelector('.appliances');
            appliances.scrollTop = h;
            setTimeout(function(){
                if(index == bds.length-1){
                    that.titleIndex = index;
                }
            },0);
            let lis = document.querySelectorAll('.box-li');
            let ul = document.querySelector('.box-ul');
            let ulW = ul.getBoundingClientRect().width;
            let left = ul.scrollLeft;
            let w = 0;
            for(let i=0;i<=index;i++){
                w += lis[i].getBoundingClientRect().width+30;
            };
            let liLeft = 0;
            for(let i=0;i<index;i++){
                liLeft += lis[i].getBoundingClientRect().width+30;
            };
            if(w > (ulW + left-50)){
                ul.scrollLeft += 50;
            } else if(liLeft < ulW+left){
                ul.scrollLeft -= 50;
            };
        }
    },
    mounted(){
        let that = this;
        let appliances = document.querySelector('.appliances');
        let timer = null;
        appliances.onscroll = function(){
            let index = that.titleIndex;
            let bds = document.querySelectorAll('.appliances-body');
            let h1 = 0;
            for(let i=0;i<index;i++){
                h1 += bds[i].getBoundingClientRect().height;
            };
            let h2 = 0;
            for(let i=0;i<=index;i++){
                h2 += bds[i].getBoundingClientRect().height;
            };
            if (appliances.scrollTop < h1) {
                that.titleIndex--;
            } else if(appliances.scrollTop >h2){
                that.titleIndex++;
            };
            if(timer){
                clearTimeout(timer);
                timer = null;
            };
            if(!timer){
                timer = setTimeout(function(){
                    let lis = document.querySelectorAll('.box-li');
                    let ul = document.querySelector('.box-ul');
                    let ulW = ul.getBoundingClientRect().width;
                    let left = ul.scrollLeft;
                    let w = 0;
                    for(let i=0;i<=that.titleIndex;i++){
                        w += lis[i].getBoundingClientRect().width+30;
                    };
                    let liLeft = 0;
                    for(let i=0;i<that.titleIndex;i++){
                        liLeft += lis[i].getBoundingClientRect().width+30;
                    };
                    if(w > (ulW + left - 50)){
                        ul.scrollLeft += 50;
                    } else if(liLeft < ulW+left){
                        ul.scrollLeft -= 50;
                    };
                },60)
            };
        }
    }
}
</script>
<style scoped>
.appliances{
    padding: 0 .6rem;
    padding-top: 1.52rem;
}
.fixed-box{
    position: fixed;
    top: 2.16rem;
    left: 3.6rem;
    background: #fff;
    z-index: 100;
}
.fixed-box ul{
    white-space: nowrap;
    overflow-y: auto;
    width: 10.2rem;
    background: #fff;
    margin: 0 .6rem;
    list-style: none;
}
.fixed-box li{
    display: inline-block;
    margin-right: .84rem;
    padding: .6rem 0 .44rem;
    color: #666;
    font-size: .48rem;
    line-height: .48rem;
}
.fixed-box ul li:last-child{
    margin-right: 0;
}
.fixed-box .box-li-active{
    color: #222;
    font-weight: bold;
    position: relative;
}
.box-li-active::before{
    content: '';
    position: absolute;
    bottom: .08rem;
    left: calc(50% - .18rem);
    width: .36rem;
    height: .12rem;
    border-radius: .06rem;
    background: #fc0;
}
.channel-btn{
    margin: .76rem 0 1.56rem;
}
.channel-btn a{
    display: block;
    width: 10.24rem;
    height: 1.32rem;
    border-radius: .24rem;
    border: 1px solid #ddd;
    font-size: .56rem;
    color: #222;
    line-height: 1.32rem;
    text-align: center;
    text-decoration: none;
}
</style>