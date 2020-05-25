<template>
    <div class="classification">
        <div class="header">
            <p class="header-title">商品分类</p>
            <div class="header-search" @click="searchClick">
                <div class="search">
                    <img src="../assets/classification/1.png" alt="">
                    <input type="text" :placeholder="placeholder">
                </div>
            </div>
        </div>
        <div class="body">
            <ul class="left">
                <li v-for="(item,index) in navList" :key="index" :class="{'li-active':productIndex==index}" @click="leftClick(index,item.id)">
                    <span :class="{'span-active':productIndex==index}">{{item.c1name}}</span>
                </li>
            </ul>
            <component :is="componentName" class="right" :item='class23'></component>
        </div>
        <div class="footer">
            <router-link to="/" class="go">
                <img src="../assets/home/icon/15.png" alt="">
                <span>首页</span>
            </router-link>
            <router-link to="/classification" class="go">
                <img src="../assets/home/icon/11.png" alt="">
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
import Appliances from '../components/classification/Appliances.vue';
import Qt from '../components/classification/Qt.vue';
import {productName} from '../data/classification/productName.js';
export default {
    components:{
        'big-appliances':Appliances,
        'qt':Qt
    },
    data(){
        return {
            productName,
            productIndex:0,
            componentName:'qt',
            navList:[],
            class23:[]
        }
    },
    computed:{
        placeholder(){
            return this.$store.state.searchPlaceholder;
        }
    },
    methods:{
        searchClick(){
            this.$router.push('search');
        },
        leftClick(index,id){
            this.productIndex = index;
            if(index == 2){
                this.componentName = 'big-appliances';
            }else{
                this.componentName = 'qt';
            };
            if(id){
                this.axios.get('api/getclass23?id='+id).then((response)=>{
                    this.class23 = response.data
                })
            }
        }
    },
    mounted(){
        this.axios.get('api/getclass').then((response)=>{
            this.navList = response.data
            // let fid = response.data[0].id
            // console.log(fid)
            // if(fid){
            //     this.axios.get('api/getclass23?id='+fid).then((response)=>{
            //         this.class23 = response.data
            //                             console.log(response.data)

            //     })
            // }
        })
    }
}
</script>
<style scoped>
.classification{
    height: 100%;
}
.header{
    width: 15rem;
    height: 2.16rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
}
.header-title{
    width: 3.6rem;
    height: 100%;
    font-size: .72rem;
    line-height: 2.16rem;
    text-align: center;
}
.header-search{
    width: 11.4rem;
    height: 2.16rem;
    display: flex;
    align-items: center;
}
.search{
    width: 10.44rem;
    height: 1.28rem;
    border-radius: 0.64rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    background: #f7f7f7;
}
.search img{
    width: .8rem;
    height: .8rem;
    margin-left: .4rem;
}
.search input{
    margin: 0 .2rem;
    outline: none;
    border: none;
    flex-grow: 1;
    font-size: .56rem;
    color: #999;
    background: #f7f7f7;
}


.body{
    padding: 2.16rem 0 2rem;
    display: flex;
    height: 100%;
}
.left{
    background: #f9f9f9;
    width: 3.6rem;
    height: 100%;
    overflow: auto;
}
ul{
    list-style: none;
}
.left li{
    height: 2rem;
    position: relative;
}
.li-active{
    background: #fff;
}
.li-active::before{
    content: '';
    position: absolute;
    top: -.48rem;
    right: 0;
    width: .48rem;
    height: .48rem;
    background:url(../assets/classification/2.png) no-repeat;
    background-size: 100% 100%;
}
.li-active::after{
    content: '';
    position: absolute;
    bottom: -.48rem;
    right: 0;
    width: .48rem;
    height: .48rem;
    background:url(../assets/classification/3.png) no-repeat;
    background-size: 100% 100%;
}
.left li span{
    display: block;
    color: #666;
    padding: 0 .5rem;
    font-size: .56rem;
    line-height: 2rem;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.left li .span-active{
    color: #222;
    font-weight: bold;
}
.span-active::before{
    content: '';
    position: absolute;
    left: .24rem;
    top: .82rem;
    width: .16rem;
    height: .36rem;
    border-radius: .16rem;
    background: #fc0;
}
.right{
    width: 11.4rem;
    height: 100%;
    overflow: auto;
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

</style>