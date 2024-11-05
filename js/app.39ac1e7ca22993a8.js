(function(){"use strict";var e={2074:function(e,t,n){var o=n(8355),s=n(5130),a=n(6768);function i(e,t){const n=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.Wv)(n)}var r=n(1241);const c={},l=(0,r.A)(c,[["render",i]]);var d=l,u=n(4458);(0,u.k)("/wordList/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var f=n(1387);n(4114);const p={class:"home flex items-center justify-center"},h={class:"w-1/2"};function v(e,t,n,o,s,i){return(0,a.uX)(),(0,a.CE)("div",p,[(0,a.Lk)("div",h,[(0,a.Lk)("div",{class:"text-xl bg-white text-gray-800 w-full py-2 mb-3 border rounded-sm",onClick:t[0]||(t[0]=t=>e.$router.push("/add"))}," 創建 "),(0,a.Lk)("div",{class:"text-xl bg-white text-gray-800 w-full py-2 border rounded-sm",onClick:t[1]||(t[1]=t=>e.$router.push("/test"))}," 列表 ")])])}var m={name:"HomeView",components:{},data(){return{}},created(){},mounted(){},methods:{async getList(){await(0,o.A)({method:"get",url:"https://boxapi.uupon.com/2024013/BoxList"}).then((e=>{this.rewardList=e.data.filter((e=>"0"===e.state))})),(0,o.A)({method:"get",url:`https://boxapi.uupon.com/2024013/BoxList?inf=${this.encryptedBase64}`}).then((e=>{if(e.data.length>0)if(""!==e.data[0].kaiin_no||0===e.data.length){this.userList=e.data;for(let e=0;e<this.rewardList.length;e++)for(let t=0;t<this.userList.length;t++)this.userList[t].id===this.rewardList[e].id&&(this.rewardList[e].mycount=this.userList[t].mycount)}else location.href="https://boxapi.uupon.com/2024013/"}))}}};const g=(0,r.A)(m,[["render",v],["__scopeId","data-v-4f130fee"]]);var k=g;const w=e=>((0,a.Qi)("data-v-4e883cfe"),e=e(),(0,a.jt)(),e),y={class:"add justify-center items-center"},x={class:"bg-white flex flex-col items-start justify-center w-[80%] mx-auto"},b={class:"flex justify-center items-center"},L=w((()=>(0,a.Lk)("p",null,"漢字/片假名",-1))),j={class:"mt-2 flex justify-center items-center"},C=w((()=>(0,a.Lk)("p",null,"平假名",-1))),S={class:"mt-2 flex justify-center items-center"},A=w((()=>(0,a.Lk)("p",null,"解釋",-1))),O={class:"mt-2 flex justify-center items-start"},D=w((()=>(0,a.Lk)("p",null,"例句",-1))),T={class:"mt-2 flex justify-center items-start"},_=w((()=>(0,a.Lk)("p",null,"備註",-1)));function E(e,t,n,o,i,r){return(0,a.uX)(),(0,a.CE)("div",y,[(0,a.Lk)("div",{onClick:t[0]||(t[0]=t=>e.$router.push("/"))},"回上一頁"),(0,a.Lk)("div",x,[(0,a.Lk)("div",b,[L,(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>i.newData.kanji=e)},null,512),[[s.Jo,i.newData.kanji]])]),(0,a.Lk)("div",j,[C,(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>i.newData.hiragana=e)},null,512),[[s.Jo,i.newData.hiragana]])]),(0,a.Lk)("div",S,[A,(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>i.newData.explain=e)},null,512),[[s.Jo,i.newData.explain]])]),(0,a.Lk)("div",O,[D,(0,a.bo)((0,a.Lk)("textarea",{name:"",id:"",rows:"3","onUpdate:modelValue":t[4]||(t[4]=e=>i.newData.example=e)},null,512),[[s.Jo,i.newData.example]])]),(0,a.Lk)("div",T,[_,(0,a.bo)((0,a.Lk)("textarea",{name:"",id:"",rows:"3","onUpdate:modelValue":t[5]||(t[5]=e=>i.newData.desc=e)},null,512),[[s.Jo,i.newData.desc]])]),(0,a.Lk)("button",{class:"mt-5",onClick:t[6]||(t[6]=e=>r.addWord())},"新增")])])}var M={name:"AboutView",components:{},data(){return{newData:{kanji:"",hiragana:"",explain:"",example:"",desc:"",isdone:0}}},created(){},mounted(){},methods:{async addWord(){try{const e=await fetch("https://script.google.com/macros/s/AKfycbw36boghGfcFqGwuhgySChawTZ1BAVLA8vDe1MfdSaSERMsUMQOfZTTiqc0nnk8SG1M/exec",{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:this.newData})});console.log(e),this.newData={kanji:"",hiragana:"",explain:"",example:"",desc:"",isdone:0}}catch(e){console.error("Error:",e)}}}};const V=(0,r.A)(M,[["render",E],["__scopeId","data-v-4e883cfe"]]);var G=V,B=n(4232);const F=e=>((0,a.Qi)("data-v-cb2e30de"),e=e(),(0,a.jt)(),e),U={class:"list bg-[#e7b5b5] p-5"},q={class:"flex justify-between items-center"},J={for:"show"},X=["checked"],$={class:"flex items-start card-title py-2 mb-1 h-full"},H={class:"w-1/2 flex items-start justify-start card-title-left p-1"},P={class:"ml-3"},Q={class:"text-2xl font-bold text-[#545454]"},Z={class:"w-1/2 flex items-center justify-between p-1"},K=["checked","onClick"],N={class:"text-left"},I={class:"text-left"},W={key:0,class:"model"},R=F((()=>(0,a.Lk)("div",{class:"loader"},null,-1))),z=[R];function Y(e,t,n,o,s,i){return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("div",U,[(0,a.Lk)("div",q,[(0,a.Lk)("div",{onClick:t[0]||(t[0]=t=>e.$router.push("/"))},"回上一頁"),(0,a.Lk)("label",J,[(0,a.eW)(" 平假名/説明 "),(0,a.Lk)("input",{id:"show",type:"checkbox",checked:s.showHiragana,onClick:t[1]||(t[1]=e=>s.showHiragana=!s.showHiragana)},null,8,X)])]),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.list,((e,t)=>((0,a.uX)(),(0,a.CE)("div",{key:t,class:"card bg-white rounded-md p-1 mb-3"},[(0,a.Lk)("div",$,[(0,a.Lk)("div",H,[(0,a.Lk)("p",null,(0,B.v_)(t+1),1),(0,a.Lk)("div",P,[(0,a.Lk)("p",{class:(0,B.C4)(["text-xs text-[#545454]",{"invisible opacity-0":!s.showHiragana}])},(0,B.v_)(e.hiragana),3),(0,a.Lk)("p",Q,(0,B.v_)(e.kanji),1)])]),(0,a.Lk)("div",Z,[(0,a.Lk)("p",null,(0,B.v_)(e.explain),1),(0,a.Lk)("input",{type:"checkbox",checked:1===e.isdone,onClick:n=>i.isDone(t,e.isdone)},null,8,K)])]),(0,a.Lk)("div",N,"例："+(0,B.v_)(e.example),1),(0,a.Lk)("div",I,(0,B.v_)(e.desc),1)])))),128))]),s.isLoading?((0,a.uX)(),(0,a.CE)("div",W,z)):(0,a.Q3)("",!0)],64)}var ee={name:"SuccessView",components:{},data(){return{list:[],isLoading:!1,showHiragana:!1}},created(){this.list=[{kanji:"団結",hiragana:"だんけつ",explain:"團結",example:"dsv",desc:"dsvdsv",isdone:1},{kanji:"sdvsdv",hiragana:"sdv",explain:"sdv",example:"svd",desc:"sdvds",isdone:1},{kanji:"sdvsdv",hiragana:"sdv",explain:"sdv",example:"svd",desc:"sdvds",isdone:1}]},mounted(){},methods:{goback(){this.$router.push("/")},async getList(){this.isLoading=!0;try{const e=await o.A.get("https://script.google.com/macros/s/AKfycbw36boghGfcFqGwuhgySChawTZ1BAVLA8vDe1MfdSaSERMsUMQOfZTTiqc0nnk8SG1M/exec",{headers:{"Content-Type":"application/json"}});console.log(e.data),this.list=e.data.list,this.isLoading=!1,console.log(e.list)}catch(e){console.error("Error:",e)}},async isDone(e,t){console.log(e,t),this.list[e].isdone=1===t?0:1;try{const t=await fetch("https://script.google.com/macros/s/AKfycbw36boghGfcFqGwuhgySChawTZ1BAVLA8vDe1MfdSaSERMsUMQOfZTTiqc0nnk8SG1M/exec",{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:{row:e,isdone:this.list[e].isdone}})}),n=await t.text();console.log("71",n)}catch(n){console.error("Error:",n)}}}};const te=(0,r.A)(ee,[["render",Y],["__scopeId","data-v-cb2e30de"]]);var ne=te;const oe=[{path:"/",name:"home",component:k},{path:"/add",name:"add",component:G},{path:"/test",name:"test",component:ne}],se=(0,f.aE)({history:(0,f.Bt)(),routes:oe});var ae=se,ie=n(782),re=(0,ie.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,s.Ef)(d).use(re).use(ae,o.A).mount("#app")}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,s,a){if(!o){var i=1/0;for(d=0;d<e.length;d++){o=e[d][0],s=e[d][1],a=e[d][2];for(var r=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(r=!1,a<i&&(i=a));if(r){e.splice(d--,1);var l=s();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,s,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,a,i=o[0],r=o[1],c=o[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(s in r)n.o(r,s)&&(n.m[s]=r[s]);if(c)var d=c(n)}for(t&&t(o);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},o=self["webpackChunktest27"]=self["webpackChunktest27"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(2074)}));o=n.O(o)})();
//# sourceMappingURL=app.39ac1e7ca22993a8.js.map