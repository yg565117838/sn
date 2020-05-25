<template>
    <div class="channerl-warp">
        <channel-content3 :item='one'></channel-content3>
        <div class="hor-gap"></div>
        <channel-content3 :item='two'></channel-content3>
    </div>
</template>
<script>
import ChannelContent3 from './ChannelContent3.vue';
export default {
    components:{
        'channel-content3':ChannelContent3
    },
    props:['item'],
    computed:{
        one(){
            return this.item[0];
        },
        two(){
            return this.item[1];
        }
    }
}
</script>
<style scoped>
.channerl-warp{
    width: 14.04rem;
    height: 5.16rem;
    margin: 0 auto;
    overflow: hidden;
    background: #fff;
    display: flex;
}
.hor-gap{
    width: 1px;
    height: 100%;
    background: #f2f2f2;
}
</style>