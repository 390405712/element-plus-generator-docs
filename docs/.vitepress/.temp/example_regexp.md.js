import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { defineComponent, ref, resolveComponent, mergeProps, unref, createSlots, renderList, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, createCommentVNode, useSSRContext } from "vue";
import { GeneratorUtils, FormGenerator } from "element-plus-generator";
import { ElMessage } from "element-plus";
import Regexps from "element-plus-generator/dist/regexpToArr.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let form = ref({});
    let formOption = ref([]);
    Regexps.forEach((item, index) => {
      formOption.value.push({
        type: "slot",
        formItem: {
          prop: item.key,
          label: item.title,
          rules: {
            require: true,
            trigger: "change",
            validator: item.rule
          }
        },
        control: {
          ...item
        }
      });
    });
    const rules = GeneratorUtils.getRules(formOption.value);
    function copy(val, key) {
      if (key) {
        form.value[key] = val;
      } else {
        navigator.clipboard.writeText(val);
        ElMessage.success(`已复制:${val}`);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_input = resolveComponent("el-input");
      const _component_el_tag = resolveComponent("el-tag");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-6c80ba7a>`);
      _push(ssrRenderComponent(unref(FormGenerator), {
        "label-position": "top",
        ref: "formRef",
        model: unref(form),
        formOption: unref(formOption),
        rules: unref(rules)
      }, createSlots({ _: 2 }, [
        renderList(unref(formOption), (item, index) => {
          return {
            name: item.formItem.prop,
            fn: withCtx((scope, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_el_input, {
                  modelValue: unref(form)[item.formItem.prop],
                  "onUpdate:modelValue": ($event) => unref(form)[item.formItem.prop] = $event
                }, null, _parent2, _scopeId));
                _push2(`<div class="examples" data-v-6c80ba7a${_scopeId}><div class="tag-container no-wrap" data-v-6c80ba7a${_scopeId}><div data-v-6c80ba7a${_scopeId}>key</div>`);
                _push2(ssrRenderComponent(_component_el_tag, {
                  onClick: ($event) => copy(item.control.key)
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.control.key)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.control.key), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div><div class="tag-container no-wrap" data-v-6c80ba7a${_scopeId}><div data-v-6c80ba7a${_scopeId}>正则</div>`);
                _push2(ssrRenderComponent(_component_el_tag, {
                  onClick: ($event) => copy(item.control.rule)
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.control.rule)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.control.rule), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div><div class="tag-container" data-v-6c80ba7a${_scopeId}><div data-v-6c80ba7a${_scopeId}>例子</div><!--[-->`);
                ssrRenderList(item.control.examples, (i, itemIndex) => {
                  _push2(ssrRenderComponent(_component_el_tag, {
                    type: "success",
                    onClick: ($event) => copy(i, item.formItem.prop),
                    key: itemIndex
                  }, {
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(i)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(i), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
                if (item.control.counterExamples) {
                  _push2(`<div class="tag-container" data-v-6c80ba7a${_scopeId}><div data-v-6c80ba7a${_scopeId}>反例</div><!--[-->`);
                  ssrRenderList(item.control.counterExamples, (i, itemIndex) => {
                    _push2(ssrRenderComponent(_component_el_tag, {
                      type: "danger",
                      onClick: ($event) => copy(i, item.formItem.prop),
                      key: itemIndex
                    }, {
                      default: withCtx((_, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(i)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(i), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  });
                  _push2(`<!--]--></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                return [
                  createVNode(_component_el_input, {
                    modelValue: unref(form)[_ctx.item.formItem.prop],
                    "onUpdate:modelValue": ($event) => unref(form)[_ctx.item.formItem.prop] = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("div", { class: "examples" }, [
                    createVNode("div", { class: "tag-container no-wrap" }, [
                      createVNode("div", null, "key"),
                      createVNode(_component_el_tag, {
                        onClick: ($event) => copy(_ctx.item.control.key)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.item.control.key), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    createVNode("div", { class: "tag-container no-wrap" }, [
                      createVNode("div", null, "正则"),
                      createVNode(_component_el_tag, {
                        onClick: ($event) => copy(_ctx.item.control.rule)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.item.control.rule), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    createVNode("div", { class: "tag-container" }, [
                      createVNode("div", null, "例子"),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.item.control.examples, (i, itemIndex) => {
                        return openBlock(), createBlock(_component_el_tag, {
                          type: "success",
                          onClick: ($event) => copy(i, _ctx.item.formItem.prop),
                          key: itemIndex
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(i), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"]);
                      }), 128))
                    ]),
                    _ctx.item.control.counterExamples ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "tag-container"
                    }, [
                      createVNode("div", null, "反例"),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.item.control.counterExamples, (i, itemIndex) => {
                        return openBlock(), createBlock(_component_el_tag, {
                          type: "danger",
                          onClick: ($event) => copy(i, _ctx.item.formItem.prop),
                          key: itemIndex
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(i), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"]);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ])
                ];
              }
            })
          };
        })
      ]), _parent));
      _push(`</div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_6c80ba7a_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../element-plus-generator-demo/src/views/Regexp/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Regexp = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6c80ba7a"]]);
const __pageData = JSON.parse('{"title":"正则列表","description":"","frontmatter":{},"headers":[],"relativePath":"example/regexp.md"}');
const __default__ = { name: "example/regexp.md" };
const _sfc_main = Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="正则列表" tabindex="-1">正则列表 <a class="header-anchor" href="#正则列表" aria-hidden="true">#</a></h1><p>正则来源： <a href="https://github.com/any86/any-rule" target="_blank" rel="noreferrer">any-rule</a></p><p>引入方式例如：<code>import { RegExpMobilePhoneNunber } from &#39;element-plus-generator/dist/regexp&#39;</code></p>`);
      _push(ssrRenderComponent(Regexp, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("example/regexp.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
