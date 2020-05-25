<template>
    <div class="content">
        <div class="title">
            <p>{{item.title}}</p>
            <div class="count">
                <span>{{hour}}</span>
                <span>:</span>
                <span>{{minute}}</span>
                <span>:</span>
                <span>{{second}}</span>
            </div>
        </div>
        <p class="desc">{{item.desc}}</p>
        <div class="main">
            <div class="left" @click="notFound">
                <img :src="item.src1" alt="">
                <span>{{item.price1}}</span>
            </div>
            <div class="right" @click="notFound">
                <img :src="item.src2" alt="">
                <span>{{item.price2}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['item'],
    data(){
        return {
            hour:'00',
            minute:'00',
            second:'00'
        }
    },
    created(){
        let that = this;
        let date = new Date();
        let formDate = date.getTime();
        let toDate = date.getTime() + 3*60*60*1000;
        let time = toDate - formDate;
        this.hour = parseInt(time/1000/60/60);
        this.minute = parseInt(time/1000/60%60);
        this.second = parseInt(time/1000%60);
        if(this.hour<10){
            this.hour = '0'+this.hour;
        };
        if(this.minute<10){
            this.minute = '0'+this.minute;
        };
        if(this.second<10){
            this.second = '0'+this.second;
        };
        setInterval(function(){
            if(time >0){
                time -= 1000;
                that.hour = parseInt(time/1000/60/60);
                that.minute = parseInt(time/1000/60%60);
                that.second = parseInt(time/1000%60);
                if(that.hour<10){
                    that.hour = '0'+that.hour;
                };
                if(that.minute<10){
                    that.minute = '0'+that.minute;
                };
                if(that.second<10){
                    that.second = '0'+that.second;
                };
            }
        },1000);
    },
    methods:{
        notFound(){
            this.$router.push('404');
        }
    }
}
</script>
<style scoped>
.content{
    width: 7rem;
    height: 5.16rem;
}
.title{
    height: 1.16rem;
    display: flex;
    padding: .36rem 0 0 .48rem;
    align-items: center;
}
.title p{
    font-weight: 700;
    font-size: .56rem;
    margin-right: .16rem;
}
.count{
    font-size: .56rem;
    color: #333;
    display: flex;
    align-items: center;
}
.count span:nth-child(2n+1){
    display: block;
    background: #fc0;
    font-size: .4rem;
    margin: 0 .05rem;
    width: .68rem;
    height: .56rem;
    line-height: .56rem;
    text-align: center;
    border-radius: .18rem;
    font-weight: bold;
}
.desc{
    font-size: .48rem;
    color: #999;
    overflow: hidden;
    margin: .08rem 0 0 .48rem;
    width: 6rem;
    height: .6rem;
    line-height: .6rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: .08rem;
}
.main{
    margin-top: .1rem;
    padding-left: .56rem;
    display: flex;
}
.left{
    width: 2.4rem;
    margin-right: 1.1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.left img{
    width: 2.4rem;
    height: 2.4rem;
}
.left span{
    color: #F50;
    font-size: .44rem;
    height: .56rem;
    margin-top: .02rem;
}
.right{
    width: 2.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.right img{
    width: 2.4rem;
    height: 2.4rem;
}
.right span{
    color: #F50;
    font-size: .44rem;
    height: .56rem;
    margin-top: .02rem;
}
</style>