<template>
    <div class="pagination">

        <button :disabled="pageNo===1" @click="$emit('getPageNo',pageNo-1)">上一页</button>
        <button v-if="startNumAndEndNum.start>1" @click="$emit('getPageNo',1)" :class="{active:pageNo ===1}">1</button>
        <button v-if="startNumAndEndNum.start>2">···</button>

        <!--中间结构-->
        <button v-for="(page,index) in startNumAndEndNum.end" :key="index" v-if="page>=startNumAndEndNum.start"
                @click="$emit('getPageNo',page)" :class="{active:pageNo===page}">
            {{page}}
        </button>

        <button v-if="startNumAndEndNum.end < totalPage-parseInt(continuous/2) +1">···</button>
        <button v-if="startNumAndEndNum.end <totalPage" @click="$emit('getPageNo',totalPage)" :class="{active:pageNo===totalPage}">{{totalPage}}</button>
        <button :disabled="pageNo===totalPage" @click="$emit('getPageNo',pageNo+1)">下一页</button>

        <button style="margin-left: 30px">共 {{total}} 条</button>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        props: ["pageNo", "total", "continuous", "pageSize"],
        computed: {
            //总共的页数
            totalPage() {
                return Math.ceil(this.total / this.pageSize);
            },
            //计算连续页码的起始数字与结束数字
            startNumAndEndNum() {
                const {pageNo, continuous, totalPage} = this;
                let start = 1, end = 2;
                //若不足5页
                if (continuous > totalPage) {
                    start = 1;
                    end = totalPage;
                } else {
                    let num = parseInt(continuous / 2);
                    // if()
                    //起始数字
                    start = pageNo - num;
                    //结束数字
                    end = pageNo + num;
                    if (start < 1) {
                        start = 1;
                        end = continuous;
                    }
                    if (end > totalPage) {
                        start = totalPage - continuous + 1;
                        end = totalPage;
                    }
                }
                return {start, end};
            }
        },
        methods: {}
    };
</script>

<style lang="less" scoped>
    .pagination {
        text-align: center;

        button {
            margin: 0 5px;
            background-color: #f4f4f5;
            color: #606266;
            outline: none;
            border-radius: 2px;
            padding: 0 4px;
            vertical-align: top;
            display: inline-block;
            font-size: 13px;
            min-width: 35.5px;
            height: 28px;
            line-height: 28px;
            cursor: pointer;
            box-sizing: border-box;
            text-align: center;
            border: 0;

            &[disabled] {
                color: #c0c4cc;
                cursor: not-allowed;
            }

            &.active {
                cursor: not-allowed;
                background-color: #409eff;
                color: #fff;
            }
        }
    }
</style>
