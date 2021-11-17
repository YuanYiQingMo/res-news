<template>
    <div id="app">
        <div id="nav">
            <div
                style="
                    width: 100vw;
                    height: 48px;
                    background-color: #ffffff;
                    font-size: 18px;
                    text-align: left;
                    font-weight: bolder;
                    line-height: 48px
                "
            >
                <div style="margin: 0 24px">
                    接入式新闻推荐算法测评平台
                </div>
            </div>
            <div
                style="width: 100vw; height: 32px; background-color: #409eff"
            ></div>
        </div>
        <router-view />
    </div>
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 1080px;
}

// #nav {
//     padding: 30px;

//     a {
//         font-weight: bold;
//         color: #2c3e50;

//         &.router-link-exact-active {
//             color: #42b983;
//         }
//     }
// }
</style>
