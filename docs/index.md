---
layout: home

title: Element Plus
titleTemplate: 表单、表格生成器

hero:
  name: Element Plus
  text: Generator
  tagline: 遵循Element Plus文档中的属性、事件、插槽、方法，封装的表格、表单生成器，用js编写模板内容
  image:
    src: /logo.png
  actions:
    - theme: brand
      text: 开 始
      link: /introduce/Install
    - theme: alt
      text: 访问npm
      link: https://www.npmjs.com/package/element-plus-generator
features:
  - icon: 💡
    title: Vue3组件库
    details: 基于vite打包和TypeScript开发
  - icon: 🛠️
    title: 基于element-plus文档开发
    details: 减少代码量，增加复用性，提高开发效率，降低维护成本
  - icon: 📦
    title: 轻量
    details: 直接支持按需引入，实际项目打包后该插件只有14kb
---


<div class="contrast">

```vue
  <template>
    <FormGenerator :model="form" :formOption="formOption" @submit="onSubmit"/>
  </template>

  <script lang="tsx" setup>
  import { ref } from 'vue'

  let form = ref({})
  let formOption = ref([
    {
      type: 'input',
      formItem: {
        prop: 'name',
        label: 'Activity name',
      },
    },
  ])
  const onSubmit = () => {
    console.log('submit!')
  }
  </script>

```

```vue
  <template>
    <el-form :model="form">
      <el-form-item label="Activity name">
        <el-input v-model="form.name" />
      </el-form-item>
    </el-form>
    <el-form-item>
      <el-button>取消</el-button>
      <el-button type="primary" @click="onSubmit">确定</el-button>
    </el-form-item>
  </template>

  <script lang="ts" setup>
  import { reactive } from 'vue'

  const form = reactive({
    name: '',
  })
  const onSubmit = () => {
    console.log('submit!')
  }
  </script>

```

</div>


<div class="contrast">

```vue
<template>
  <FormGenerator
    ref="formRef"
    :model="form"
    :formOption="formOption"
    @submit="submit"
    label-width="120px"
    status-icon/>
</template>

<script lang="tsx" setup>
import { FormGenerator, GeneratorUtils } from 'element-plus-generator'
import type { formOption } from 'element-plus-generator/dist/type'
import { ref } from 'vue'

let formRef = ref()
let form = ref({
  name: '',
  region: '',
  count: '',
  date: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})
let formOption = ref<formOption[]>([
  {
    type: 'input',
    formItem: {
      prop: 'name',
      label: 'Activity name',
    },
  },
  {
    type: 'select',
    formItem: {
      prop: 'region',
      label: 'Activity zone',
    },
    control: {
      option: [
        {label: 'Option1',value: 'Option1'},
        {label: 'Option2',value: 'Option2'},
      ]
    },
  },
  {
    type: 'datetime',
    formItem: {
      prop: 'date',
      label: 'Activity time',
    },
    control: {
      type: "datetime"
    },
  },
  {
    type: 'switch',
    formItem: {
      prop: 'delivery',
      label: 'Instant delivery',
    },
  },
  {
    type: 'checkbox',
    formItem: {
      prop: 'type',
      label: 'Activity type',
    },
    control: {
      option: [
        {label: 'Online activities',value: 'Online activities'},
        {label: 'Promotion activities',value: 'Promotion activities'},
        {label: 'Offline activities',value: 'Offline activities'},
        {label: 'Simple brand exposure',value: 'Simple brand exposure'},
      ]
    },
  },
  {
    type: 'radio',
    formItem: {
      prop: 'resource',
      label: 'Resources',
    },
    control: {
      option: [
        {label: 'Sponsor',value: 'Sponsor'},
        {label: 'Venue',value: 'Venue'},
      ]
    },
  },
  {
    type: 'input',
    formItem: {
      prop: 'form',
      label: 'Activity form',
    },
    control: {
      type: 'textarea'
    }
  },
])
GeneratorUtils.setRequired(formOption.value)

function submit() {
  console.log(formRef.value());
}
</script>

```

```vue
<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    status-icon
  >
    <el-form-item label="Activity name" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="Activity zone" prop="region">
      <el-select v-model="ruleForm.region" placeholder="Activity zone">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="Activity time" required>
      <el-col>
        <el-form-item prop="date">
          <el-date-picker
            v-model="ruleForm.date"
            type="datetime"
            placeholder="Pick a date"
          />
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="Instant delivery" prop="delivery">
      <el-switch v-model="ruleForm.delivery" />
    </el-form-item>
    <el-form-item label="Activity type" prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="Online activities" name="type" />
        <el-checkbox label="Promotion activities" name="type" />
        <el-checkbox label="Offline activities" name="type" />
        <el-checkbox label="Simple brand exposure" name="type" />
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="Resources" prop="resource">
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="Sponsorship" />
        <el-radio label="Venue" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Activity form" prop="desc">
      <el-input v-model="ruleForm.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        确定
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  name: '',
  region: '',
  count: '',
  date: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const rules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: 'Please input Activity name',
      trigger: 'change'
    },
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
  count: [
    {
      required: true,
      message: 'Please select Activity count',
      trigger: 'change',
    },
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
  desc: [
    {
      required: true,
      message: 'Please input activity form',
      trigger: 'blur'
    },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

```

</div>
