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
} from "./chunk-KRXT55HS.js";
import {
  Fragment,
  createBaseVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  isVNode,
  mergeProps,
  nextTick,
  openBlock,
  ref,
  watch
} from "./chunk-4S7LXNVO.js";
import "./chunk-DFKQJ226.js";

// node_modules/element-plus-generator/dist/utils-43a47692.js
var c = (o, r, n, s) => {
  if (!Array.isArray(o))
    return [];
  const e = [];
  let i = [];
  return s && (i = Object.keys(s)), o.forEach((t) => {
    let l = {
      label: typeof t == "string" ? t : t[r],
      value: typeof t == "string" ? t : t[n]
    };
    s && i.forEach((u) => {
      l[u] = t[u];
    }), e.push(l);
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
  if (console.log(11111111111), typeof e.formItem.rules.validator == "function")
    e.formItem.rules.validator(o, r).then(() => n()).catch((t) => {
      var l;
      return n(new Error(t !== "err" ? t : ((l = e == null ? void 0 : e.formItem.rules) == null ? void 0 : l.message) ?? ""));
    });
  else
    return e.formItem.rules.validator.test(r) ? Promise.resolve() : Promise.reject(e.formItem.rules.message || "格式有误");
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
    elementStyle.appendChild(document.createTextNode(".FormGenerator.FormGeneratorSearch{display:flex;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap;flex-direction:row;gap:15px 10px}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item{width:calc(25% - 8px);margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem{margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__label-wrap{display:none}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__content{flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline){padding-bottom:45px}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem{margin:0;height:64px;position:absolute;bottom:0;right:0;width:100%;box-shadow:1px 2px 10px #9ab7ff80;z-index:1;z-index:11;padding:0 16px;box-sizing:border-box}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem .el-form-item__content{display:flex;justify-content:flex-end;align-items:center;flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .el-form-item__content>div{width:100%}.FormGenerator .searchItem{flex-grow:1;flex-shrink:0}.FormGenerator .searchItem .el-form-item__content{justify-content:flex-end}.FormGenerator .expandBtn i{transition:all .3s}.FormGenerator .expandBtn.down i{transform:rotate(180deg)}.FormGenerator .el-select,.FormGenerator .el-input,.FormGenerator .el-cascader,.FormGenerator .el-date-editor.el-input,.FormGenerator .el-date-editor.el-input__wrapper,.TableGenerator .el-scrollbar__view{width:100%}"));
    document.head.appendChild(elementStyle);
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
var Be = defineComponent({
  name: "TableGenerator",
  setup(_, {
    expose: C,
    attrs: w,
    slots: u,
    emit: x
  }) {
    const a2 = w;
    let g2, E = new Date().getTime(), V = ref(false), D = ref(0);
    return watch(() => a2.loading, (s) => {
      s ? nextTick(() => {
        g2 = ElLoading.service({
          target: `.el-table-${E}`
        });
      }) : g2 == null || g2.close();
    }, {
      immediate: true
    }), watch(() => a2.data, (s) => {
      if (!(u != null && u.operation) || s.length === 0)
        return V.value = true;
      V.value = false, nextTick(() => {
        let v = 0;
        document.querySelectorAll(".content-wrapper-width").forEach(($) => {
          $.offsetWidth > v && (v = $.offsetWidth);
        }), D.value = v > 0 ? v + 32 : "auto", V.value = true;
      });
    }, {
      immediate: true
    }), () => {
      function s(b) {
        return b.map((e) => ["selection", "index", "expand"].includes(e.type) ? createVNode(ElTableColumn, mergeProps({
          type: e.type
        }, e), {
          ...e == null ? void 0 : e.slot
        }) : createVNode(ElTableColumn, mergeProps({
          "show-overflow-tooltip": true,
          align: "left"
        }, e), {
          default: (c2) => {
            var t;
            return e.children && Array.isArray(e.children) && e.children.length > 0 ? s(e.children) : u[e.prop] ? createVNode(Fragment, null, [(t = u[e.prop]) == null ? void 0 : t.call(u, {
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
      function v() {
        return createVNode(ElTable, mergeProps({
          stripe: true
        }, a2, {
          class: `TableGenerator el-table-${E}`
        }), {
          default: () => [s(a2.tableOption), u != null && u.operation ? createVNode(ElTableColumn, {
            fixed: "right",
            label: "操作",
            width: D.value
          }, {
            default: (b) => {
              var e;
              return createVNode("div", {
                class: "content-wrapper"
              }, [(e = u.operation) == null ? void 0 : e.call(u, {
                $index: b.$index,
                row: b.row
              })]);
            }
          }) : ""],
          empty: () => u != null && u.empty ? u == null ? void 0 : u.empty() : createVNode(ElEmpty, {
            description: "暂无数据"
          }, null),
          append: () => u != null && u.append ? u == null ? void 0 : u.append() : ""
        });
      }
      function $() {
        return createVNode(ElTable, mergeProps(w, {
          class: `TableGenerator el-table-${E}`
        }), {
          default: () => [createVNode(ElTableColumn, {
            fixed: "right"
          }, {
            default: (b) => {
              var e;
              return createVNode("div", {
                style: "display:inline-block;opacity:0",
                class: "content-wrapper content-wrapper-width"
              }, [(e = u.operation) == null ? void 0 : e.call(u, {
                $index: b.$index,
                row: b.row
              })]);
            }
          })]
        });
      }
      return createVNode(Fragment, null, [V.value ? v() : $()]);
    };
  }
});
var A = (_, C) => {
  let w = _.__vccOpts || _;
  for (let [u, x] of C)
    w[u] = x;
  return w;
};
var ve = {
  name: "ArrowUp"
};
var _e = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
var be = createBaseVNode("path", {
  fill: "currentColor",
  d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
}, null, -1);
var we = [
  be
];
function ne(_, C, w, u, x, a2) {
  return openBlock(), createElementBlock("svg", _e, we);
}
var ye = A(ve, [["render", ne], ["__file", "arrow-up.vue"]]);
var ge = {
  name: "Refresh"
};
var Ee = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
var se = createBaseVNode("path", {
  fill: "currentColor",
  d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
}, null, -1);
var xe = [
  se
];
function Ve(_, C, w, u, x, a2) {
  return openBlock(), createElementBlock("svg", Ee, xe);
}
var $e = A(ge, [["render", Ve], ["__file", "refresh.vue"]]);
var ke = {
  name: "Search"
};
var Ce = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
var De = createBaseVNode("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
}, null, -1);
var Ue = [
  De
];
function Ye(_, C, w, u, x, a2) {
  return openBlock(), createElementBlock("svg", Ce, Ue);
}
var Fe = A(ke, [["render", Ye], ["__file", "search.vue"]]);
function Te(_) {
  return typeof _ == "function" || Object.prototype.toString.call(_) === "[object Object]" && !isVNode(_);
}
var Ae = defineComponent({
  name: "FormGenerator",
  setup(_, {
    expose: C,
    attrs: w,
    slots: u,
    emit: x
  }) {
    const a2 = w, g2 = ref(), E = ref(false), V = isNaN(a2.column) ? 4 : a2.column >= 4 ? a2.column : 4, D = {
      submit: () => {
        g2.value.validate((v) => {
          v && x("submit");
        });
      },
      reset: () => {
        g2.value.resetFields(), x("submit", "init");
      }
    };
    function s(v) {
      E.value = v, a2.formOption.forEach(($, b) => {
        b > V - 2 && ($.show = v);
      });
    }
    return a2.formOption.length >= V - 2 && (a2 == null ? void 0 : a2.type) === "search" && s(false), C(() => ({
      ...g2.value,
      ...D
    })), () => {
      function v() {
        let e = {
          ...a2
        };
        return delete e.model, delete e.formOption, a2.formOption.forEach((c2) => {
          var t, n, k;
          (t = c2 == null ? void 0 : c2.formItem) != null && t.rules && !((k = (n = c2 == null ? void 0 : c2.formItem) == null ? void 0 : n.rules) != null && k.hasOwnProperty("trigger")) && (c2.formItem.rules.trigger = "blur");
        }), createVNode(ElForm, mergeProps({
          class: `FormGenerator ${(a2 == null ? void 0 : a2.type) === "search" ? "FormGeneratorSearch" : ""} ${(a2 == null ? void 0 : a2.type) === "dialog" ? "FormGeneratorDialog" : ""}`,
          inline: (a2 == null ? void 0 : a2.type) === "search",
          "validate-on-rule-change": false,
          "label-width": a2.labelWidth || "auto"
        }, e, {
          ref: g2
        }), {
          default: () => [a2.formOption.map((c2) => {
            let t;
            if (!(c2.hasOwnProperty("show") && c2.show === false))
              return createVNode(ElFormItem, mergeProps(c2.formItem, {
                key: c2.formItem.prop
              }), Te(t = $(c2)) ? t : {
                default: () => [t]
              });
          }), e.disabled === true || e.noFooter || !e.onSubmit ? "" : createVNode(ElFormItem, {
            class: `btnItem ${E.value ? "searchItem" : ""}`
          }, {
            default: () => u != null && u.default ? createVNode(Fragment, null, [u.default()[0].children]) : (a2 == null ? void 0 : a2.type) === "search" ? b() : createVNode(Fragment, null, [(a2 == null ? void 0 : a2.type) === "dialog" ? createVNode(ElButton, {
              onClick: (c2) => {
                var n, k;
                function t(U) {
                  return U.parentElement.className !== "el-dialog" ? t(U.parentElement) : U.parentElement;
                }
                (k = (n = t(c2.target).querySelector(".el-dialog__headerbtn")) == null ? void 0 : n.click) == null || k.call(n);
              }
            }, {
              default: () => [createTextVNode("取消")]
            }) : "", createVNode(ElButton, {
              type: "primary",
              onClick: D.submit
            }, {
              default: () => [createTextVNode("确定")]
            })]),
            label: () => ""
          })]
        });
      }
      function $(e) {
        var c2, t, n, k, U, N, z, P, R;
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
              ...(t = e == null ? void 0 : e.control) == null ? void 0 : t.slot
            });
          case "cascader":
            return createVNode(ElCascader, mergeProps(e == null ? void 0 : e.control, {
              modelValue: a2.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a2.model[e.formItem.prop] = r
            }), {
              ...(n = e == null ? void 0 : e.control) == null ? void 0 : n.slot
            });
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
            const j = {
              datetimerange: "YYYY-MM-DD hh:mm:ss",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD hh:mm:ss",
              date: "YYYY-MM-DD"
            }[((k = e == null ? void 0 : e.control) == null ? void 0 : k.type) || "date"];
            return createVNode(ElDatePicker, mergeProps({
              clearable: true,
              format: j,
              "value-format": j
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
              ...(N = e == null ? void 0 : e.control) == null ? void 0 : N.slot
            });
          case "switch":
            return createVNode(ElSwitch, mergeProps(e == null ? void 0 : e.control, {
              modelValue: a2.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a2.model[e.formItem.prop] = r
            }), {
              ...(z = e == null ? void 0 : e.control) == null ? void 0 : z.slot
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
              ...(P = e == null ? void 0 : e.control) == null ? void 0 : P.slot
            });
          case "txt":
            return createVNode(Fragment, null, [a2.model[e.formItem.prop]]);
          case "slot":
            return createVNode(Fragment, null, [(R = u[e.formItem.prop]) == null ? void 0 : R.call(u, {
              form: a2.model,
              data: a2.model[e.formItem.prop]
            })]);
        }
      }
      function b() {
        return createVNode(Fragment, null, [createVNode(ElButton, {
          type: "primary",
          onClick: D.submit,
          icon: Fe
        }, {
          default: () => [createTextVNode("搜索")]
        }), createVNode(ElButton, {
          onClick: D.reset,
          icon: $e
        }, {
          default: () => [createTextVNode("重置")]
        }), a2.type === "search" && a2.formOption.length > V - 1 ? createVNode(Fragment, null, [createVNode(ElButton, {
          text: true,
          type: "primary",
          class: `expandBtn ${E.value ? "up" : "down"}`,
          onClick: () => {
            s(!E.value);
          },
          icon: ye
        }, {
          default: () => [E.value ? "收起" : "展开"]
        })]) : ""]);
      }
      return v();
    };
  }
});
export {
  Ae as FormGenerator,
  p as GeneratorUtils,
  Be as TableGenerator
};
/*! Bundled license information:

element-plus-generator/dist/index.js:
  (*! Element Plus Icons Vue v2.0.10 *)
*/
//# sourceMappingURL=element-plus-generator.js.map
