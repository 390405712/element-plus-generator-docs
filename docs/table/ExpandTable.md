<script setup>
import ExpandTable from './../../../element-plus-generator-demo/src/views/Table/components/ExpandTable.vue'
</script>

# 展开行

<div class="code">

::: raw
<ExpandTable/>
:::

```vue

<template>
  <TableGenerator :data="tableData" :tableOption="tableOption" />
</template>

<script lang="tsx" setup>
import { TableGenerator } from 'element-plus-generator'
import type { tableOption } from 'element-plus-generator/dist/type'
import { ref } from 'vue'

let tableOption = ref<tableOption[]>([
  {
    type: "expand",
    label: '',
    slot: {
      default: () => ('展开内容')
    },
  },
  {
    prop: 'date',
    label: 'Date',
    width: '180',
  }, {
    prop: 'name',
    label: 'Name',
    width: '180'
  }, {
    prop: 'address',
    label: 'Address',
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

```

</div>