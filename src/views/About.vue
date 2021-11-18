<template>
    <el-row type="flex" justify="center" id="aboutCard">
        <el-col :span="20">
            <el-card body-style="min-height:800px;" style="border-radius:10px;">
                <el-row type="flex" justify="start" align="middle">
                    <el-col :span="24" class="head">
                        <i class="el-icon-arrow-left" @click="goback"></i>
                        NAML中文算法
                    </el-col>
                    <!-- <el-col :span="10">{{test.name}}</el-col> -->
                </el-row>
                <el-row id="tableDetails">
                    <!-- 表格排版 -->
                    <analysis-dialog></analysis-dialog>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-button type="primary" plain style="font-size: 18px;padding:15px; border-radius:8px" @click="startSimulation" v-loading.fullscreen.lock="fullscreenLoading" element-loading-text="这可能需要十分钟">
                            模拟推荐
                        </el-button>
                    </el-col>
                </el-row>
            </el-card>
        </el-col>
    </el-row>
</template>
<script>

import AnalysisDialog from "@/components/AnalysisDialog";
export default {
    components:{
        AnalysisDialog
    },
    data() {
        return {
            //表格数据
            dialogVisible:true,
            analysisNews:{},
            historyAttentions:[],
            historyList:[],
            //从和后端拿到的数据
            test: "",
            fullscreenLoading:false,
        };
    },
    methods: {
        goback() {
            this.$router.go(-1);
        },
        startSimulation(){
            this.fullscreenLoading = true;
            //等待响应以后将loading去除,跳转到结果页面
            setTimeout(() => {
                this.fullscreenLoading = false;
                this.$message("好勒");
            }, 2000);
        },
    },
    mounted(){
    }
};
</script>
<style lang="scss" scoped>
#aboutCard {
    padding: 24px 0;
}
.head {
    i {
        font-weight: bolder;
        color: #409eff;
        margin-right: 12px;
    }
    text-align: left;
    font-size: 18px;
    margin-bottom: 24px;
}
#tableDetails {
    margin: 24px;
    .container {
        height: 200px;
        border: black solid 1px;
    }
}
</style>