<script setup>
import Module from './../components/example/index.vue'
</script>

# 模板化模块
扁平化组件，将父级组件作为通信组件

::: raw
<Module/>
:::

## 文件结构
```bash
src
 ├─ components
 │  └─ Page.vue // 分页组件
 ├─ style
 │  └─ global.scss // 公共样式
 └─ views
    └─ Module
       ├─ components
       │  ├─ AddDialog.vue // 新增、编辑表单组件
       │  ├─ Form.vue // 搜索表单组件
       │  └─ Table.vue // 列表组件
       └─ index.vue // 通信组件
```

## index.vue（通信组件）
:::details 点击查看
```vue

<template>
  <div class="Container">
    <Form ref="RefForm" class="Form" />
    <Table ref="RefTable" class="Table" />
    <Page ref="RefPage" class="Page" />
    <AddDialog ref="RefAddDialog" />
  </div>
</template>

<script lang="ts" setup name="模板化模块">
import '@/style/global.scss'  // 为了演示，应在main.ts引入
import { ref, provide } from 'vue'
import Page from '@/components/Page.vue'
import AddDialog from './components/AddDialog.vue'
import Form from './components/Form.vue'
import Table from './components/Table.vue'

let RefForm = ref()
let RefTable = ref()
let RefPage = ref()
let RefAddDialog = ref()

provide('getRefs', () => ({
  Form: RefForm.value,
  Table: RefTable.value,
  Page: RefPage.value,
  AddDialog: RefAddDialog.value,
}))
</script>

```
:::

## Form.vue（搜索表单组件）
:::details 点击查看
```vue
<template>
  <FormGenerator type="search" :model="form" :formOption="formOption" @submit="submit" />
</template>

<script lang="ts" setup>
import { FormGenerator } from 'element-plus-generator'
import type { formOption } from 'element-plus-generator/dist/type'
import { ref, inject } from 'vue'

let form = ref<Record<string, string>>({})
let formOption = ref<formOption[]>([
  {
    type: 'input',
    formItem: {
      prop: 'key1',
      label: '字段1',
    },
  },
  {
    type: 'select',
    formItem: {
      prop: 'key2',
      label: '字段2',
    },
    control: {
      option: [
        {
          label: '文本1',
          value: '值1'
        },
      ]
    }
  },
  {
    type: 'input',
    formItem: {
      prop: 'key3',
      label: '字段3',
    },
  },
  {
    type: 'input',
    formItem: {
      prop: 'key4',
      label: '字段4',
    },
  },
  {
    type: 'input',
    formItem: {
      prop: 'key5',
      label: '字段5',
    },
  },
])

function submit() {
  getRefs().Page.setPageNum(1)
  getRefs().Table.getTableData()
}

const getRefs = inject('getRefs') as Function
defineExpose({ form })
</script>

```
:::

## Table.vue（列表组件）
:::details 点击查看
```vue
<template>
  <div class="Table">
    <div class="tool">
      <el-button type="primary" @click="openAddDialog()">新增</el-button>
    </div>
    <TableGenerator :data="tableData" :loading="loading" :tableOption="tableOption">
      <template #operation="scope">
        <el-button link type="primary" @click="openAddDialog(scope.row.id)">编辑</el-button>
        <el-button link type="primary">删除</el-button>
      </template>
    </TableGenerator>
  </div>
</template>
<script lang="ts" setup>
import { TableGenerator } from 'element-plus-generator'
import type { tableOption } from 'element-plus-generator/dist/type'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref, onMounted, inject } from 'vue'
// import $api from '@/services'

let loading = ref(false)
let tableOption = ref<tableOption[]>([
  {
    prop: 'key1',
    label: '文本1',
  }, {
    prop: 'key2',
    label: '文本2',
  },{
    prop: 'key3',
    label: '文本3',
  },{
    prop: 'key4',
    label: '文本4',
  },{
    prop: 'key5',
    label: '文本5',
  },
])
let tableData = ref<Record<string, string>[]>([])

async function getTableData() {
  const { Form, Page } = getRefs()
  loading.value = true
  // const res = await $api.xxx.xxx({
  //   pageNum: Page.getPageNum(),
  //   pageSize: Page.getPageSize(),
  //   ...Form.form,
  // })
  // tableData = res?.data.list ?? []
  // Page.setTotal(res.total)
  loading.value = false
}

function openAddDialog(id?: number) {
  getRefs().AddDialog.openDialog(id)
}

async function del(id: number) {
  const bool = await ElMessageBox.confirm('确定删除？')
  // bool && await $api.xxx.xxx({id})
  ElMessage.success('删除成功')
  getRefs().Table.getList1Data()
}

onMounted(() => {
  getTableData()
})

const getRefs = inject('getRefs') as Function
defineExpose({ getTableData })
</script>

```
:::

