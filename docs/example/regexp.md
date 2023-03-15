# 正则列表

正则来源： [any-rule](https://github.com/any86/any-rule)

引入方式：(例如引入火车车次的正则) `import { RegExpTrain } from 'element-plus-generator/dist/regexp'`


<!-- <RegexpCom/>

<script setup>
import RegexpCom from './../../../element-plus-generator-demo/src/views/Regexp/index.vue'
</script> -->


<div v-loading="loading">
  <div class="code"  id="regexp" />
</div>


<script setup>
  import {onMounted,ref} from 'vue'
  let loading = ref(true)
  onMounted(()=>{
    let iframe = document.createElement("iframe");
    iframe.style.width = '100%'
    iframe.style.height = '19700px'
    iframe.src = "https://qq390405712.gitee.io/element-plus-generator-demo/";
    if (iframe.attachEvent) {
        iframe.attachEvent("onload", function () {
            loading.value = false
        });
    } else {
        iframe.onload = function () {
            loading.value = false
        };
    }
    document.querySelector("#regexp").appendChild(iframe);
  })
</script>
