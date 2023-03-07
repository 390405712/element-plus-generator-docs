import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { defineComponent, ref, unref, mergeProps, useSSRContext } from "vue";
import { FormGenerator } from "element-plus-generator";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "InputNumber",
  __ssrInlineRender: true,
  setup(__props) {
    let form = ref({});
    let formOption = ref([{
      type: "input-number",
      formItem: {
        prop: "key1",
        label: "基础用法"
      }
    }, {
      type: "input-number",
      formItem: {
        prop: "key2",
        label: "禁用状态"
      },
      control: {
        disabled: true
      }
    }, {
      type: "input-number",
      formItem: {
        prop: "key3",
        label: "步进"
      },
      control: {
        step: 2
      }
    }, {
      type: "input-number",
      formItem: {
        prop: "key4",
        label: "严格步进"
      },
      control: {
        step: 2,
        stepStrictly: true
      }
    }, {
      type: "input-number",
      formItem: {
        prop: "key5",
        label: "精度"
      },
      control: {
        step: 0.1,
        precision: 2,
        max: 10
      }
    }, {
      type: "input-number",
      formItem: {
        prop: "key6",
        label: "尺寸"
      },
      control: {
        size: "large"
      }
    }, {
      type: "input-number",
      formItem: {
        prop: "key7",
        label: "按钮位置"
      },
      control: {
        controlsPosition: "right"
      }
    }]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(FormGenerator), mergeProps({
        model: unref(form),
        formOption: unref(formOption)
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../element-plus-generator-demo/src/views/Control/components/InputNumber.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __pageData = JSON.parse('{"title":"Input Number 数字输入框","description":"","frontmatter":{},"headers":[],"relativePath":"control/InputNumber.md"}');
const __default__ = { name: "control/InputNumber.md" };
const _sfc_main = Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="input-number-数字输入框" tabindex="-1">Input Number 数字输入框 <a class="header-anchor" href="#input-number-数字输入框" aria-hidden="true">#</a></h1><div class="code"><div class="vp-raw">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">FormGenerator</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">:model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">form</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">:formOption</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">formOption</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">lang</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">tsx</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">FormGenerator</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">element-plus-generator</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">type</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">formOption</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">element-plus-generator/dist/type</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">ref</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">let</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> form </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}">ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">let</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> formOption </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}">ref</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">formOption</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">[]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">([</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">type</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">input-number</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">formItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">prop</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">key1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">基础用法</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">},</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">},</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">type</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">input-number</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">formItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">prop</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">key2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">禁用状态</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">},</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">control</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">disabled</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FF9CAC" })}">true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">},</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">type</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">input-number</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">formItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">prop</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">key3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">步进</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">},</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">control</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">step</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">2</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">},</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">type</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">input-number</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">formItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">prop</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">key4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">严格步进</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">},</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">control</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">step</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">stepStrictly</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#FF9CAC" })}">true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">},</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">type</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">input-number</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">formItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">prop</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">key5</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">精度</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">},</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">control</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">step</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">0.1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">precision</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">max</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">10</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">},</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">type</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">input-number</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">formItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">prop</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">key6</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">尺寸</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">},</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">control</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">size</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">large</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">},</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">type</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">input-number</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">formItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">prop</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">key7</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">按钮位置</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">},</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">control</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}">controlsPosition</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">right</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">},</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">])</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span></code></pre></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("control/InputNumber.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
