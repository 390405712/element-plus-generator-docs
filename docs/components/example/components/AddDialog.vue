<template>
  <el-dialog :title="type" v-model="visible" width="500px">
    <FormGenerator type="dialog" ref="RefFormGenerator" :model="form" :formOption="formOption" @submit="submit" />
  </el-dialog>
</template>

<script lang="tsx" setup>
import { FormGenerator, GeneratorUtils } from 'element-plus-generator'
import type { formOption, RefFormGenerator } from 'element-plus-generator/lib/type'
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
  ElMessage.success(`${type.value}成功`)
  getRefs().Table.getTableData()
}

const getRefs = inject('getRefs') as Function
defineExpose({ openDialog })
</script>
