<template>
    <div class="home">
        <div>
            {{title}}
        </div>
        <div class="nav">
            <div class="nav-icon">
                <img src="../assets/home/icon/1.png" alt="" @click="navLeft">
                <img src="../assets/home/icon/2.png" alt="" @click="navRight">
            </div>
            <div class="nav-search" @click="searchClick">
                <div class="nav-search-content">
                    <img src="../assets/home/icon/3.png" alt="">
                    <input type="text" :placeholder="placeholder">
                </div>
            </div>
        </div>
        <div class="banner1">
            <my-swiper1></my-swiper1>
        </div>
        <enter-list class="enter-list"></enter-list>
        <div class="new-img">
            <img src="../assets/home/new/1.png" alt="" @click="notFound">
            <img src="../assets/home/new/2.png" alt="" @click="notFound">
            <img src="../assets/home/new/3.png" alt="" @click="notFound">
        </div>
        <div class="big-blank"></div>
        <channel-warp1></channel-warp1>
        <div class="space-px"></div>
        <channel-warp2></channel-warp2>
        <div class="space-px"></div>
        <for-you></for-you>
        <div class="new-bd">
            <div class="title-image">
                <img src="../assets/home/like/2.png" alt="">
            </div>
            <div class="newbd-list">
                <div class="bd-three">
                    <newbd-one :item='newbdLeft'></newbd-one>
                    <div class="banner2">
                        <my-swiper2></my-swiper2>
                    </div>
                    <newbd-one :item='newbdRight'></newbd-one>
                </div>
                <div class="bd-two">
                    <channel-warp3 :item='newbdTop'></channel-warp3>
                    <div class="space-px"></div>
                    <channel-warp3 :item='newbdDown'></channel-warp3>
                </div>
            </div>
        </div>
        <div class="big-blank"></div>
        <div class="guessulike" v-show="seenLike">
            <div class="guessulike-title">
                <img src="../assets/home/like/1.webp" alt="">
            </div>
            <div class="guessulike-list">
                <div class="guessulike-list-left">
                    <guessulike-content v-for='(item,index) in likeListLeft1' :key="'likeListLeft1'+index" :item='item'></guessulike-content>
                    <guessulike-ad1 :item='ad11'></guessulike-ad1>
                    <guessulike-content v-for='(item,index) in likeListLeft2' :key="'likeListLeft2'+index" :item='item'></guessulike-content>
                    <guessulike-ad2 :item='ad21'></guessulike-ad2>
                    <guessulike-content v-for='(item,index) in likeListLeft3' :key="'likeListLeft3'+index" :item='item'></guessulike-content>
                    <guessulike-ad1 :item='ad12'></guessulike-ad1>
                    <guessulike-content v-for='(item,index) in likeListLeft4' :key="'likeListLeft4'+index" :item='item'></guessulike-content>
                    <guessulike-ad1 :item='ad13'></guessulike-ad1>
                    <guessulike-content v-for='(item,index) in likeListLeft5' :key="'likeListLeft5'+index" :item='item'></guessulike-content>
                </div>
                <div class="guessulike-list-right">
                    <guessulike-content v-for='(item,index) in likeListRight1' :key="'likeListRight1'+index" :item='item'></guessulike-content>
                    <guessulike-ad1 :item='ad14'></guessulike-ad1>
                    <guessulike-content v-for='(item,index) in likeListRight2' :key="'likeListRight2'+index" :item='item'></guessulike-content>
                    <guessulike-ad1 :item='ad15'></guessulike-ad1>
                    <guessulike-content v-for='(item,index) in likeListRight3' :key="'likeListRight3'+index" :item='item'></guessulike-content>
                    <guessulike-ad1 :item='ad16'></guessulike-ad1>
                    <guessulike-content v-for='(item,index) in likeListRight4' :key="'likeListRight4'+index" :item='item'></guessulike-content>
                    <guessulike-ad1 :item='ad17'></guessulike-ad1>
                    <guessulike-content v-for='(item,index) in likeListRight5' :key="'likeListRight5'+index" :item='item'></guessulike-content>

                </div>
            </div>
            <div class="guessulikeLoad"></div>
            <img src="../assets/home/backgroud/5.png" alt="" class="sn-logo">
        </div>

        <div class="fixed-nav" v-show="seenSearch">
            <img src="../assets/home/icon/1.png" alt="" class="fixed-nav-icon" @click="navLeft">
            <div class="fixed-nav-search" @click="searchClick">
                <img src="../assets/home/icon/3.png" alt="">
                <input type="text" :placeholder="placeholder">
            </div>
            <img src="../assets/home/icon/2.png" alt="" class="fixed-nav-icon" @click="navRight">
        </div>

        <div class="sign" @click="navSign" v-show="seenSign">
            <img src="../assets/home/backgroud/8.png" alt="">
        </div>

        <div class="back-icon" v-show="seenBack" @click="backTopClick"></div>

        <div class="footer">
            <router-link to="/" class="go">
                <template v-if="seenIcon">
                    <img src="../assets/home/icon/5.png" alt="">
                    <span>猜你喜欢</span>
                </template>
                <template v-else>
                    <img src="../assets/home/icon/6.png" alt="">
                    <span>首页</span>
                </template>
            </router-link>
            <router-link to="/classification" class="go">
                <img src="../assets/home/icon/7.png" alt="">
                <span>分类</span>
            </router-link>
            <router-link to="/mustgrablist" class="go">
                <img src="../assets/home/icon/8.png" alt="">
                <span>必抢清单</span>
            </router-link>
            <router-link to="/shoppingcart" class="go">
                <img src="../assets/home/icon/9.png" alt="">
                <span>购物车</span>
            </router-link>
            <router-link to="/myebay" class="go">
                <img src="../assets/home/icon/10.png" alt="">
                <span>我的易购</span>
            </router-link>
        </div>
    </div>
