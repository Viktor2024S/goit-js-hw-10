import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as h,i as S}from"./assets/vendor-77e16229.js";const c=document.querySelector("#datetime-picker"),a=document.querySelector("button[data-start]"),p=document.querySelector("[data-days]"),b=document.querySelector("[data-hours]"),D=document.querySelector("[data-minutes]"),q=document.querySelector("[data-seconds]");let u=null,n=null;const w={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){n=e[0],n<=new Date?(S.error({title:"Error",message:"Please choose a date in the future"}),a.disabled=!0):a.disabled=!1}};h(c,w);a.addEventListener("click",()=>{n&&n>new Date&&(v(),a.disabled=!0,c.disabled=!0)});function v(){u=setInterval(()=>{const t=n-new Date;if(t<=0){clearInterval(u),l(0,0,0,0),c.disabled=!1;return}const{days:o,hours:r,minutes:i,seconds:d}=C(t);l(o,r,i,d)},1e3)}function C(e){const d=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:m,minutes:f,seconds:y}}function l(e,t,o,r){p.textContent=s(e),b.textContent=s(t),D.textContent=s(o),q.textContent=s(r)}function s(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map