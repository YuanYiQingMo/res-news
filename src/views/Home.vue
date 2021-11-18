<template>
    <el-row type="flex" justify="center" id="mainCard">
        <el-col :span="20">
            <el-card body-style="min-height:800px" style="border-radius: 10px">
                <el-row
                    type="flex"
                    justify="start"
                    align="middle"
                    id="homeHead"
                    gutter="32"
                >
                    <el-col :span="16">
                        <el-row type="flex" justify="start" align="middle">
                            <div
                                style="
                                    height: 40px;
                                    width: 4px;
                                    background-color: #409eff;
                                    display: inline-block;
                                    margin: 0 20px 0 0;
                                "
                            ></div>
                            新闻推荐算法测评列表
                        </el-row>
                    </el-col>
                    <el-col :span="3">
                        <el-button
                            type="primary"
                            @click="changSO"
                            class="mainbtn"
                        >
                            {{ switchSort }}
                        </el-button>
                    </el-col>
                    <el-col :span="3">
                        <el-button
                            class="mainbtn"
                            type="primary"
                            plain
                            @click="addtestdialog"
                        >
                            添加测评
                        </el-button>
                    </el-col>
                </el-row>
                <!-- 块状列表 -->
                <el-row gutter="40" v-show="changSort">
                    <!-- 有数据后使用这段代码 -->
                    <!-- <el-col v-for="item in testList" :key="item.id" :span="8">
                        <el-card>
                            <el-row>
                                <el-col :span="24" class="testName">
                                    {{item.testName}}
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="24" class="testData">
                                    //todo 这里拆开写
                                    {{item.testData}}
                                </el-col>
                            </el-row>
                        </el-card>
                    </el-col> -->
                    <el-col :span="8" class="testCard">
                        <el-card style="border-radius: 10px">
                            <el-row>
                                <el-col :span="24" class="testName">
                                    NAML英文测评
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="24" class="testData">
                                    被测算法：NAML
                                </el-col>
                                <el-col :span="24" class="testData">
                                    数据集：英文数据集1
                                </el-col>
                            </el-row>
                            <el-row
                                type="flex"
                                justify="around"
                                style="margin: 56px 0 0 0"
                            >
                                <!-- 这里传入数据 -->
                                <el-button
                                    type="primary"
                                    plain
                                    class="cardBoxbtn mainbtn"
                                    @click="edit()"
                                    >编辑</el-button
                                >
                                <el-button
                                    type="primary"
                                    class="cardBoxbtn mainbtn"
                                    @click="checktest(item)"
                                    >查看</el-button
                                >
                            </el-row>
                        </el-card>
                    </el-col>
                    <el-col :span="8" class="testCard">
                        <el-card>
                            <el-row>
                                <el-col :span="24" class="testName">
                                    NAML英文测评
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="24" class="testData">
                                    被测算法：NAML
                                </el-col>
                                <el-col :span="24" class="testData">
                                    数据集：英文数据集1
                                </el-col>
                            </el-row>
                            <el-row
                                type="flex"
                                justify="around"
                                style="margin: 56px 0 0 0"
                            >
                                <el-button
                                    type="primary"
                                    plain
                                    class="cardBoxbtn mainbtn"
                                    >编辑</el-button
                                >
                                <el-button
                                    type="primary"
                                    class="cardBoxbtn mainbtn"
                                    >查看</el-button
                                >
                            </el-row>
                        </el-card>
                    </el-col>
                </el-row>
                <!-- 平铺式的列表 数据集 -->
                <el-row v-show="!changSort">
                    <el-col :span="24">
                        <!-- TODO 这里等待接口看看是啥要再写吧 -->
                        <el-table :data="Data">
                            <el-table-column
                                prop="name"
                                label="测评名称"
                                sortable
                            ></el-table-column>
                            <el-table-column
                                label="被测算法"
                                sortable
                            ></el-table-column>
                            <el-table-column
                                label="数据集"
                                sortable
                            ></el-table-column>
                            <el-table-column
                                label="AUC"
                                sortable
                            ></el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button
                                        size="mini"
                                        @click="
                                            handleEdit(scope.$index, scope.row)
                                        "
                                        >编辑</el-button
                                    >
                                    <el-button
                                        size="mini"
                                        plain
                                        @click="
                                            handleDelete(
                                                scope.$index,
                                                scope.row
                                            )
                                        "
                                        >查看</el-button
                                    >
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-col>
                </el-row>
                <!-- 这里是点击按钮后的弹出框 -->
                <el-dialog
                    title="设置新闻推荐算法测评"
                    :visible.sync="dialogVisible"
                    width="60%"
                >
                    <el-row
                        type="flex"
                        justify="start"
                        align="middle"
                        style="font-size: 24px; margin: 20px"
                    >
                        <el-col :span="4" push="1"> 测评名称 </el-col>
                        <el-col :span="16" push="2">
                            <el-input
                                type="text"
                                size="large"
                                v-model="addedTestName"
                            ></el-input>
                        </el-col>
                    </el-row>
                    <el-row
                        type="flex"
                        justify="start"
                        align="middle"
                        style="font-size: 24px; margin: 20px"
                    >
                        <el-col :span="4" class="addtestRadio" push="1">
                            被测算法
                        </el-col>
                        <el-col :span="20" push="2">
                            <el-radio-group
                                v-model="testAlgorithm"
                                style="width: 80%"
                            >
                                <el-row>
                                    <el-radio-button label="Naml">
                                        <span class="addtestRadio"> Naml </span>
                                    </el-radio-button>
                                    <el-radio-button label="NRMS">
                                        <span class="addtestRadio"> NRMS </span>
                                    </el-radio-button>
                                    <el-radio-button label="LSTUR">
                                        <span class="addtestRadio">
                                            LSTUR
                                        </span>
                                    </el-radio-button>
                                    <el-radio-button label="Naml">
                                        <span class="addtestRadio"> Naml </span>
                                    </el-radio-button>
                                    <el-radio-button label="导入算法" disabled>
                                        <span class="addtestRadio">
                                            导入算法
                                        </span>
                                    </el-radio-button>
                                </el-row>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-row
                        type="flex"
                        justify="start"
                        align="middle"
                        style="font-size: 24px; margin: 20px"
                    >
                        <el-col :span="4" push="1" style="font-size: 24px">
                            数据集
                        </el-col>
                        <el-col :span="20" push="2">
                            <el-radio-group
                                v-model="dataGroup"
                                style="width: 100%"
                            >
                                <el-col :span="12">
                                    <el-radio-button label="en">
                                        <el-row
                                            type="flex"
                                            align="middle"
                                            justify="center"
                                        >
                                            <el-col
                                                :span="24"
                                                class="dataGroupRadio"
                                            >
                                                英文数据集<br />
                                                新闻总量:
                                                <!-- TODO balabala -->
                                            </el-col>
                                        </el-row>
                                    </el-radio-button>
                                </el-col>
                                <el-col :span="12" pull="2">
                                    <el-radio-button label="zh">
                                        <el-row
                                            type="flex"
                                            align="middle"
                                            justify="center"
                                        >
                                            <el-col
                                                :span="24"
                                                class="dataGroupRadio"
                                            >
                                                中文数据集<br />
                                                新闻总量:
                                                <!-- TODO balabala -->
                                            </el-col>
                                        </el-row>
                                    </el-radio-button>
                                </el-col>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-row type="flex" justify="center" style="margin: 48px">
                        <el-col :span="8">
                            <el-button
                                round
                                plain
                                @click="dialogVisible = flase"
                                >取消</el-button
                            >
                        </el-col>
                        <el-col :span="8" push="6">
                            <el-button
                                round
                                plain
                                type="primary"
                                @click="addtest"
                                >添加测评</el-button
                            >
                        </el-col>
                    </el-row>
                </el-dialog>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            switchSort: "对比评测",
            changSort: true,
            dialogVisible: false,
            //dialog里的变量
            addedTestName: "",
            testAlgorithm: "",
            dataGroup: "",
            Data: [],
        };
    },

    methods: {
        teston(testid) {
            this.$message("这是一条消息提示" + testid);
        },
        addtestdialog() {
            this.dialogVisible = true;
        },
        addtest() {
            this.$message("asdaw");
        },
        edit(addedTestName, testAlgorithm, dataGroup) {
            this.addedTestName = addedTestName;
            this.testAlgorithm = testAlgorithm;
            this.dataGroup = dataGroup;
            this.dialogVisible = true;
        },
        checktest(item) {
            this.$message("查看了" + item);
            this.$router.push('About');
            // this.$router.push('/analysis/'+item.name);
        },
        changSO() {
            if (this.changSort) {
                this.changSort = false;
                this.switchSort = "测评列表";
            } else {
                this.changSort = true;
                this.switchSort = "对比测评";
            }
        },
    },
    mounted() {
        this.axios
            .post("http://172.18.91.116:8080/evalution/list", {
                pageNum: 1,
                pageSize: 8,
            })
            .then((res) => {
                let data = res.data;
                this.Data = data.data;
            });
    },
};
</script>

<style lang="scss" scoped>
#mainCard {
    padding: 24px 0;
    text-align: left;
    font-size: 18px;
    #homeHead {
        margin: 24px;
        font-size: 18px;
    }
    .testCard {
        margin: 24px;
        .cardBoxbtn {
            margin: 0 32px;
            font-size: 16px;
            padding: 12px 40px;
        }
    }
    .testName {
        font-size: 16px;
        font-weight: bolder;
        margin: 12px 0;
    }
    .testData {
        font-size: 16px;
        margin: 12px 0;
    }
    .mainbtn {
        font-size: 16px;
        border-radius: 8px;
    }
    .addtestRadio {
        font-size: 24px;
    }
    .dataGroupRadio {
        font-size: 32px;
        margin: 24px;
    }
}
</style>