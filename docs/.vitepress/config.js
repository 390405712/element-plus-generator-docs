import { defineConfig } from 'vitepress'
export default defineConfig((config) => {
  return {
    lang: 'zh-CN',
    title: 'ElementPlus生成器',
    description: 'Vite 与 Vue 驱动的静态站点生成器',
    base: config.mode === 'development' ? '/' : '/element-plus-generator-docs/',
    head: [
      ['link', { rel: 'icon', href: `/logo.png` }],
    ],
    themeConfig: {
      aside: false,
      // repo: 'docschina/vitepress-docs-cn',
      // docsDir: 'docs',

      // editLinks: true,
      // editLinkText: '在 GitHub 上编辑此页面',
      // lastUpdated: '上次更新',

      // algolia: {
      //   apiKey: 'c57105e511faa5558547599f120ceeba',
      //   indexName: 'vitepress'
      // },

      // carbonAds: {
      //   carbon: 'CEBDT27Y',
      //   custom: 'CKYD62QM',
      //   placement: 'vuejsorg'
      // },
      //   type SocialLinkIcon =
      // | 'discord'
      // | 'facebook'
      // | 'github'
      // | 'instagram'
      // | 'linkedin'
      // | 'slack'
      // | 'twitter'
      // | 'youtube'
      // | { svg: string }
      socialLinks: [
        { icon: 'github', link: 'https://github.com/390405712/element-plus-generator' }
      ],
      nav: [
        { text: '具体api请查看Element Plus官网', link: 'https://element-plus.gitee.io/' },
        { text: 'ElementUIGenerator', link: 'https://qq390405712.gitee.io/element-ui-generator-docs/' },
        { text: '我的博客', link: 'https://qq390405712.gitee.io/blog/' }, //activeMatch: '^/$|^/table/'
      ],
      sidebar: [
        {
          text: '介绍',
          collapsible: true,
          collapsed: false,
          items: [
            // { text: 'Makedown', link: '/introduce/Makedown' },
            { text: '安装', link: '/introduce/Install' },
            { text: '生成器类型', link: '/introduce/Type' },
          ]
        },
        {
          text: '控件',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'Input 输入框', link: '/control/Input' },
            { text: 'Input Number 数字输入框', link: '/control/InputNumber' },
            { text: 'Select 选择器', link: '/control/Select' },
            { text: 'TreeSelect 树形选择', link: '/control/TreeSelect' },
            { text: 'Cascader 级联选择器', link: '/control/Cascader' },
            { text: 'Radio 单选框', link: '/control/Radio' },
            { text: 'Checkbox 多选框', link: '/control/Checkbox' },
            { text: 'DateTime 日期时间选择器', link: '/control/DateTime' },
            { text: 'Switch 开关', link: '/control/Switch' },
            { text: 'Upload 上传', link: '/control/Upload' },
            { text: 'Txt 文本', link: '/control/Txt' },
            { text: 'Slot 自定义插槽', link: '/control/Slot' },
          ]
        },
        {
          text: '表单',
          collapsible: true,
          collapsed: false,
          items: [
            { text: '典型表单', link: '/form/TypicalForm' },
            { text: '行内表单', link: '/form/InlineForm' },
            { text: '对齐方式与尺寸控制', link: '/form/PositionSizeForm' },
            { text: '校验表单', link: '/form/RuleForm' },
            { text: '自定义校验表单', link: '/form/CustomRuleForm' },
            { text: '添加/删除表单项', link: '/form/AddOrDelForm' },
            { text: '弹窗表单', link: '/form/DialogForm' },
            { text: '搜索表单', link: '/form/SearchForm' },
            { text: '自定义按钮', link: '/form/CustomButtonForm' },
            { text: '自定义表单样式', link: '/form/CustomStyleFrom' },
          ]
        },
        {
          text: '表格',
          collapsible: true,
          collapsed: false,
          items: [
            { text: '基础表格', link: '/table/TypicalTable' },
            { text: '不带斑马纹表格', link: '/table/NoStripeTable' },
            { text: '带边框表格', link: '/table/BorderTable' },
            { text: '带状态表格', link: '/table/StateTable' },
            { text: '固定表头', link: '/table/HeightTable' },
            { text: '固定列', link: '/table/FixedTable' },
            { text: '多级表头', link: '/table/MultilevelHeadTable' },
            { text: '单选', link: '/table/CurrentRowTable' },
            { text: '多选', link: '/table/SelectionTable' },
            { text: '排序', link: '/table/SortTable' },
            { text: '格式化', link: '/table/FormatTable' },
            { text: '自定义列模板', link: '/table/SlotTable' },
            { text: '展开行', link: '/table/ExpandTable' },
            { text: '树形数据与懒加载', link: '/table/TreeTable' },
            { text: '表尾合计行', link: '/table/TotalTable' },
            { text: '合并行或列', link: '/table/MegerTable' },
            { text: '自定义索引', link: '/table/IndexTable' },
          ]
        },
        {
          text: '实际运用',
          collapsible: true,
          collapsed: false,
          items: [
            { text: '模板化模块', link: '/example/module' },
            { text: '正则列表', link: '/example/regexp' },
          ]
        },
      ]
    },
  }
})
