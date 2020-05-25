<template>
    <div class="appliances-body">
        <div class="tips">
            <span class="tips-name">{{item.class2Title}}</span>
        </div>
        <div class="appliances-list">
            <div class="content" v-for="(item,index) in item.class3" :key="index" @click="notFound(item.id)">
                <img :src="item.poster" alt="">
                <p>{{item.c3name}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['item'],
    methods:{
        notFound(id){
            this.$router.push({
                path:'/product',
                query:{
                    id
                }
            });
        }
    }
}
</script>
<style scoped>
.tips{
    padding: .6rem 0;
    font-size: .48rem;
    line-height: .48rem;
}
.tips-name{
    color: #000;
    font-weight: bold;
}
.appliances-list{
    display: flex;
    flex-wrap: wrap;
}
.content{
    width: 2.52rem;
    margin: 0 1.32rem .6rem 0;
}
.content:nth-child(3n){
    margin-right: 0;
}
.content img{
    width: 2.52rem;
    height: 2.52rem;
}
.content p{
    font-size: .48rem;
    line-height: .48rem;
    color: #666;
    text-align: center;
    padding: .12rem 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>