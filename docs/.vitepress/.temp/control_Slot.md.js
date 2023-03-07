import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { defineComponent, ref, resolveComponent, unref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { FormGenerator } from "element-plus-generator";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Slot",
  __ssrInlineRender: true,
  setup(__props) {
    let form = ref({
      slotKey: 5
    });
    let formOption = ref([{
      type: "slot",
      formItem: {
        prop: "slotKey",
        label: "自定义插槽"
      }
    }]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_rate = resolveComponent("el-rate");
      _push(ssrRenderComponent(unref(FormGenerator), mergeProps({
        model: unref(form),
        formOption: unref(formOption)
      }, _attrs), {
        slotKey: withCtx((scope, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_rate, {
              modelValue: unref(form).slotKey,
              "onUpdate:modelValue": ($event) => unref(form).slotKey = $event
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(scope)}`);
          } else {
            return [createVNode(_component_el_rate, {
              modelValue: unref(form).slotKey,
              "onUpdate:modelValue": ($event) => unref(form).slotKey = $event
            }, null, 8, ["modelValue", "onUpdate:modelValue"]), createTextVNode(" " + toDisplayString(scope), 1)];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../element-plus-generator-demo/src/views/Control/components/Slot.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __pageData = JSON.parse('{"title":"Slot 自定义插槽","description":"","frontmatter":{},"headers":[],"relativePath":"control/Slot.md"}');
const __default__ = { name: "control/Slot.md" };
const _sfc_main = Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="slot-自定义插槽" tabindex="-1">Slot 自定义插槽 <a class="header-anchor" href="#slot-自定义插槽" aria-hidden="true">#</a></h1><div class="vp-raw">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">FormGenerator</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">:model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">form</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">:formOption</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">formOption</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">#</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">slotKey</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">scope</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">el-rate</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">form.slotKey</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">      {{ scope }}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">FormGenerator</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">lang</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">tsx</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">FormGenerator</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">element-plus-generator</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">type</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">formOption</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">element-plus-generator/dist/type</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">ref</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">let</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> form </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}">ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">slotKey</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">5</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">let</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> formOption </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}">ref</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">formOption</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">[]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">([</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">type</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">slot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">formItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">prop</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">slotKey</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">自定义插槽</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">},</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">},</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">])</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span></code></pre></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("control/Slot.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
