<template>
    <div>
        <div v-for="(item,index) in product" :key="index" :item='item' @click="myClick(item.id)">
            <img :src="item.poster" alt="">
            <div>{{item.title}}</div>
            <div>价格：{{item.price}}</div>
            <div>{{item.comment}}</div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        myClick(id){
            if(id){
                this.axios.get('api/productlist?id='+id).then((response)=>{
                    let res = response.data[0]
                    this.$router.push({
                        path:'/details',
                        query:{
                            title:res.title,
                            price1:res.price,
                            price2:res.price,
                            spece:res.comment,
                            name:res.title,
                            img:res.poster,
                            id:res.id
                        }
                    })
                })
            }
        }
    },
    mounted(){
        let id = this.$route.query.id
        if(id){
            this.axios.get('api/product?id='+id).then((response)=>{
                this.product = response.data
            })
        }
    },
    data(){
        return {
            product:[]
        }
    }
}
</script>
<style scoped>
img{
    width: 14rem;
}
</style>