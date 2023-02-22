<template>
  <TableGenerator style="width: 100%" :data="tableData" :tableOption="tableOption">
    <template #operation="scope">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
    </template>
  </TableGenerator>
</template>

<script lang="tsx" setup>
import { TableGenerator } from 'element-plus-generator'
import type { tableOption } from 'element-plus-generator/dist/type'
import { ref } from 'vue';

let tableOption = ref<tableOption[]>([
  {
    prop: 'date',
    label: 'Date',
  }, {
    prop: 'name',
    label: 'Name',
  }, {
    prop: 'address',
    label: 'Address',
    fixed: 'right'
  },
])

let tableData = ref<any>([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
])
</script>