## AddDialog.vue（新增、编辑表单组件）

:::details 点击查看
```vue
<template>
  <el-dialog :title="type" v-model="visible" width="500px">
    <FormGenerator type="dialog" ref="RefFormGenerator" :model="form" :formOption="formOption"
      @submit="submit" />
  </el-dialog>
</template>

<script lang="tsx" setup>
import { FormGenerator, GeneratorUtils } from 'element-plus-generator'
import type { formOption, RefFormGenerator } from 'element-plus-generator/dist/type'
import { ref, onMounted, inject, nextTick } from 'vue'
import { ElMessage } from 'element-plus'
// import $api from '@/services'

let RefFormGenerator = ref<RefFormGenerator>()
let visible = ref(false)
let type = ref<'新增' | '修改'>('新增')
let form = ref<Record<string, string>>({})
let formOption = ref<formOption[]>([
  {
    type: 'input',
    formItem: {
      prop: 'key1',
      label: '文本1',
    },
  },
  {
    type: 'select',
    formItem: {
      prop: 'key2',
      label: '文本2',
    },
    control: {
      option: [
        {
          label: '文本1',
          value: '值1'
        },
        {
          label: '文本2',
          value: '值2'
        },
      ]
    }
  },

])

GeneratorUtils.setRequired(formOption.value)

async function openDialog(id?: string) {
  type.value = id ? '修改' : '新增'
  visible.value = true
  nextTick(async () => {
    RefFormGenerator.value()?.resetFields()
    if (type.value === '新增') {
    } else {
      //  const res = await $api.xxx.xxx()
      // form = res.data
    }
  })
}

async function submit() {
  visible.value = false
  if (type.value === '新增') {
    // await $api.xxx.xxx(form)
  } else {
    // await $api.xxx.xxx(form)
  }
  ElMessage.success(`${type}成功`)
  getRefs().Table.getTableData()
}

const getRefs = inject('getRefs') as Function
defineExpose({ openDialog })
</script>

```
:::

## Page.vue（分页组件）

:::details 点击查看
```vue
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
```
:::

## global.scss（公共样式）
:::details 点击查看
```scss
@mixin flex-init($justify: center, $align: center, $direction: row, $wrap: nowrap) {
  display: flex;
  flex-direction: $direction;
  justify-content: $justify;
  align-items: $align;
  flex-wrap: $wrap;
}
@mixin grow-shrink($grow: 1, $shrink: -1) {
  flex-grow: $grow;
  flex-shrink: $shrink;
}

.Container {
  width: 100%;
  height: 100%;
  @include flex-init(flex-start, flex-start, $direction: column);
  gap: 12px;
  padding: 12px 20px;
  box-sizing: border-box;

  .Form,
  .FormGenerator {
    @include grow-shrink(0, 0);
    width: 100%;

  }

  .Table {
    width: 100%;
    @include grow-shrink(1, 1);
    @include flex-init(flex-start, $direction: column);
    gap: 10px;

    .tool {
      width: 100%;
      @include flex-init(flex-end);
      @include grow-shrink(0, 0);
    }
  }

  .Page {
    @include grow-shrink(0, 0);
    width: 100%;
    @include flex-init(flex-end);
  }
}

```
:::
