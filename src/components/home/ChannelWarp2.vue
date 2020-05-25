<template>
    <div class="channerl-warp">
        <channel-content2 :item="threeItem"></channel-content2>
        <div class="hor-gap"></div>
        <channel-content2 :item="fourItem"></channel-content2>
    </div>
</template>
<script>
import ChannelContent2 from './ChannelContent2.vue';
import {channelWarp} from '../../data/home/channelWarp.js';
export default {
    components:{
        'channel-content2':ChannelContent2
    },
    computed:{
        threeItem(){
            return channelWarp[2];
        },
        fourItem(){
            return channelWarp[3];
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