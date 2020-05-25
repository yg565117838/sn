<template>
    <div>
        <h1>登录</h1>
        <div>
            用户名：
            <input type="text" v-model="username">
        </div>
        <div>
            密码：
            <input type="password" v-model="pwd">
        </div>
        <div>
            <button @click="denglu">登录</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            username:'',
            pwd:'',
        }
    },
    methods:{
        denglu(){
            this.axios.post('api/checklogin',{
                params:{
                    u:this.username,
                    p:this.pwd
                }
            }).then((res)=>{
                if(res.data.status == 200){
                    this.$store.state.token = res.data.tk

                    this.$router.push('/my')
                }else{
                    alert('登录失败')
                }
            })
        }
    }
}
</script>
<style scoped>

</style>