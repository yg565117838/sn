<template>
    <div class="channerl-warp">
        <channel-content1 :item='seckill'></channel-content1>
        <div class="hor-gap"></div>
        <channel-content2 :item='twoItem'></channel-content2>
    </div>
</template>
<script>
import ChannelContent1 from './ChannelContent1.vue';
import ChannelContent2 from './ChannelContent2.vue';
import {channelWarp} from '../../data/home/channelWarp.js';
export default {
    components:{
        'channel-content1':ChannelContent1,
        'channel-content2':ChannelContent2
    },
    computed:{
        seckill(){
            return channelWarp[0];
        },
        twoItem(){
             return channelWarp[1];
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