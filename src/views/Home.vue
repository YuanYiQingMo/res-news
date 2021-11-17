<template>
    <el-row type="flex" justify="center" id="mainCard">
        <el-col :span="20">
            <el-card body-style="min-height:800px">
                <el-row
                    type="flex"
                    justify="start"
                    align="middle"
                    id="homeHead"
                    gutter="32"
                >
                    <el-col :span="14">
                        <el-row type="flex" justify="start" align="middle">
                            <div
                                style="
                                    height: 48px;
                                    width: 5px;
                                    background-color: #409eff;
                                    display: inline-block;
                                    margin: 0 20px 0 0;
                                "
                            ></div>
                            新闻推荐算法测评列表
                        </el-row>
                    </el-col>
                    <el-col :span="6">
                        <el-row type="flex" justify="start" align="middle">
                            <el-col :span="12" style="margin: 0 12px"
                                >对比评测</el-col
                            >
                            <el-col :span="12">
                                <el-radio-group
                                    v-model="switchSortnum"
                                    class="switchbtn"
                                >
                                    <el-radio-button
                                        label="8"
                                        class="switchbtn"
                                        size="medium"
                                    >
                                        <i class="el-icon-menu icon"></i>
                                    </el-radio-button>
                                    <el-radio-button
                                        label="22"
                                        class="switchbtn"
                                        size="medium"
                                    >
                                        <i class="el-icon-minus icon"></i><br />
                                        <!-- <i class="el-icon-minus"></i><br>
                                        <i class="el-icon-minus"></i> -->
                                    </el-radio-button>
                                </el-radio-group>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="4">
                        <el-button
                            id="addTestbtn"
                            type="primary"
                            @click="addtestdialog"
                        >
                            添加测评
                        </el-button>
                    </el-col>
                </el-row>
                <el-row gutter="40">
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
                    <!-- 测试css -->
                    <el-col :span="switchSortnum" class="testCard">
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
                            <el-row type="flex" justify="around" style="margin:56px 0 0 0">
                                <!-- 这里传入数据 -->
                                <el-button type="primary" plain class="cardBoxbtn" @click="edit()">编辑</el-button>
                                <el-button type="primary" class="cardBoxbtn" to="/About">查看</el-button>
                            </el-row>
                        </el-card>
                    </el-col>
                    <el-col :span="switchSortnum" class="testCard">
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
                            <el-row type="flex" justify="around" style="margin:56px 0 0 0">
                                <el-button type="primary" plain class="cardBoxbtn">编辑</el-button>
                                <el-button type="primary" class="cardBoxbtn" >查看</el-button>
                            </el-row>
                        </el-card>
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
                                    <el-col :span="4">
                                        <el-radio-button label="Naml">
                                            <span class="addtestRadio">
                                                Naml
                                            </span>
                                        </el-radio-button>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-radio-button label="NRMS">
                                            <span class="addtestRadio">
                                                NRMS
                                            </span>
                                        </el-radio-button>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-radio-button label="LSTUR">
                                            <span class="addtestRadio">
                                                LSTUR
                                            </span>
                                        </el-radio-button>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-radio-button label="Naml">
                                            <span class="addtestRadio">
                                                Naml
                                            </span>
                                        </el-radio-button>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-radio-button
                                            label="导入算法"
                                            disabled
                                        >
                                            <span class="addtestRadio">
                                                导入算法
                                            </span>
                                        </el-radio-button>
                                    </el-col>
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
                    <el-row type="flex" justify="center" style="margin:48px">
                        <el-col :span="8">
                            <el-button round plain @click="dialogVisible = flase">取消</el-button>
                        </el-col>
                        <el-col :span="8" push="6">
                            <el-button round plain type="primary" @click="addtest">添加测评</el-button>
                        </el-col>
                    </el-row>
                </el-dialog>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
// @ is an alias to /src

export default {
    name: "Home",
    data() {
        return {
            switchSortnum: 8,
            dialogVisible: false,
            //dialog里的变量
            addedTEstName: "",
            testAlgorithm: "",
            dataGroup: "",
        };
    },

    methods: {
        teston(testid) {
            this.$message("这是一条消息提示" + testid);
        },
        addtestdialog() {
            this.dialogVisible = true;
        },
        addtest(){
            this.$message('asdaw')
        },
        edit(addedTEstName, testAlgorithm, dataGroup){
            this.addedTEstName = addedTEstName;
            this.testAlgorithm = testAlgorithm;
            this.dataGroup = dataGroup;
            this.dialogVisible = true;
        }
    },
};
</script>

<style lang="scss" scoped>
#mainCard {
    padding: 24px 0;
    text-align: left;
    font-size: 32px;
    #homeHead {
        margin: 24px;
        font-size: 32px;
    }
    .testCard {
        margin: 24px;
        .cardBoxbtn{
            margin: 0 32px;
            font-size: 24px;
            padding: 18px 50px;
        }
    }
    .testName {
        font-size: 32px;
        font-weight: bolder;
        margin: 24px 0;
    }
    .testData {
        font-size: 24px;
        margin: 12px 0;
    }
    .switchbtn {
        .icon {
            font-size: 32px;
        }
    }
    #addTestbtn {
        font-size: 32px;
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