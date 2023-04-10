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
<<< ./../element-plus-generator-demo/src/views/Example/index.vue
:::

## Form.vue（搜索表单组件）
:::details 点击查看
<<< ./../element-plus-generator-demo/src/views/Example/components/Form.vue
:::

## Table.vue（列表组件）
:::details 点击查看
<<< ./../element-plus-generator-demo/src/views/Example/components/Table.vue
:::

## AddDialog.vue（新增、编辑表单组件）

:::details 点击查看
<<< ./../element-plus-generator-demo/src/views/Example/components/AddDialog.vue
:::

## Page.vue（分页组件）

:::details 点击查看
<<< ./../element-plus-generator-demo/src/components/Page.vue
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