</template>
<script>
import Banner1 from '../components/home/Banner1.vue';
import Banner2 from '../components/home/Banner2.vue';
import EnterList from '../components/home/EnterList.vue';
import ChannelWarp1 from '../components/home/ChannelWarp1.vue';
import ChannelWarp2 from '../components/home/ChannelWarp2.vue';
import ChannelWarp3 from '../components/home/ChannelWarp3.vue';
import ForYou from '../components/home/ForYou.vue';
import NewbdOne from '../components/home/NewbdOne.vue';
import GuessulikeContent from '../components/home/GuessulikeContent.vue';
import GuessulikeAd1 from '../components/home/GuessulikeAd1.vue';
import GuessulikeAd2 from '../components/home/GuessulikeAd2.vue';
import {newbd} from '../data/home/newbd.js';
import {newbd2} from '../data/home/newbd2.js';
import {likeListLeft} from '../data/home/likeListLeft.js';
import {likeListRight} from '../data/home/likeListRight.js';
import {ad1} from '../data/home/ad1.js';
import {ad2} from '../data/home/ad2.js';

import io from 'socket.io-client'
export default {
    components:{
        'my-swiper1':Banner1,
        'my-swiper2':Banner2,
        'enter-list':EnterList,
        'channel-warp1':ChannelWarp1,
        'channel-warp2':ChannelWarp2,
        'channel-warp3':ChannelWarp3,
        'for-you':ForYou,
        'newbd-one':NewbdOne,
        'guessulike-content':GuessulikeContent,
        'guessulike-ad1':GuessulikeAd1,
        'guessulike-ad2':GuessulikeAd2
    },
    computed:{
        newbdLeft(){
            return newbd[0];
        },
        newbdRight(){
            return newbd[1];
        },
        newbdTop(){
            return  newbd2.slice(0,2);
        },
        newbdDown(){
            return  newbd2.slice(2);
        },
        likeListLeft1(){
            return  likeListLeft.slice(0,2);
        },
        likeListLeft2(){
            return  likeListLeft.slice(2,9);
        },
        likeListLeft3(){
            return  likeListLeft.slice(9,15);
        },
        likeListLeft4(){
            return  likeListLeft.slice(15,19);
        },
        likeListLeft5(){
            return  likeListLeft.slice(19);
        },
        likeListRight1(){
            return  likeListRight.slice(0,5);
        },
        likeListRight2(){
            return  likeListRight.slice(5,7);
        },
        likeListRight3(){
            return  likeListRight.slice(7,15);
        },
        likeListRight4(){
            return  likeListRight.slice(15,23);
        },
        likeListRight5(){
            return  likeListRight.slice(23);
        },
        ad11(){
            return ad1[0];
        },
        ad12(){
            return ad1[1];
        },
        ad13(){
            return ad1[2];
        },
        ad14(){
            return ad1[3];
        },
        ad15(){
            return ad1[4];
        },
        ad16(){
            return ad1[5];
        },
        ad17(){
            return ad1[6];
        },
        ad21(){
            return ad2[0];
        },
        placeholder(){
            return this.$store.state.searchPlaceholder;
        },
        seenSigns(){
            return this.$store.state.seen;
        }
    },
    created(){
        if(localStorage.getItem('seen') == 'false'){
            this.seenSign = false;
        }
    },
    watch:{
        seenSigns(newVal,oldVal){
            this.seenSign = newVal;
        }
    },
    methods:{
        searchClick(){
            this.$router.push('search');
        },
        navSign(){
            this.$router.push("login");
        },
        navLeft(){
            this.$router.push('classification');
        },
        navRight(){
            this.$router.push('myebay');
        },
        notFound(){
            this.$router.push('404');
        },
        backTopClick(){
            window.scrollTo(0,0);
        }
    },
    data(){
        return {
            seenSearch:false,
            seenBack:false,
            seenIcon:true,
            seenLike:false,
            seenSign:true,
            title:""
        }
    },
    mounted(){
        let that = this;
        let height = document.body.clientHeight;
        let likes = document.querySelectorAll('.guessulike-content');
        let lazy = document.querySelectorAll('.lazy-img');
        let sTop = window.scrollY;
        if(sTop > 500){
            that.seenLike = true;
        };
        if(sTop > 800){
            that.seenSearch = true;
        }else{
            that.seenSearch = false;
        };
        if(sTop > 1000){
            that.seenBack = true;
            that.seenIcon = false;
        }else{
            that.seenBack = false;
            that.seenIcon = true;
        };
        window.onscroll = function(){
            sTop = window.scrollY;
            if(sTop > 500){
                that.seenLike = true;
            };
            if(sTop > 800){
                that.seenSearch = true;
            }else{
                that.seenSearch = false;
            };
            if(sTop > 1000){
                that.seenBack = true;
                that.seenIcon = false;
            }else{
                that.seenBack = false;
                that.seenIcon = true;
            };
            //懒加载
            if(that.seenLike){
                for(let i=0;i<likes.length;i++){
                    if(lazy[i].src != lazy[i].dataset.src){
                        setTimeout(function(){
                            if(likes[i].getBoundingClientRect().y < height){
                                lazy[i].src = lazy[i].dataset.src;
                            }
                        },10)
                    }
                }
            }
        };


        let socket = io.connect('http://localhost:3030',{
            //断开自动重连
            'force new connection':true
        })
        socket.on('message',(msg)=>{
            console.log('已连接',msg)
            this.title = msg
        })
        socket.emit('message','前端消息')
    }
}
</script>
<style scoped>
.home{
    background: rgb(244, 244, 244);
    padding-bottom: 2rem;
}
.nav{
    height: 3.52rem;
    background-image: url(../assets/home/backgroud/1.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 0 .68rem;
}
.nav-icon{
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav-icon img{
    width: .72rem;
    height: 1.2rem;
}
.nav-search{
    height: 50%;
    padding: .2rem 0;
}
.nav-search-content{
    height: 100%;
    background: #fff;
    border-radius: .65rem;
    display: flex;
    align-items: center;
}
.nav-search-content img{
    width: .72rem;
    height: .72rem;
    margin-left: .4rem;
    margin-right: .2rem;
    flex-shrink: 0;
}
.nav-search-content input{
    flex-grow: 1;
    margin-right: .4rem;
    font-size: .56rem;
    color: #999;
    outline: none;
    border: none;
}
.banner1{
    height: 5.2rem;
    background-image: url(../assets/home/backgroud/2.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 0 .68rem;
}
.enter-list{
    height: 6.4rem;
    padding-bottom: .68rem;
}
.new-img{
    height: 4.68rem;
    margin: .48rem 0 0;
    display: flex;
    justify-content: space-between;
}
.new-img img{
    height: 4.68rem;
    width: 3.74rem;
}
.new-img img:nth-child(1){
    width: 7.4rem;
}
.big-blank{
    height: .48rem;
}
.space-px{
    height: 1px;
    width: 100%;
    background: #f2f2f2;
}
.new-bd{
    padding-bottom: .26rem;
}
.title-image{
    width: 15rem;
    height: 1.2rem;
    margin: 0 auto;
}
.title-image img{
    width: 100%;
    height: 100%;
}
.bd-three{
    width: 14.04rem;
    margin: 0 auto .26rem;
    display: flex;
    justify-content: space-between;
}
.banner2{
    width: 4.52rem;
    height: 5.32rem;
    border-radius: .24rem;
    background: #FFF;
}
.bd-two{
    display: flex;
    width: 14.04rem;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: space-between;
    border-radius: .24rem;
    background: #FFF;
    overflow: hidden;
}
.guessulike{
    width: 15rem;
    margin: 0 auto;
}
.guessulike-title{
    display: block;
    width: 14.04rem;
    height: 1.2rem;
    margin: 0 auto;
}
.guessulike-title img{
    display: block;
    width: 14.04rem;
    height: 1.2rem;
    background: 0;
}
.guessulike-list{
    width: 14.04rem;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.guessulike-list-left{
    width: 6.84rem;
    display: flex;
    flex-direction: column;
}
.guessulike-list-right{
    width: 6.84rem;
    display: flex;
    flex-direction: column;
}
.guessulikeLoad{
    width: 100%;
    height: 1px;
}
.sn-logo{
    width: 15rem;
    height: 3.46rem;
    margin: 0 auto;
    background: #f7f7f7;
}
.fixed-nav{
    width: 15rem;
    padding: 0 .68rem;
    height: 1.76rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: url(../assets/home/backgroud/1.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
}
.fixed-nav-icon{
    width: .72rem;
    height: 1.2rem;
}
.fixed-nav-search{
    width: 10.44rem;
    height: 1.28rem;
    border-radius: .6rem;
    background: #fff;
    display: flex;
    align-items: center;
}
.fixed-nav-search img{
    width: .72rem;
    height: .72rem;
    margin-left: .4rem;
}
.fixed-nav-search input{
    margin: 0 .4rem 0 .2rem;
    outline: none;
    border: none;
    flex-grow: 1;
    font-size: .56rem;
    color: #999;
}
.sign{
    width: 15rem;
    height: 1.8rem;
    position: fixed;
    margin: 0 auto;
    bottom: 2rem;
    left: 0;
    right: 0;
    z-index: 9999;
}
.sign img{
    width: 15rem;
    height: 1.8rem;
}

.back-icon{
    position: fixed;
    width: 1.4rem;
    height: 1.4rem;
    bottom: 2.8rem;
    left: 13rem;
    border-radius: 1.6rem;
    background: #fff url(../assets/home/icon/4.png) center no-repeat;
    background-size: .8rem .8rem;
    z-index: 999999;
}

.footer{
    box-sizing: content-box;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    width: 100%;
    border-top: 1px solid #eee;
    background: #fff;
    margin: 0 auto;
    width: 15rem;
    height: 2rem;
    z-index: 9999;
}
.go{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    width: 0;
    text-decoration: none;
    align-items: center;
    justify-content: center;
}
.go img{
    width: .96rem;
    height: .96rem;
}
.go span{
    color: #666;
    font-size: .4rem;
}
.go:first-child span{
    color: #000;
    font-weight: bold;
}
</style>