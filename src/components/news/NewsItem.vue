<template>
  <div class="item-container">
    <div class="news-row">
      <div class="news-id" v-if="mode === 'show'">ID:{{ news.newsId }}</div>
      <div v-if="mode === 'show'">
        <el-button size="mini" type="primary" @click="analysis(news)">分析</el-button>
        <el-button size="mini" type="warning" @click="view(news)">模拟浏览</el-button>
      </div>
    </div>
    <div class="news-row">
      <p class="news-title" v-html="attentionTitle"></p>
<!--      <info-card type="simple" :main="news.newsCategory" :sub="news.newsSubcategory" main-tip="新闻分类" sub-tip="新闻子类"></info-card>-->
      <div style="display: block">
        <el-tooltip content="新闻类别" placement="left"><div class="main-category">{{news.newsCategory}}</div></el-tooltip>
        <el-tooltip content="新闻子类" placement="left"><div class="main-category sub-category">{{news.newsSubcategory}}</div></el-tooltip>
      </div>
<!--      <div class="news-category">{{ news.newsCategory }} {{ news.newsSubcategory }}</div>-->
    </div>
    <div style="font-size: 14px" v-if="mode === 'analysis'">{{ news.newsAbstract }}</div>
  </div>
</template>

<script>
export default {
  name: "NewsItem",
  props: {
    mode: {
      type: String,
      default: 'show' //show  history analysis
    },
    news: {
      type: Object,
      default: function () {
        return {
          newsId: "N27958",
          newsTitle: "LA rivalry takes on new meaning for fans as Lakers, Clippers in hunt for NBA championship",
          newsCategory: "Sport",
          newsSubcategory: "Basketball",
          newsAbstract: "NBA Finals MVP Kawhi Leonard and other Clippers say they are used to taunts and booing from Lakers fans, who are \"like a religion\" in Tinseltown",
          titleAttentions:[],
        }
      }
    }
  },
  data() {
    return {
    }
  },
  methods:{
    view(news){
      this.$EventBus.$emit("view",news)
    },
    analysis(news){
      this.$EventBus.$emit("analysis",news)
    }
  },
  computed:{
    attentionTitle(){
      if (this.news.titleAttentions && this.mode === 'analysis'){
        let max = 0, min = 1 , a = this.news.titleAttentions;
        for (let i = 0; i < a.length; i++) {
          if (a[i].attention > max){
            max = a[i].attention;
          }
          if (a[i].attention < min){
            min = a[i].attention;
          }
        }
        let sub = max - min;
        if (sub > 0){
          let res = "";
          for (let i = 0; i < a.length; i++) {
            let alpha = (a[i].attention - min)/sub;
            res += ("<a style='background-color:rgba(255,204,72,"+alpha +");'>"+a[i].word+"</a> ")
          }
          return res
        }else {
          console.log(max,min)
          return this.news.newsTitle
        }
      }else {
        return this.news.newsTitle
      }

    }
  }
}
</script>

<style scoped>
.item-container {
  padding: 8px;
}

.news-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.news-id {
  color: #888888;
  font-size: 14px;
  width: 80px;
}

.news-title {
  font-size: 18px;
  font-weight: bold;
  width: 60%;
}

.main-category {
  border-radius: 8px;
  border: 1px solid #888888;
  padding:2px 8px;
  margin-left: 8px;
  font-weight: bold;
  text-align: center;
}

.sub-category {
  color: #888888;
  font-size: 12px;
  margin-top: 4px;
}
</style>
