<template>
    <div>
        <p>没有数据，危险地带请立刻返回</p>
        <button @click="back">返回</button>
    </div>
</template>
<script>
export default {
    methods:{
        back(){
            window.history.go(-1);
        }
    }
}
</script>
