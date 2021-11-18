<template>
  <div class="news-container" :style="{height:(clientHeight - 8 )+'px'}">
    <div class="news-header"><div class="news-header-line"></div></div>
    <sub-title style="text-align: center">模拟推荐</sub-title>
    <div class="news-list" :style="{height:(clientHeight-34)+'px'}">
      <template v-for="n in newsList">
        <news-item :news="n" :key="n.newsId"/>
        <el-divider :key="n.newsId"/>
      </template>

    </div>
  </div>
</template>

<script>
import SubTitle from "@/components/SubTitle";
import NewsItem from "@/components/news/NewsItem";

export default {
  name: "NewsInfo",
  components: {NewsItem, SubTitle},
  props: {
    candidate: {
      type: Array,
      default: function () {
        return []
      }
    },
    rank: {
      type: Array,
      default: function () {
        return []
      }
    },
    score: {
      type: Array,
      default: function () {
        return []
      }
    },
    titleAttentions: {
      type: Array,
      default: function () {
        return []
      }
    },
    clientHeight:{
      type:Number,
      default:0
    }
  },
  computed: {
    newsList() {
      if (this.rank.length > 0) {
        let count = 1;
        let res = []
        while (count !== this.candidate.length + 1) {
          for (let i = 0; i < this.rank.length; i++) {
            if (parseInt(this.rank[i]) === count) {
              if (i !== this.rank.length - 1) {
                let news = this.candidate[i];
                let titleWords = news.newsTitle.match(/[\w]+|[.,!?;|]/g),a = this.titleAttentions[i],attentionList = [];
                for (let j = 0; j < titleWords.length; j++) {
                  attentionList.push({
                    word:titleWords[j],
                    attention:a[j]
                  })
                }
                news.titleAttentions = attentionList;
                news.index = i
                res.push(news)
              }
              count++;
              break
            }
          }
        }
        return res
      }
      return []

    }
  }
}
</script>

<style scoped>
  .news-list::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
.news-container {
  width: 100%;
  height: 100%;
  border-radius: 32px;
  background: white;
  padding:0 0 8px 0;
  box-sizing: border-box;
  border: 4px solid black;
  overflow-y: hidden;
  /*scrollbar-width: none; !* firefox *!*/
  /*-ms-overflow-style: none; !* IE 10+ *!*/
  overflow-x: hidden;
  position: relative;
}
.news-header {
  height: 8px;
  width: 100%;
  position: absolute;
  top: 0;
}
.news-header-line{
  height: 8px;
  border-radius: 0 0 4px 4px;
  background: black;
  width: 120px;
  margin: 0 auto;

}
.news-list{
  overflow-y: scroll;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow-x: hidden;
  position: relative;

}
</style>
