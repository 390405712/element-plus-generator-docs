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
  ElStep,
  ElSteps,
  ElSwitch,
  ElTable,
  ElTableColumn,
  ElTimePicker,
  ElTreeSelect,
  ElUpload,
  arrow_up_default,
  refresh_default,
  search_default
} from "./chunk-XHVEUFGG.js";
import {
  defineComponent,
  nextTick,
  ref,
  watch
} from "./chunk-4S7LXNVO.js";
import {
  __export
} from "./chunk-4EOJPDL2.js";

// ../element-plus-generator-demo/node_modules/element-plus-generator/lib/TableGenerator.tsx
var TableGenerator_default = defineComponent({
  name: "TableGenerator",
  setup(props, { expose, attrs, slots, emit }) {
    const RefTableGenerator = ref();
    const _attrs = attrs;
    let loading;
    let el = (/* @__PURE__ */ new Date()).getTime();
    let show = ref(false);
    let width = ref(0);
    watch(() => _attrs.loading, (val) => {
      if (val) {
        nextTick(() => {
          loading = ElLoading.service({
            target: `.el-table-${el}`
          });
        });
      } else {
        loading == null ? void 0 : loading.close();
      }
    }, {
      immediate: true
    });
    watch(() => _attrs.data, (val) => {
      if (!(slots == null ? void 0 : slots.operation) || val.length === 0)
        return show.value = true;
      show.value = false;
      nextTick(() => {
        let w = 0;
        document.querySelectorAll(".content-wrapper-width").forEach((i) => {
          if (i.offsetWidth > w)
            w = i.offsetWidth;
        });
        width.value = w > 0 ? w + 32 : "auto";
        show.value = true;
      });
    }, {
      immediate: true
    });
    expose(() => RefTableGenerator.value);
    return () => {
      function renderColumn(tableOption) {
        return tableOption.map((item) => {
          if (["selection", "index", "expand"].includes(item.type)) {
            return React.createElement(ElTableColumn, { type: item.type, ...item, "v-slots": { ...item == null ? void 0 : item.slots } });
          }
          return React.createElement(
            ElTableColumn,
            {
              "show-overflow-tooltip": true,
              align: "left",
              ...item,
              "v-slots": {
                default: (scope) => {
                  var _a;
                  return item.children && Array.isArray(item.children) && item.children.length > 0 ? renderColumn(item.children) : slots[item.prop] ? React.createElement(React.Fragment, null, (_a = slots[item.prop]) == null ? void 0 : _a.call(slots, { $index: scope.$index, row: scope.row })) : item.formatter ? React.createElement(React.Fragment, null, item.formatter({ $index: scope.$index, row: scope.row }) ?? "-") : React.createElement(React.Fragment, null, scope.row[item.prop] ?? "-");
                },
                ...item == null ? void 0 : item.slots
              }
            }
          );
        });
      }
      function renderTable() {
        return React.createElement(
          ElTable,
          {
            ref: RefTableGenerator,
            stripe: true,
            ..._attrs,
            class: `TableGenerator el-table-${el}`,
            "v-slots": {
              empty: () => (slots == null ? void 0 : slots.empty) ? slots == null ? void 0 : slots.empty() : React.createElement(ElEmpty, { description: "暂无数据" }),
              append: () => (slots == null ? void 0 : slots.append) ? slots == null ? void 0 : slots.append() : ""
            }
          },
          renderColumn(_attrs.tableOption),
          (slots == null ? void 0 : slots.operation) ? React.createElement(
            ElTableColumn,
            {
              fixed: "right",
              label: "操作",
              width: width.value,
              "v-slots": {
                default: (scope) => {
                  var _a;
                  return React.createElement("div", { class: "content-wrapper" }, (_a = slots.operation) == null ? void 0 : _a.call(slots, { $index: scope.$index, row: scope.row }));
                }
              }
            }
          ) : ""
        );
      }
      function renderOriginTable() {
        return React.createElement(
          ElTable,
          {
            ...attrs,
            class: `TableGenerator el-table-${el}`
          },
          React.createElement(
            ElTableColumn,
            {
              fixed: "right",
              "v-slots": {
                default: (scope) => {
                  var _a;
                  return React.createElement("div", { style: "display:inline-block;opacity:0", class: "content-wrapper content-wrapper-width" }, (_a = slots.operation) == null ? void 0 : _a.call(slots, { $index: scope.$index, row: scope.row }));
                }
              }
            }
          )
        );
      }
      return React.createElement(React.Fragment, null, show.value ? renderTable() : renderOriginTable());
    };
  }
});

