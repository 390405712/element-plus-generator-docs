import {
  ElButton,
  ElCascader,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
  ElDatePicker,
  ElEmpty,
  ElForm,
  ElFormItem,
  ElInput,
  ElInputNumber,
  ElLoading,
  ElOption,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElSelect,
  ElSwitch,
  ElTable,
  ElTableColumn,
  ElTimePicker,
  ElTreeSelect,
  ElUpload
} from "./chunk-FKERMNTG.js";
import "./chunk-AUE5ZQVH.js";
import {
  Fragment,
  createBaseVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  isVNode,
  mergeProps,
  onMounted,
  openBlock,
  ref,
  watch
} from "./chunk-YJNUPD57.js";

// node_modules/element-plus-generator/dist/utils-9d833f48.js
var c = (o, r, n, s) => {
  if (!Array.isArray(o))
    return [];
  const e = [];
  let i = [];
  return s && (i = Object.keys(s)), o.forEach((t) => {
    let u = {
      label: typeof t == "string" ? t : t[r],
      value: typeof t == "string" ? t : t[n]
    };
    s && i.forEach((l) => {
      u[l] = t[l];
    }), e.push(u);
  }), e;
};
var f = (o, r) => o.filter((n) => n.formItem.prop === r)[0] || {
  type: "input",
  formItem: {
    prop: "",
    label: ""
  }
};
var m = (o, r, n) => {
  var i;
  const s = {
    input: "输入",
    "input-number": "输入",
    select: "选择",
    "tree-select": "选择",
    cascader: "选择",
    radio: "选择",
    "radio-button": "选择",
    checkbox: "选择",
    "checkbox-button": "选择",
    datetime: "选择",
    time: "选择",
    switch: "选择",
    upload: "上传"
  }, e = f(o.formOption, o.field);
  if (Array.isArray(r) && r.length === 0)
    return Promise.reject(`请${s[e.type] || "完善"}${e.formItem.label}`);
  if (!r)
    return Promise.reject(`请${s[e.type] || "完善"}${e.formItem.label}`);
  if (!((i = e == null ? void 0 : e.formItem) != null && i.rules))
    return Promise.resolve();
  if (typeof e.formItem.rules.validator == "function")
    e.formItem.rules.validator(o, r).then(() => n()).catch((t) => {
      var u;
      return n(new Error(t !== "err" ? t : ((u = e == null ? void 0 : e.formItem.rules) == null ? void 0 : u.message) ?? ""));
    });
  else
    return e.formItem.rules.validator.test(r) ? Promise.resolve() : Promise.reject(e.formItem.rules.message);
};
var a = (o, r = []) => {
  let n = {};
  return o.forEach((s) => {
    var i, t;
    const e = typeof s == "string" ? s : s.formItem.prop;
    r.includes(e) || (n[e] = [{ required: true, validator: m, trigger: ((t = (i = s.formItem) == null ? void 0 : i.rules) == null ? void 0 : t.trigger) ?? "blur", formOption: o }]);
  }), n;
};
var g = {
  checkIphoneNum: (o, r) => r ? /(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(r) ? Promise.resolve() : Promise.reject("手机格式有误") : Promise.reject("请输入手机号")
};
var p = Object.freeze(Object.defineProperty({
  __proto__: null,
  CommonValidator: g,
  getLabel: f,
  getOption: c,
  getRules: a
}, Symbol.toStringTag, { value: "Module" }));

// node_modules/element-plus-generator/dist/index.js
(function() {
  try {
    var elementStyle = document.createElement("style");
    elementStyle.appendChild(document.createTextNode(".FormGenerator.FormGeneratorSearch{display:flex;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap;flex-direction:row;gap:15px 10px}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item{width:calc(25% - 8px);margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem{margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__label-wrap{display:none}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__content{flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline){padding-bottom:45px}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem{margin:0;height:64px;position:absolute;bottom:0;right:0;width:100%;box-shadow:1px 2px 10px #9ab7ff80;z-index:1;z-index:11;padding:0 16px;box-sizing:border-box}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem .el-form-item__content{display:flex;justify-content:flex-end;align-items:center;flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .el-form-item__content>div{width:100%}.FormGenerator .searchItem{flex-grow:1;flex-shrink:0}.FormGenerator .searchItem .el-form-item__content{justify-content:flex-end}.FormGenerator .el-select,.FormGenerator .el-input,.FormGenerator .el-cascader,.FormGenerator .el-date-editor.el-input,.FormGenerator .el-date-editor.el-input__wrapper,.TableGenerator .el-scrollbar__view{width:100%}"));
    document.head.appendChild(elementStyle);
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
var ze = defineComponent({
  name: "TableGenerator",
  setup(v, {
    expose: $,
    attrs: n,
    slots: u,
    emit: s
  }) {
    const a2 = n;
    let g2, y = new Date().getTime(), E = ref(false), k = ref(0);
    return onMounted(() => {
      watch(() => a2.loading, (x) => {
        x ? g2 = ElLoading.service({
          target: `.el-table-${y}`
        }) : g2 == null || g2.close();
      }, {
        immediate: true
      }), watch(() => a2.data, (x) => {
        if (!(u != null && u.operation) || x.length === 0)
          return E.value = true;
        E.value = false, setTimeout(() => {
          let _ = 0;
          document.querySelectorAll(".content-wrapper-width").forEach((C) => {
            C.offsetWidth > _ && (_ = C.offsetWidth);
          }), k.value = _ > 0 ? _ + 32 : "auto", console.log(k.value), E.value = true;
        });
      }, {
        immediate: true
      });
    }), () => {
      function x(w) {
        return w.map((e) => ["selection", "index", "expand"].includes(e.type) ? createVNode(ElTableColumn, mergeProps({
          type: e.type
        }, e), {
          ...e == null ? void 0 : e.slot
        }) : createVNode(ElTableColumn, mergeProps({
          "show-overflow-tooltip": true,
          align: "left"
        }, e), {
          default: (c2) => {
            var h;
            return e.children && e.children.length > 0 ? x(e.children) : u[e.prop] ? createVNode(Fragment, null, [(h = u[e.prop]) == null ? void 0 : h.call(u, {
              $index: c2.$index,
              row: c2.row
            })]) : e.formatter ? createVNode(Fragment, null, [e.formatter({
              $index: c2.$index,
              row: c2.row
            }) ?? "-"]) : createVNode(Fragment, null, [c2.row[e.prop] ?? "-"]);
          },
          ...e == null ? void 0 : e.slot
        }));
      }
      function _() {
        return createVNode(ElTable, mergeProps({
          stripe: true
        }, a2, {
          class: `TableGenerator el-table-${y}`
        }), {
          default: () => [x(a2.tableOption), u != null && u.operation ? createVNode(ElTableColumn, {
            fixed: "right",
            label: "操作",
            width: k.value
          }, {
            default: (w) => {
              var e;
              return createVNode("div", {
                class: "content-wrapper"
              }, [(e = u.operation) == null ? void 0 : e.call(u, {
                $index: w.$index,
                row: w.row
              })]);
            }
          }) : ""],
          empty: () => u != null && u.empty ? u == null ? void 0 : u.empty() : createVNode(ElEmpty, {
            description: "暂无数据"
          }, null),
          append: () => u != null && u.append ? u == null ? void 0 : u.append() : ""
        });
      }
      function C() {
        return createVNode(ElTable, mergeProps(n, {
          class: `TableGenerator el-table-${y}`
        }), {
          default: () => [createVNode(ElTableColumn, {
            fixed: "right"
          }, {
            default: (w) => {
              var e;
              return createVNode("div", {
                style: "display:inline-block;opacity:0",
                class: "content-wrapper content-wrapper-width"
              }, [(e = u.operation) == null ? void 0 : e.call(u, {
                $index: w.$index,
                row: w.row
              })]);
            }
          })]
        });
      }
      return createVNode(Fragment, null, [E.value ? _() : C()]);
    };
  }
});
var G = (v, $) => {
  let n = v.__vccOpts || v;
  for (let [u, s] of $)
    n[u] = s;
  return n;
};
var he = {
  name: "ArrowDown"
};
var _e = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
var ve = createBaseVNode("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1);
var ne = [
  ve
];
function we(v, $, n, u, s, a2) {
  return openBlock(), createElementBlock("svg", _e, ne);
}
var be = G(he, [["render", we], ["__file", "arrow-down.vue"]]);
var se = {
  name: "ArrowUp"
};
var ge = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
var ye = createBaseVNode("path", {
  fill: "currentColor",
  d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
}, null, -1);
var Ee = [
  ye
];
function xe(v, $, n, u, s, a2) {
  return openBlock(), createElementBlock("svg", ge, Ee);
}
var Ve = G(se, [["render", xe], ["__file", "arrow-up.vue"]]);
var $e = {
  name: "Refresh"
};
var ke = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
var Ce = createBaseVNode("path", {
  fill: "currentColor",
  d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
}, null, -1);
var De = [
  Ce
];
function Ue(v, $, n, u, s, a2) {
  return openBlock(), createElementBlock("svg", ke, De);
}
var Ye = G($e, [["render", Ue], ["__file", "refresh.vue"]]);
var me = {
  name: "Search"
};
var Fe = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
var Me = createBaseVNode("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
}, null, -1);
var Te = [
  Me
];
function pe(v, $, n, u, s, a2) {
  return openBlock(), createElementBlock("svg", Fe, Te);
}
var Ge = G(me, [["render", pe], ["__file", "search.vue"]]);
function Se(v) {
  return typeof v == "function" || Object.prototype.toString.call(v) === "[object Object]" && !isVNode(v);
}
var Pe = defineComponent({
  name: "FormGenerator",
  setup(v, {
    expose: $,
    attrs: n,
    slots: u,
    emit: s
  }) {
    const a2 = n, g2 = ref(), y = ref(false), E = {
      labelWidth: a2.labelWidth || "auto",
      column: isNaN(a2.column) ? 4 : a2.column >= 4 ? a2.column : 4
    }, k = {
      submit: () => {
        g2.value.validate((_) => {
          _ && s("submit");
        });
      },
      reset: () => {
        g2.value.resetFields(), s("submit", "init");
      }
    };
    function x(_) {
      y.value = _, a2.formOption.forEach((C, w) => {
        w > E.column - 2 && (C.show = _);
      });
    }
    return a2.formOption.length >= E.column - 2 && (a2 == null ? void 0 : a2.type) === "search" && x(false), $(() => ({
      ...g2.value,
      ...k
    })), () => {
      function _() {
        let e = {
          ...a2
        };
        return delete e.model, delete e.formOption, a2.formOption.forEach((c2) => {
          var h, V, U;
          (h = c2 == null ? void 0 : c2.formItem) != null && h.rules && !((U = (V = c2 == null ? void 0 : c2.formItem) == null ? void 0 : V.rules) != null && U.hasOwnProperty("trigger")) && (c2.formItem.rules.trigger = "blur");
        }), createVNode(ElForm, mergeProps({
          class: `FormGenerator ${(a2 == null ? void 0 : a2.type) === "search" ? "FormGeneratorSearch" : ""} ${(a2 == null ? void 0 : a2.type) === "dialog" ? "FormGeneratorDialog" : ""}`,
          inline: (a2 == null ? void 0 : a2.type) === "search",
          "validate-on-rule-change": false
        }, E, e, {
          ref: g2
        }), {
          default: () => [a2.formOption.map((c2) => {
            let h;
            if (!(c2.hasOwnProperty("show") && c2.show === false))
              return createVNode(ElFormItem, c2.formItem, Se(h = C(c2)) ? h : {
                default: () => [h]
              });
          }), e.disabled === true || e.noFooter || !e.onSubmit ? "" : createVNode(ElFormItem, {
            class: `btnItem ${y.value ? "searchItem" : ""}`
          }, {
            default: () => u != null && u.default ? createVNode(Fragment, null, [u.default()[0].children]) : (a2 == null ? void 0 : a2.type) === "search" ? w() : createVNode(Fragment, null, [createVNode(ElButton, {
              onClick: (c2) => {
                function h(V) {
                  return V.parentElement.className !== "el-dialog" ? h(V.parentElement) : V.parentElement;
                }
                h(c2.target).querySelector(".el-dialog__headerbtn").click();
              }
            }, {
              default: () => [createTextVNode("取消")]
            }), createVNode(ElButton, {
              type: "primary",
              onClick: k.submit
            }, {
              default: () => [createTextVNode("确定")]
            })]),
            label: () => ""
          })]
        });
      }
      function C(e) {
        var c2, h, V, U, S, B, A, N;
        switch (e.type) {
          case "input":
            return createVNode(ElInput, mergeProps({
              clearable: true,
              maxlength: 30
            }, e == null ? void 0 : e.control, {
              modelValue: a2.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a2.model[e.formItem.prop] = r
            }), {
              ...(c2 = e == null ? void 0 : e.control) == null ? void 0 : c2.slot
            });
          case "input-number":
            return createVNode(ElInputNumber, mergeProps({
              min: 0,
              max: 100
            }, e == null ? void 0 : e.control, {
              modelValue: a2.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a2.model[e.formItem.prop] = r
            }), null);
          case "select":
            return createVNode(ElSelect, mergeProps({
              clearable: true
            }, e == null ? void 0 : e.control, {
              modelValue: a2.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a2.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r;
                return [(r = e == null ? void 0 : e.control) == null ? void 0 : r.option.map((d) => createVNode(ElOption, mergeProps(d, {
                  key: d.value
                }), {
                  ...d == null ? void 0 : d.slot
                }))];
              }
            });
          case "tree-select":
            return createVNode(ElTreeSelect, mergeProps({
              clearable: true
            }, e == null ? void 0 : e.control, {
              modelValue: a2.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a2.model[e.formItem.prop] = r
            }), {
              ...(h = e == null ? void 0 : e.control) == null ? void 0 : h.slot
            });
          case "cascader":
            return createVNode(ElCascader, mergeProps(e == null ? void 0 : e.control, {
              modelValue: a2.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a2.model[e.formItem.prop] = r
            }), null);
          case "radio":
            return createVNode(ElRadioGroup, mergeProps(e == null ? void 0 : e.control, {
              modelValue: a2.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a2.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r;
                return [(r = e == null ? void 0 : e.control) == null ? void 0 : r.option.map((d) => createVNode(ElRadio, mergeProps(d, {
                  label: d.value,
                  key: d.label
                }), {
                  default: () => [d.label],
                  ...d == null ? void 0 : d.slot
                }))];
              }
            });
          case "radio-button":
            return createVNode(ElRadioGroup, mergeProps(e == null ? void 0 : e.control, {
              modelValue: a2.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a2.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r;
                return [(r = e == null ? void 0 : e.control) == null ? void 0 : r.option.map((d) => createVNode(ElRadioButton, mergeProps(d, {
                  label: d.value,
                  key: d.label
                }), {
                  default: () => [d.label],
                  ...d == null ? void 0 : d.slot
                }))];
              }
            });
          case "checkbox":
            return createVNode(ElCheckboxGroup, mergeProps(e == null ? void 0 : e.control, {
              modelValue: a2.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a2.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r;
                return [(r = e == null ? void 0 : e.control) == null ? void 0 : r.option.map((d) => createVNode(ElCheckbox, mergeProps(d, {
                  label: d.value,
                  key: d.label
                }), {
                  default: () => [d.label],
                  ...d == null ? void 0 : d.slot
                }))];
              }
            });
          case "checkbox-button":
            return createVNode(ElCheckboxGroup, mergeProps(e == null ? void 0 : e.control, {
              modelValue: a2.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a2.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r;
                return [(r = e == null ? void 0 : e.control) == null ? void 0 : r.option.map((d) => createVNode(ElCheckboxButton, mergeProps(d, {
                  label: d.value,
                  key: d.label
                }), {
                  default: () => [d.label],
                  ...d == null ? void 0 : d.slot
                }))];
              }
            });
          case "datetime":
            const z = {
              datetimerange: "YYYY-MM-DD hh:mm:ss",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD hh:mm:ss",
              date: "YYYY-MM-DD"
            }[((V = e == null ? void 0 : e.control) == null ? void 0 : V.type) || "date"];
            return createVNode(ElDatePicker, mergeProps({
              clearable: true,
              format: z,
              "value-format": z
            }, e == null ? void 0 : e.control, {
              modelValue: a2.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a2.model[e.formItem.prop] = r
            }), {
              ...(U = e == null ? void 0 : e.control) == null ? void 0 : U.slot
            });
          case "time":
            return createVNode(ElTimePicker, mergeProps({
              clearable: true
            }, e == null ? void 0 : e.control, {
              modelValue: a2.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a2.model[e.formItem.prop] = r
            }), {
              ...(S = e == null ? void 0 : e.control) == null ? void 0 : S.slot
            });
          case "switch":
            return createVNode(ElSwitch, mergeProps(e == null ? void 0 : e.control, {
              modelValue: a2.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a2.model[e.formItem.prop] = r
            }), {
              ...(B = e == null ? void 0 : e.control) == null ? void 0 : B.slot
            });
          case "upload":
            return createVNode(ElUpload, mergeProps(e == null ? void 0 : e.control, {
              "file-list": a2.model[e.formItem.prop],
              "onUpdate:file-list": (r) => a2.model[e.formItem.prop] = r
            }), {
              default: () => a2.disabled ? "" : createVNode(ElButton, {
                type: "primary"
              }, {
                default: () => [createTextVNode("上传文件")]
              }),
              ...(A = e == null ? void 0 : e.control) == null ? void 0 : A.slot
            });
          case "txt":
            return createVNode(Fragment, null, [a2.model[e.formItem.prop]]);
          case "slot":
            return createVNode(Fragment, null, [(N = u[e.formItem.prop]) == null ? void 0 : N.call(u, {
              form: a2.model,
              data: a2.model[e.formItem.prop]
            })]);
        }
      }
      function w() {
        return createVNode(Fragment, null, [createVNode(ElButton, {
          type: "primary",
          onClick: k.submit,
          icon: Ge
        }, {
          default: () => [createTextVNode("搜索")]
        }), createVNode(ElButton, {
          onClick: k.reset,
          icon: Ye
        }, {
          default: () => [createTextVNode("重置")]
        }), a2.type === "search" && a2.formOption.length > E.column - 1 ? createVNode(Fragment, null, [createVNode(ElButton, {
          text: true,
          type: "primary",
          onClick: () => {
            x(!y.value);
          },
          icon: y.value ? Ve : be
        }, {
          default: () => [y.value ? "收起" : "展开"]
        })]) : ""]);
      }
      return _();
    };
  }
});
export {
  Pe as FormGenerator,
  p as GeneratorUtils,
  ze as TableGenerator
};
/*! Bundled license information:

element-plus-generator/dist/index.js:
  (*! Element Plus Icons Vue v2.0.10 *)
*/
//# sourceMappingURL=element-plus-generator.js.map
