(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0036":function(n,t,e){"use strict";var i,a=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return i}))},2074:function(n,t,e){"use strict";(function(n){e("4bca"),e("921b");i(e("66fd"));var t=i(e("db69"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"369a":function(n,t,e){"use strict";e.r(t);var i=e("ca12"),a=e.n(i);for(var u in i)"default"!==u&&function(n){e.d(t,n,(function(){return i[n]}))}(u);t["default"]=a.a},4626:function(n,t,e){},"4a61":function(n,t,e){"use strict";var i=e("4626"),a=e.n(i);a.a},ca12:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(e("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function u(n,t,e,i,a,u,r){try{var c=n[u](r),o=c.value}catch(s){return void e(s)}c.done?t(o):Promise.resolve(o).then(i,a)}function r(n){return function(){var t=this,e=arguments;return new Promise((function(i,a){var r=n.apply(t,e);function c(n){u(r,i,a,c,o,"next",n)}function o(n){u(r,i,a,c,o,"throw",n)}c(void 0)}))}}e("cd12");var c=function(){Promise.all([e.e("common/vendor"),e.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(e("8d55"))}.bind(null,e)).catch(e.oe)},o={components:{uniIcons:c},data:function(){return{autoplaySwiper:!0,intervalSwiper:2e3,swiperList:[],news:[]}},onShow:function(){var n=r(i.default.mark((function n(){var t,e,a,u,r,c,o,s;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=[],n.next=3,this.$api.page("config",{page:1,limit:5});case 3:for(e=n.sent,a=!0,u=!1,r=void 0,n.prev=7,c=e.data.list[Symbol.iterator]();!(a=(o=c.next()).done);a=!0)s=o.value,s.name.indexOf("picture")>=0&&s.value&&""!=s.value&&null!=s.value&&t.push({img:s.value});n.next=15;break;case 11:n.prev=11,n.t0=n["catch"](7),u=!0,r=n.t0;case 15:n.prev=15,n.prev=16,a||null==c.return||c.return();case 18:if(n.prev=18,!u){n.next=21;break}throw r;case 21:return n.finish(18);case 22:return n.finish(15);case 23:t&&(this.swiperList=t);case 24:case"end":return n.stop()}}),n,this,[[7,11,15,23],[16,,18,22]])})));function t(){return n.apply(this,arguments)}return t}(),methods:{onSwiperTap:function(n){},onNewsDetailTap:function(n){this.$utils.jump("../news-detail/news-detail?id=".concat(n))},onDetailTap:function(n,t){this.$utils.jump("../".concat(n,"/detail?id=").concat(t))},onPageTap:function(t){n.navigateTo({url:"../".concat(t,"/list"),fail:function(){n.switchTab({url:"../".concat(t,"/list")})}})}}};t.default=o}).call(this,e("543d")["default"])},db69:function(n,t,e){"use strict";e.r(t);var i=e("0036"),a=e("369a");for(var u in a)"default"!==u&&function(n){e.d(t,n,(function(){return a[n]}))}(u);e("4a61");var r,c=e("f0c5"),o=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);t["default"]=o.exports}},[["2074","common/runtime","common/vendor"]]]);