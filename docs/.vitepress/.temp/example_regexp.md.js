import { ref, onMounted, resolveDirective, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrGetDirectiveProps } from "vue/server-renderer";
const __pageData = JSON.parse('{"title":"正则列表","description":"","frontmatter":{},"headers":[],"relativePath":"example/regexp.md"}');
const __default__ = { name: "example/regexp.md" };
const _sfc_main = Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    let loading = ref(true);
    onMounted(() => {
      let iframe = document.createElement("iframe");
      iframe.style.width = "100%";
      iframe.src = "https://qq390405712.gitee.io/element-plus-generator-demo/";
      if (iframe.attachEvent) {
        iframe.attachEvent("onload", function() {
          loading.value = false;
        });
      } else {
        iframe.onload = function() {
          loading.value = false;
        };
      }
      document.querySelector("#regexp").appendChild(iframe);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_loading = resolveDirective("loading");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="正则列表" tabindex="-1">正则列表 <a class="header-anchor" href="#正则列表" aria-hidden="true">#</a></h1><p>正则来源： <a href="https://github.com/any86/any-rule" target="_blank" rel="noreferrer">any-rule</a></p><p>引入方式：(例如引入火车车次的正则) <code>import { RegExpTrain } from &#39;element-plus-generator/dist/regexp&#39;</code></p><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_loading, unref(loading)))}><div class="code" id="regexp"></div></div></div>`);
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
