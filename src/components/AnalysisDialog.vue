<template>
    <el-dialog
            title="推荐结果分析"
            :visible.sync="dialogVisible"
            :before-close="closeDialog"
            width="80%">
        <el-row>
            <el-col :span="8">
                <sub-title>浏览历史</sub-title>
                <div class="history-container">
                    <history-card v-for="(n,index) in historyNews" :is-active="n.id === activeNews.newsId" :news="n"
                                  :key="n.id" @click.native="activeNewsIndex = index" mode="analysis"></history-card>
                </div>
             </el-col>
            <el-col :span="8">
                <sub-title >{{activeNews.newsId}}详情</sub-title>
                <news-item :news="activeNews" mode="analysis"/>
            </el-col>
            <el-col :span="8">
                <sub-title>推荐新闻详情</sub-title>

                <news-item :news="analysisNews" mode="analysis"/>
            </el-col>
        </el-row>

    </el-dialog>
</template>

<script>
    import HistoryCard from "./user/HistoryCard";
    import NewsItem from "./news/NewsItem";
    import SubTitle from "./SubTitle";
    export default {
        name: "AnalysisDialog",
        components: {SubTitle, NewsItem, HistoryCard},
        props:{
            dialogVisible:{
                type:Boolean,
                default() {
                    return false
                }
            },
            analysisNews:{
                type:Object,
                default(){
                    return {}
                }
            },
            historyList:{
                type: Array
            },
            historyAttentions:{
                type:Array
            }
        },
        data() {
            return {
                activeNewsIndex: 0
            }
        },
        methods:{
            // loadNews() {
            //     this.axios.post("/rec-api/findByIdList",
            //         {"newsIdList": this.activeUser.history}).then((res) => {
            //         let data = res.data
            //         this.newsList = data.newsList;
            //         this.changeHistoryNews(this.activeUser.history[0])
            //     })
            // },
            //
            closeDialog(){
              this.$emit('closeDialog')
            },
        },
        computed:{
            // dialogVisible:{
            //     get:function () {
            //         console.log(this.analysisNews)
            //         return this.analysisNews
            //     },
            //     set: function () {
            //         this.$EventBus.$emit("analysis",{})
            //     }
            // },
            activeNews() {
                if (this.dialogVisible && this.historyList) {
                    return this.historyList[this.activeNewsIndex]
                }else {
                    return {
                        newsId: 0
                    }
                }
            },
            historyNews() {
                if (this.dialogVisible && this.historyList && this.historyAttentions && this.historyAttentions.length > 0) {
                    let h = this.historyList;
                    let res = [];
                    for (let i = 0; i < h.length; i++) {
                        res.push({
                            id: h[i].newsId,
                            alpha: 0
                        })
                    }
                    let a = this.historyAttentions[this.analysisNews.index];
                    let max = 0, min = 1;
                    for (let i = 0; i < h.length; i++) {
                        if (a[i] > max) {
                            max = a[i];
                        }
                        if (a[i] < min) {
                            min = a[i]
                        }
                    }
                    let sub = max - min;
                    if (sub > 0) {
                        for (let i = 0; i < h.length; i++) {
                            res[i].alpha = (a[i] - min) / sub
                        }
                    }
                    return res
                }else {
                    return []
                }
            }
        },
        watch :{
            dialogVisible(newData){
                if (newData){
                    this.activeNewsIndex = 0
                }
            }
        }
    }
</script>
<style>
    .history-container {
        display: flex;
        flex-wrap: wrap;
    }
    .history-container div {
        margin-right: 8px;
    }
</style>

<style scoped>

</style>
