import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as t}from"./assets/vendor-77e16229.js";document.getElementById("promiseForm").addEventListener("submit",function(i){i.preventDefault();const s=Number(this.delay.value),r=this.state.value;new Promise((e,o)=>{setTimeout(()=>{r==="fulfilled"?e(s):o(s)},s)}).then(e=>{t.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{t.error({title:"Error",message:`❌ Rejected promise in ${e}ms`})}).finally(()=>{this.reset()})});
//# sourceMappingURL=commonHelpers2.js.map
