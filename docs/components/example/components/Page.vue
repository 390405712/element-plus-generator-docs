<template>
  <div>
    <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
      v-model:currentPage="pageNum" layout="prev, pager, next"
      :page-size="pageSize" :total="total" ></el-pagination>
  </div>
</template>

<script lang="ts" setup>
import { ref, inject } from 'vue'

let pageNum = ref(1)
let pageSize = ref(10)
let total = ref(0)

function handleCurrentChange(val: number) {
  pageNum.value = val
  getRefs().Table.getTableData(null, 'page')
}
function handleSizeChange(val: number) {
  pageNum.value = 1
  setPageSize(val)
  getRefs().Table.getTableData(null, 'page')
}
function getPageSize() {
  return pageSize
}
function getPageNum() {
  return pageNum
}
function setPageSize(val: number) {
  pageSize.value = val
}
function setPageNum(val: number) {
  pageNum.value = val
}
function setTotal(val: number) {
  total.value = val
}

const getRefs = inject('getRefs') as Function
defineExpose({ getPageNum, getPageSize, setPageNum, setTotal })

</script>