// ../element-plus-generator-demo/node_modules/element-plus-generator/lib/FormGenerator.tsx
var FormGenerator_default = defineComponent({
  name: "FormGenerator",
  setup(props, { expose, attrs, slots, emit }) {
    const _attrs = attrs;
    const RefFormGenerator = ref();
    const $refs = {};
    const more = ref(false);
    const column = !isNaN(_attrs.column) ? _attrs.column >= 4 ? _attrs.column : 4 : 4;
    const form = {
      submit: () => {
        RefFormGenerator.value.validate((isValid) => {
          if (isValid)
            emit("submit");
        });
      },
      reset: () => {
        RefFormGenerator.value.resetFields();
        emit("submit", "init");
      }
    };
    function setShow(bool) {
      more.value = bool;
      _attrs.formOption.forEach((i, index) => {
        if (index > column - 2)
          i.show = bool;
      });
    }
    if (_attrs.formOption.length >= column - 2 && (_attrs == null ? void 0 : _attrs.type) === "search")
      setShow(false);
    expose(() => ({ ...RefFormGenerator.value, ...form, $refs }));
    return () => {
      function renderForm() {
        return React.createElement(ElForm, { class: `FormGenerator ${(_attrs == null ? void 0 : _attrs.type) === "search" ? "FormGeneratorSearch" : ""} ${(_attrs == null ? void 0 : _attrs.type) === "dialog" ? "FormGeneratorDialog" : ""}`, inline: (_attrs == null ? void 0 : _attrs.type) === "search" ? true : false, "validate-on-rule-change": false, "label-width": _attrs.labelWidth || "auto", ..._attrs, ref: RefFormGenerator }, _attrs.formOption.map((formOption) => {
          if (!(formOption.hasOwnProperty("show") && formOption.show === false))
            return React.createElement(ElFormItem, { ...formOption.formItem, key: formOption.formItem.prop }, renderControl(formOption));
        }), _attrs.disabled === true || _attrs.noFooter || !_attrs.onSubmit ? "" : React.createElement(
          ElFormItem,
          {
            class: `btnItem ${more.value ? "searchItem" : ""}`,
            "v-slots": {
              default: () => (slots == null ? void 0 : slots.default) ? React.createElement(React.Fragment, null, slots.default()[0].children) : (_attrs == null ? void 0 : _attrs.type) === "search" ? renderSearchItem() : React.createElement(React.Fragment, null, (_attrs == null ? void 0 : _attrs.type) === "dialog" ? React.createElement(ElButton, { onClick: (e) => {
                var _a, _b;
                function getDialogEl(el) {
                  if (!el.parentElement.classList.value.split(" ").includes("el-dialog"))
                    return getDialogEl(el.parentElement);
                  return el.parentElement;
                }
                (_b = (_a = getDialogEl(e.target).querySelector(".el-dialog__headerbtn")) == null ? void 0 : _a.click) == null ? void 0 : _b.call(_a);
              } }, "取消") : "", React.createElement(ElButton, { type: "primary", onClick: form.submit }, "确定")),
              label: () => ""
            }
          }
        ));
      }
      function renderControl(formOption) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        $refs[formOption.formItem.prop] = ref();
        switch (formOption.type) {
          case "input":
            return React.createElement(ElInput, { ref: $refs[formOption.formItem.prop], clearable: true, maxlength: 30, ...formOption == null ? void 0 : formOption.control, "v-model": _attrs.model[formOption.formItem.prop], "v-slots": { ...(_a = formOption == null ? void 0 : formOption.control) == null ? void 0 : _a.slots } });
            break;
          case "input-number":
            return React.createElement(ElInputNumber, { ref: $refs[formOption.formItem.prop], min: 0, max: 100, ...formOption == null ? void 0 : formOption.control, "v-model": _attrs.model[formOption.formItem.prop] });
            break;
          case "select":
            return React.createElement(ElSelect, { ref: $refs[formOption.formItem.prop], clearable: true, ...formOption == null ? void 0 : formOption.control, "v-model": _attrs.model[formOption.formItem.prop] }, ((_b = formOption == null ? void 0 : formOption.control) == null ? void 0 : _b.option) instanceof Array ? (_c = formOption == null ? void 0 : formOption.control) == null ? void 0 : _c.option.map((controlOptionItem) => React.createElement(ElOption, { ...controlOptionItem, "v-slots": { ...controlOptionItem == null ? void 0 : controlOptionItem.slots }, key: controlOptionItem.value })) : "");
            break;
          case "tree-select":
            return React.createElement(ElTreeSelect, { ref: $refs[formOption.formItem.prop], clearable: true, ...formOption == null ? void 0 : formOption.control, "v-model": _attrs.model[formOption.formItem.prop], "v-slots": { ...(_d = formOption == null ? void 0 : formOption.control) == null ? void 0 : _d.slots } });
            break;
          case "cascader":
            return React.createElement(ElCascader, { ref: $refs[formOption.formItem.prop], ...formOption == null ? void 0 : formOption.control, "v-model": _attrs.model[formOption.formItem.prop], "v-slots": { ...(_e = formOption == null ? void 0 : formOption.control) == null ? void 0 : _e.slots } });
            break;
          case "radio":
            return React.createElement(ElRadioGroup, { ref: $refs[formOption.formItem.prop], ...formOption == null ? void 0 : formOption.control, "v-model": _attrs.model[formOption.formItem.prop] }, ((_f = formOption == null ? void 0 : formOption.control) == null ? void 0 : _f.radioGroup) instanceof Array ? (_g = formOption == null ? void 0 : formOption.control) == null ? void 0 : _g.radioGroup.map((controlOptionItem) => React.createElement(ElRadio, { ...controlOptionItem, label: controlOptionItem.value, "v-slots": { ...controlOptionItem == null ? void 0 : controlOptionItem.slots }, key: controlOptionItem.label }, controlOptionItem.label)) : "");
            break;
          case "radio-button":
            return React.createElement(ElRadioGroup, { ref: $refs[formOption.formItem.prop], ...formOption == null ? void 0 : formOption.control, "v-model": _attrs.model[formOption.formItem.prop] }, ((_h = formOption == null ? void 0 : formOption.control) == null ? void 0 : _h.radioGroup) instanceof Array ? (_i = formOption == null ? void 0 : formOption.control) == null ? void 0 : _i.radioGroup.map((controlOptionItem) => React.createElement(ElRadioButton, { ...controlOptionItem, label: controlOptionItem.value, "v-slots": { ...controlOptionItem == null ? void 0 : controlOptionItem.slots }, key: controlOptionItem.label }, controlOptionItem.label)) : "");
            break;
          case "checkbox":
            return React.createElement(ElCheckboxGroup, { ref: $refs[formOption.formItem.prop], ...formOption == null ? void 0 : formOption.control, "v-model": _attrs.model[formOption.formItem.prop] }, ((_j = formOption == null ? void 0 : formOption.control) == null ? void 0 : _j.checkboxGroup) instanceof Array ? (_k = formOption == null ? void 0 : formOption.control) == null ? void 0 : _k.checkboxGroup.map((controlOptionItem) => React.createElement(ElCheckbox, { ...controlOptionItem, label: controlOptionItem.value, "v-slots": { ...controlOptionItem == null ? void 0 : controlOptionItem.slots }, key: controlOptionItem.label }, controlOptionItem.label)) : "");
            break;
          case "checkbox-button":
            return React.createElement(ElCheckboxGroup, { ref: $refs[formOption.formItem.prop], ...formOption == null ? void 0 : formOption.control, "v-model": _attrs.model[formOption.formItem.prop] }, ((_l = formOption == null ? void 0 : formOption.control) == null ? void 0 : _l.checkboxGroup) instanceof Array ? (_m = formOption == null ? void 0 : formOption.control) == null ? void 0 : _m.checkboxGroup.map((controlOptionItem) => React.createElement(ElCheckboxButton, { ...controlOptionItem, label: controlOptionItem.value, "v-slots": { ...controlOptionItem == null ? void 0 : controlOptionItem.slots }, key: controlOptionItem.label }, controlOptionItem.label)) : "");
            break;
          case "date-picker":
          case "date-time-picker":
            const formatEnum = {
              "datetimerange": "YYYY-MM-DD hh:mm:ss",
              "daterange": "YYYY-MM-DD",
              "datetime": "YYYY-MM-DD hh:mm:ss",
              "date": "YYYY-MM-DD"
            };
            const formatEnumVal = formatEnum[((_n = formOption == null ? void 0 : formOption.control) == null ? void 0 : _n.type) || "date"];
            return React.createElement(ElDatePicker, { ref: $refs[formOption.formItem.prop], clearable: true, format: formatEnumVal, "value-format": formatEnumVal, ...formOption == null ? void 0 : formOption.control, "v-model": _attrs.model[formOption.formItem.prop], "v-slots": { ...(_o = formOption == null ? void 0 : formOption.control) == null ? void 0 : _o.slots } });
            break;
          case "time-picker":
            return React.createElement(ElTimePicker, { ref: $refs[formOption.formItem.prop], clearable: true, ...formOption == null ? void 0 : formOption.control, "v-model": _attrs.model[formOption.formItem.prop] });
            break;
          case "switch":
            return React.createElement(ElSwitch, { ref: $refs[formOption.formItem.prop], ...formOption == null ? void 0 : formOption.control, "v-model": _attrs.model[formOption.formItem.prop] });
            break;
          case "upload":
            return React.createElement(
              ElUpload,
              {
                ref: $refs[formOption.formItem.prop],
                ...formOption == null ? void 0 : formOption.control,
                "v-model:file-list": _attrs.model[formOption.formItem.prop],
                "v-slots": {
                  default: () => _attrs.disabled ? "" : React.createElement(ElButton, { type: "primary" }, "上传文件"),
                  ...(_p = formOption == null ? void 0 : formOption.control) == null ? void 0 : _p.slots
                }
              }
            );
            break;
          case "slot":
            if (((_r = (_q = formOption == null ? void 0 : formOption.control) == null ? void 0 : _q.slots) == null ? void 0 : _r.default) && typeof ((_t = (_s = formOption == null ? void 0 : formOption.control) == null ? void 0 : _s.slots) == null ? void 0 : _t.default) === "function")
              return React.createElement(React.Fragment, null, (_v = (_u = formOption.control.slots).default) == null ? void 0 : _v.call(_u, { form: _attrs.model, data: _attrs.model[formOption.formItem.prop] }));
            if (slots[formOption.formItem.prop])
              return (_w = slots[formOption.formItem.prop]) == null ? void 0 : _w.call(slots, { form: _attrs.model, data: _attrs.model[formOption.formItem.prop] });
            return _attrs.model[formOption.formItem.prop];
            break;
        }
      }
      function renderSearchItem() {
        return React.createElement(React.Fragment, null, React.createElement(ElButton, { type: "primary", onClick: form.submit, icon: search_default }, "搜索"), React.createElement(ElButton, { onClick: form.reset, icon: refresh_default }, "重置"), _attrs.type === "search" && _attrs.formOption.length > column - 1 ? React.createElement(React.Fragment, null, React.createElement(ElButton, { text: true, type: "primary", class: `expandBtn ${more.value ? "up" : "down"}`, onClick: () => {
          setShow(!more.value);
        }, icon: arrow_up_default }, more.value ? "收起" : "展开")) : "");
      }
      return renderForm();
    };
  }
});

