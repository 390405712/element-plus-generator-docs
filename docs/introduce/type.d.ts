export declare type RefFormGeneratorObj = {
  resetFields: () => void
  submit: () => void
  reset: () => void
  clearValidate: () => void
  validate: (val?: string[]) => Promise<boolean>
  validateField: (val?: string) => Promise<boolean>
}

export declare type RefFormGenerator = () => RefFormGeneratorObj

export declare type rule = {
  required?: boolean
  message?: string
  trigger: string
  field: string
  validator?: (rule: any, value: string) => Promise<void>
  formOption: formOption[]
};

/**
 * @description: 表单生成配置
 * @param model 表单数据对象
 * @param formOption 表单生成配置
 * @param rules 校验对象
 * @param noFooter 表单底部按钮
 * @param type search:搜索表单 dialog:dialog表单
 * @param column 判断展开收起的长度（包括搜索按钮那个容器）
 * @param slot 插槽（默认插槽是确定、取消按钮那块区域）
 */
export declare interface formAttrs {
  [key: string]: any
  model: Record<string, any>
  formOption: formOption[]
  rules?: rule[]
  noFooter?: boolean
  type?: 'search' | 'dialog'
  column?: number
  slot?: Record<string, (() => JSX.Element | string | void) | string>
}

/**
 * @description: 表单生成配置
 * @param type 表单控件类型
 * @param show 是否显示
 * @param formItem form下formItem属性
 * @param control 控件属性
 */
export declare interface formOption {
  type: 'input' | 'input-number' | 'select' | 'tree-select' | 'cascader' | 'radio' | 'radio-button' | 'checkbox' | 'checkbox-button' | 'datetime' | 'time' | 'switch' | 'upload' | 'txt' | 'slot'
  show?: boolean
  formItem: {
    [key: string]: any
    prop: string,
    label?: string,
    rules?: {
      [key: string]: any
      message?: string
      trigger?: 'blur' | 'change'
      validator?: RegExp | ((rule: rule, value: string | boolean) => Promise<void>),
    }
    // reg?: {
    //   [key: string]: any
    //   message: string
    //   validator?: RegExp | ((rule: any, value: string | boolean) => Promise<void>),
    // }
    style?: any
  }
  control?: {
    [key: string]: any
    option?: option[]
    slot?: Record<string, (() => JSX.Element | string | void) | string>
  }
}

/**
 * @description: 表格生成配置
 * @param data 表格数据
 * @param tableOption 表格生成配置
 * @param loading 是否加载动画
 */
export declare interface tableAttrs {
  [key: string]: any
  data: Record<string, any>[]
  tableOption: tableOption[]
  loading?: boolean
}

/**
 * @description: 表格生成配置
 * @param prop 表格列key
 * @param label 表格列名称
 * @param type 列的类型
 */
export declare interface tableOption {
  [key: string]: any
  type?: 'selection' | 'index' | 'expand'
  prop?: string
  label?: string
  slot?: Record<string, (() => JSX.Element | string | void) | string>
  children?: tableOption[]
}

export declare type option = {
  [key: string]: any
  label?: string
  value: string,
  slot: Record<string, (() => JSX.Element | string | void) | string>
} | {
  [key: string]: any
  label: string
  value: string,
  slot?: Record<string, (() => JSX.Element | string | void) | string>
}