<template>
    <div>
        登录进来了
    </div>
</template>
<script>
export default {
    created(){
        console.log(2323323)
        this.axios.get('api/check').then((res)=>{
            console.log(res.data)
            if(res.data.code == 0 ){
                this.$router.push('/regdo')
            }else{
                console.log('验证通过')
            }
        })
    }
}
</script>
<style scoped>

</style>