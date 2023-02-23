
<template>
  <div class="Container">
    <Form ref="RefForm" class="Form" />
    <Table ref="RefTable" class="Table" />
    <Page ref="RefPage" class="Page" />
    <AddDialog ref="RefAddDialog" />
  </div>
</template>

<script lang="ts" setup name="模板化模块">
import './global.scss'  // 可从main.ts引入
import { ref, provide } from 'vue'
import Page from './components/Page.vue'
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
