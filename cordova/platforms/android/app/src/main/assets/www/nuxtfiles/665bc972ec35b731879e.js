(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{188:function(t,e,r){"use strict";var n=r(289);e.a=n.a},297:function(t,e,r){var content=r(303);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("79745966",content,!0,{sourceMap:!1})},301:function(t,e,r){"use strict";var n={props:["title","backPage","route"],methods:{comeBackPage:function(){this.route?this.$router.push(this.route):this.$router.back()}}},o=(r(302),r(39)),c=r(43),l=r.n(c),d=r(290),h=r(289),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"head__bar"}},[e("v-btn",{staticClass:"btn-back",attrs:{text:"",icon:""},on:{click:this.comeBackPage}},[e("v-icon",[this._v("mdi-arrow-left")])],1),this._v(" "),e("h1",{staticClass:"h1__theme"},[this._v(this._s(this.title))])],1)}),[],!1,null,"7719e329",null);e.a=component.exports;l()(component,{VBtn:d.a,VIcon:h.a})},302:function(t,e,r){"use strict";var n=r(297);r.n(n).a},303:function(t,e,r){(e=r(28)(!1)).push([t.i,"*[data-v-7719e329]{font-family:Roboto,sans-serif}.h1__theme[data-v-7719e329]{font-size:1rem;line-height:1.2;font-weight:900;text-align:center;padding:0 2.5rem!important}#head__bar[data-v-7719e329]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;padding:1.5rem 0;position:relative;-webkit-box-align:center;align-items:center;background:transparent}[data-v-7719e329] .btn-back .theme--light.v-icon{color:var(--primary);font-size:35px}[data-v-7719e329] .btn-back{position:absolute;left:1rem}",""]),t.exports=e},314:function(t,e,r){"use strict";var n=r(4),o=r(2);var c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return o.default.extend({name:"proxyable",model:{prop:t,event:e},props:Object(n.a)({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(n.a)({},t,(function(t){this.internalLazyValue=t}))})}();e.a=c},320:function(t,e,r){var content=r(326);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("e23b7040",content,!0,{sourceMap:!1})},326:function(t,e,r){(e=r(28)(!1)).push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--light.v-card.v-card--outlined{border:thin solid rgba(0,0,0,.12)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.theme--dark.v-card.v-card--outlined{border:thin solid hsla(0,0%,100%,.12)}.v-card{display:block;max-width:100%;outline:none;text-decoration:none;-webkit-transition-property:box-shadow,opacity;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal;-webkit-transition:box-shadow .28s cubic-bezier(.4,0,.2,1);transition:box-shadow .28s cubic-bezier(.4,0,.2,1);will-change:box-shadow;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-card:not(.v-sheet--tile):not(.v-card--shaped){border-radius:4px}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-card--hover{cursor:pointer;-webkit-transition:box-shadow .4s cubic-bezier(.25,.8,.25,1);transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-card--hover:focus,.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;-webkit-transition:opacity .2s;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;-webkit-transition:inherit;transition:inherit}.v-card--loading{overflow:hidden}.v-card--outlined{box-shadow:none}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--shaped{border-radius:24px 4px}',""]),t.exports=e},328:function(t,e,r){"use strict";r.d(e,"a",(function(){return v}));r(23),r(11),r(7),r(5),r(13),r(193),r(69),r(35),r(40);var n=r(4),o=(r(66),r(340),r(314)),c=r(67),l=r(47),d=r(16);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v=Object(l.a)(o.a,c.a).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,r){return t.toggleMethod(t.getValue(e,r))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(d.c)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,i){return null==t.value||""===t.value?i:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,r=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,r)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),r=this.getValue(t,e);if(this.items.splice(e,1),!(this.selectedValues.indexOf(r)<0)){if(!this.mandatory)return this.updateInternalValue(r);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==r})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var r=this.getValue(t,e);t.isActive=this.toggleMethod(r)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var r=e.find((function(t){return!t.disabled}));if(r){var n=this.items.indexOf(r);this.updateInternalValue(this.getValue(r,n))}}},updateMultiple:function(t){var e=(Array.isArray(this.internalValue)?this.internalValue:[]).slice(),r=e.findIndex((function(e){return e===t}));this.mandatory&&r>-1&&e.length-1<1||null!=this.max&&r<0&&e.length+1>this.max||(r>-1?e.splice(r,1):e.push(t),this.internalValue=e)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t("div",this.genData(),this.$slots.default)}});v.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},340:function(t,e,r){var content=r(341);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("73707fd0",content,!0,{sourceMap:!1})},341:function(t,e,r){(e=r(28)(!1)).push([t.i,".v-item-group{-webkit-box-flex:0;flex:0 1 auto;position:relative;max-width:100%;-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1)}",""]),t.exports=e},347:function(t,e,r){var content=r(413);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("2c88164b",content,!0,{sourceMap:!1})},412:function(t,e,r){"use strict";var n=r(347);r.n(n).a},413:function(t,e,r){(e=r(28)(!1)).push([t.i,".wrapper__without__content[data-v-0abeff7d]{opacity:.5;text-align:center}.wrapper__without__content .text__without__content[data-v-0abeff7d]{color:var(--primary);text-transform:uppercase;font-size:3.5em;font-weight:400}.full__width[data-v-0abeff7d]{width:100%}",""]),t.exports=e},420:function(t,e,r){"use strict";var n={name:"NothingToShow",props:{title:String,message:String}},o=(r(412),r(39)),c=r(43),l=r.n(c),d=r(321),h=r(325),v=r(295),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-container",{staticClass:"wrapper__without__content ",attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("h1",{staticClass:"full__width text__without__content"},[this._v(this._s(this.title))]),this._v(" "),e("p",{staticClass:"full__width"},[this._v(this._s(this.message))])])],1)],1)],1)}),[],!1,null,"0abeff7d",null);e.a=component.exports;l()(component,{VCol:d.a,VContainer:h.a,VRow:v.a})},651:function(t,e,r){var content=r(883);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("31f8af80",content,!0,{sourceMap:!1})},652:function(t,e,r){var content=r(885);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("09533bbb",content,!0,{sourceMap:!1})},882:function(t,e,r){"use strict";var n=r(651);r.n(n).a},883:function(t,e,r){(e=r(28)(!1)).push([t.i,"*[data-v-3b36c4a6]{font-family:Roboto;-webkit-transition:.2 ease-in;transition:.2 ease-in}#page[data-v-3b36c4a6]{height:100%}p[data-v-3b36c4a6]{margin-bottom:0}h1[data-v-3b36c4a6]{font-size:.8rem;font-weight:700;line-height:16px;letter-spacing:0;text-align:left;color:#000;max-width:70%}.container__list[data-v-3b36c4a6]{margin-bottom:5rem}.card[data-v-3b36c4a6]{margin:1.3rem;padding:.9rem;background:#fff;box-shadow:0 12px 20px 0 rgba(0,0,0,.14902);border-radius:5px;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:justify;justify-content:space-between}.btn-back[data-v-3b36c4a6]{width:unset!important}.header__info[data-v-3b36c4a6]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:start;align-items:flex-start}[data-v-3b36c4a6] .v-btn--icon.v-size--default{height:unset;color:var(--primary)}.text__success[data-v-3b36c4a6]{font-weight:400;color:#35de63;font-size:13px}[data-v-3b36c4a6] .v-progress-linear{margin-bottom:10px}[data-v-3b36c4a6] .v-progress-linear__background{opacity:1%;background-color:#cecece!important}#value__progress[data-v-3b36c4a6]{font-size:10px;font-weight:400;letter-spacing:0;text-align:left;margin:18px 0 4px}#continue__text[data-v-3b36c4a6]{font-size:11px;color:#737373}#continue__text[data-v-3b36c4a6],#rating-btn[data-v-3b36c4a6]{font-weight:700;line-height:12px;text-align:right;text-transform:none;letter-spacing:0}#rating-btn[data-v-3b36c4a6]{display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end;height:20px;font-family:Roboto;font-size:10px}.col[data-v-3b36c4a6]{padding:0}.row[data-v-3b36c4a6]{padding:0 14px}",""]),t.exports=e},884:function(t,e,r){"use strict";var n=r(652);r.n(n).a},885:function(t,e,r){(e=r(28)(!1)).push([t.i,"*[data-v-50010bd7]{font-family:Roboto,sans-serif;-webkit-transition:.2 ease-in;transition:.2 ease-in}#page[data-v-50010bd7]{height:100%;margin-bottom:60px}h1[data-v-50010bd7]{font-size:.8rem;font-weight:600;width:55%}.container__list[data-v-50010bd7]{margin-bottom:5rem}.header__info[data-v-50010bd7]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:start;align-items:flex-start}[data-v-50010bd7] .v-btn--icon.v-size--default{height:unset;color:#60c}[data-v-50010bd7] .v-tab{font-size:11px!important;line-height:16px;font-weight:500;color:grey;text-transform:none;border-bottom:4px solid #f5f5f5}[data-v-50010bd7] .v-tab--active{border-bottom:4px solid var(--primary-light)}[data-v-50010bd7] .v-tabs{max-height:32px}@media(min-width:992px){#page-window[data-v-50010bd7]{-webkit-box-pack:center;justify-content:center}#page[data-v-50010bd7],#page-window[data-v-50010bd7]{display:-webkit-box;display:flex}#page[data-v-50010bd7]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:100%;margin-bottom:60px;width:700px;max-width:700px}}",""]),t.exports=e},999:function(t,e,r){"use strict";r.r(e);r(69),r(8);var n=r(3),o=r(301),c=r(420),l=r(44),d={name:"CourseProgress",props:["course"],methods:{goToCourse:function(){this.$store.commit("courses/setCurrent",this.course),$nuxt._router.push("/aluno/curso/".concat(this.course.courseTakenData.slug))},rateCourse:function(){this.$store.commit("courses/setCurrent",this.course),$nuxt._router.push("/aluno/curso/".concat(this.course.slug,"/fim/1"))}}},h=(r(882),r(39)),v=r(43),f=r.n(v),m=r(329),x=r(321),_=r(319),w=r(295),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"card"},[r("v-col",[r("v-row",{attrs:{justify:"space-between"}},[r("h1",[t._v(t._s(t.course.titulo))]),t._v(" "),t.course.courseTakenData.completion<100?r("p",{attrs:{id:"continue__text"},on:{click:function(e){return t.goToCourse()}}},[t._v("\n        Continuar\n      ")]):t._e()]),t._v(" "),r("v-col",[r("p",{attrs:{id:"value__progress"}},[t._v("\n        "+t._s(t.course.courseTakenData.completion)+" % Concluído\n      ")]),t._v(" "),r("v-progress-linear",{attrs:{value:t.course.courseTakenData.completion,height:"8",color:"#aa56ff"}}),t._v(" "),t.course.courseTakenData.rating||100!==t.course.courseTakenData.completion?t._e():r("div",{attrs:{id:"rating-btn",text:""},on:{click:t.rateCourse}},[t._v("\n        Avaliar Curso\n      ")])],1)],1)],1)}),[],!1,null,"3b36c4a6",null),y=component.exports;f()(component,{VCard:m.a,VCol:x.a,VProgressLinear:_.a,VRow:w.a});var k={components:{HeaderBar:o.a,NothingToShow:c.a,CourseProgress:y},transition:"bounce",data:function(){return{loading:!0,selectedTab:0,myCourses:[]}},computed:{user:function(){return this.$store.state.user.data},courseTaken:function(){return this.$store.state.courses.my},allCourses:function(){return this.$store.state.courses.all},filteredCourses:function(){var t=this;return this.myCourses.filter((function(e){return"1"==t.selectedTab?100===e.courseTakenData.completion:e.courseTakenData.completion<100}))}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getMyCourses();case 2:t.loading=!1;case 3:case"end":return e.stop()}}),e)})))()},methods:{getMyCourses:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.getAll("".concat("api/v2/course-taken/user/").concat(t.user.id));case 2:(r=e.sent.data)&&r.forEach((function(e){var r=t.allCourses.find((function(t){return t.id==e.courseId}));100===e.completion&&null===e.challenge&&(e.completion=99),r.courseTakenData=e,t.myCourses.push(r)}));case 4:case"end":return e.stop()}}),e)})))()}}},V=(r(884),r(129)),C=r(987),O=r(1048),j=Object(h.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"page-window"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],attrs:{id:"page"}},[r("HeaderBar",{attrs:{title:"Meus Cursos","back-page":!0}}),t._v(" "),r("v-tabs",{attrs:{"fixed-tabs":"",height:"35px"},model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}},[r("v-tab",[t._v("\n        Em andamento\n      ")]),t._v(" "),r("v-tab",[t._v("\n        Finalizados\n      ")])],1),t._v(" "),t.filteredCourses.length>0?r("div",t._l(t.filteredCourses,(function(t,e){return r("div",{key:e},[r("course-progress",{attrs:{course:t}})],1)})),0):void 0],2),t._v(" "),t.loading?r("div",[r("div",{staticClass:"container-spinner"},[r("v-progress-circular",{attrs:{size:70,width:5,indeterminate:"",color:"#6600cc"}})],1)]):t._e()])}),[],!1,null,"50010bd7",null);e.default=j.exports;f()(j,{VProgressCircular:V.a,VTab:C.a,VTabs:O.a})}}]);