<template>
    <div>
        <div>
            必抢清单
        </div>
        <div class="footer">
            <router-link to="/" class="go">
                <img src="../assets/home/icon/15.png" alt="">
                <span>首页</span>
            </router-link>
            <router-link to="/classification" class="go">
                <img src="../assets/home/icon/7.png" alt="">
                <span>分类</span>
            </router-link>
            <router-link to="/mustgrablist" class="go">
                <img src="../assets/home/icon/12.png" alt="">
                <span>必抢清单</span>
            </router-link>
            <router-link to="/shoppingcart" class="go">
                <img src="../assets/home/icon/9.png" alt="">
                <span>购物车</span>
            </router-link>
            <router-link to="/myebay" class="go">
                <img src="../assets/home/icon/10.png" alt="">
                <span>我的易购</span>
            </router-link>
        </div>
    </div>
</template>
<style scoped>
.footer{
    box-sizing: content-box;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    width: 100%;
    border-top: 1px solid #eee;
    background: #fff;
    margin: 0 auto;
    width: 15rem;
    height: 2rem;
}
.go{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    width: 0;
    text-decoration: none;
    align-items: center;
    justify-content: center;
}
.go img{
    width: .96rem;
    height: .96rem;
}
.go span{
    color: #666;
    font-size: .4rem;
}


</style>