// ../element-plus-generator-demo/node_modules/element-plus-generator/lib/StepsGenerator.tsx
var StepsGenerator_default = defineComponent({
  name: "StepsGenerator",
  setup(props, { expose, attrs, slots, emit }) {
    const _attrs = attrs;
    const activeIndex = ref(0);
    function prev() {
      if ((_attrs == null ? void 0 : _attrs.onPrev) && typeof (_attrs == null ? void 0 : _attrs.onPrev) === "function") {
        _attrs.onPrev(activeIndex.value, (val) => {
          val ? activeIndex.value = val : activeIndex.value === 0 ? "" : activeIndex.value--;
        });
      } else {
        activeIndex.value === 0 ? "" : activeIndex.value--;
      }
    }
    function next() {
      if ((_attrs == null ? void 0 : _attrs.onNext) && typeof (_attrs == null ? void 0 : _attrs.onNext) === "function") {
        _attrs.onNext(activeIndex.value, (val) => {
          val ? activeIndex.value = val : activeIndex.value === _attrs.stepsOption.length - 1 ? "" : activeIndex.value++;
        });
      } else {
        activeIndex.value === _attrs.stepsOption.length - 1 ? "" : activeIndex.value++;
      }
    }
    expose({ prev, next });
    return () => {
      function renderSteps() {
        return React.createElement("div", { class: "StepsGenerator" }, React.createElement(ElSteps, { "align-center": true, ..._attrs, active: activeIndex.value }, _attrs.stepsOption.map((stepsOption) => {
          return React.createElement(ElStep, { ...stepsOption, "v-slots": { ...stepsOption == null ? void 0 : stepsOption.slots } });
        })), React.createElement("div", { class: "container" }, Object.keys(slots).map((key, index) => {
          return React.createElement("div", { style: { display: activeIndex.value === index ? "block" : "none" } }, slots[key]());
        })), React.createElement("div", { class: "btn-group" }, slots.default ? slots.default(activeIndex.value)[0].children : React.createElement(React.Fragment, null, activeIndex.value > 0 ? React.createElement(ElButton, { type: "primary", plain: true, onClick: prev }, "上一步") : "", React.createElement(ElButton, { type: "primary", plain: true, onClick: next }, " ", activeIndex.value === _attrs.stepsOption.length - 1 ? "提交" : "下一步"))));
      }
      return renderSteps();
    };
  }
});

