<template>
    <div>
        <h1>注册</h1>
        <div>
            用户名：
            <input type="text" v-model="username">
        </div>
        <div>
            密码：
            <input type="password" v-model="pwd">
        </div>
        <div>
            手机：
            <input type="tel" v-model="tel">
        </div>
        <div>
            <button @click="reg">注册</button>
        </div>
    </div>
</template>
<script>
export default {
    name:'reg',
    data(){
        return {
            username:'',
            pwd:'',
            tel:''
        }
    },
    methods:{
        reg(){
            this.axios.post('api/reg',{
                params:{
                    uname:this.username,
                    pwd:this.pwd,
                    tel:this.tel
                }
            }).then((res)=>{
                if(res.data == 'success'){
                    this.$router.push('/regdo')
                }else{
                    alert(res.data)
                }
            })
        }
    }
}
</script>
<style scoped>

</style>