// ../element-plus-generator-demo/node_modules/element-plus-generator/lib/utils.ts
var utils_exports = {};
__export(utils_exports, {
  getOption: () => getOption,
  setRequired: () => setRequired
});
var getOption = (arr, label, value, custom) => {
  if (!Array.isArray(arr))
    return [];
  const options = [];
  let customKeys = [];
  if (custom)
    customKeys = Object.keys(custom);
  arr.forEach((item) => {
    let params = {
      label: typeof item === "string" ? item : item[label],
      value: typeof item === "string" ? item : item[value]
    };
    if (custom) {
      customKeys.forEach((key) => {
        params[key] = item[key];
      });
    }
    options.push(params);
  });
  return options;
};
var setRequired = (formOption, omit = []) => {
  const type = {
    "input": "输入",
    "input-number": "输入",
    "select": "选择",
    "tree-select": "选择",
    "cascader": "选择",
    "radio": "选择",
    "radio-button": "选择",
    "checkbox": "选择",
    "checkbox-button": "选择",
    "date-picker": "选择",
    "date-time-picker": "选择",
    "time-picker": "选择",
    "switch": "选择",
    "upload": "上传",
    "slot": "完善"
  };
  formOption.forEach((i) => {
    var _a, _b, _c;
    const requiredObj = { required: true, message: `请${type[i.type] ?? "完善"}${i.formItem.label ?? ""}`, trigger: "change" };
    if (!omit.includes(i.formItem.prop)) {
      if (((_a = i.formItem) == null ? void 0 : _a.rules) instanceof Object) {
        i.formItem.rules = [requiredObj, i.formItem.rules];
      } else if (Array.isArray((_b = i.formItem) == null ? void 0 : _b.rules)) {
        i.formItem.rules.unshift(requiredObj);
      } else {
        i.formItem.rules = [requiredObj];
      }
      if (((_c = i.formItem) == null ? void 0 : _c.rules) instanceof Array) {
        for (let index = 0; index < i.formItem.rules.length; index++) {
          let item = i.formItem.rules[index];
          if (!item.message)
            item.message = "格式有误";
        }
      }
    }
  });
  return formOption;
};

// ../element-plus-generator-demo/node_modules/element-plus-generator/lib/index.ts
import "/Users/wulihua/我的插件/element-plus-generator-demo/node_modules/element-plus-generator/lib/index.scss";
export {
  FormGenerator_default as FormGenerator,
  utils_exports as GeneratorUtils,
  StepsGenerator_default as StepsGenerator,
  TableGenerator_default as TableGenerator
};
//# sourceMappingURL=element-plus-generator_lib_index.js.map
