(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1047:function(t,e,n){"use strict";n.r(e);n(8);var r=n(3),o=n(306),c=n(301),l=n(44),d={components:{NavigationBar:o.a,HeaderBar:c.a},data:function(){return{title:"Editar Teste",status:!0,submited:!1,loading:!1,snackbar:!1,snackbarText:"",snackbarStatus:"",titleRules:[function(title){return!!title||"Digite um título"}],answerRules:[function(t){return!!t||"Digite a resposta"}],alternativeRules:[function(t){return!!t||"Digite o texto da alternativa"}]}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Ajude a espalhar o conhecimento criando um Teste para uma Parte de um Curso da New School - Levamos educação de qualidade na linguagem da quebrada para as periferias do Brasil, através da tecnologia e da curadoria de conteúdos baseados nas habilidades do futuro."}]}},created:function(){this.test.part=this.$route.params.partId},methods:{submit:function(){var t=this;this.$refs.test.validate()?(this.animateForm(!0),this.test.part=this.$route.params.partId,l.a.put("/api/v1/test/".concat(this.test.id),this.test).then((function(e){t.loading=!1,t.showConfirmSnack("Teste salvo! ;)","success")})).catch((function(e){setTimeout((function(){t.loading=!1}),500),console.error(e)}))):this.animateForm(!1)},animateForm:function(t){var e=this;t?(this.$refs.flex.classList.add("hide-form"),document.querySelector("html").style.overflow="hidden",setTimeout((function(){e.loading=!0}),300)):(this.$refs.flex.classList.add("error-form"),setTimeout((function(){e.$refs.flex.classList.remove("error-form")}),500)),document.querySelector("html").style.overflow="scroll"},showConfirmSnack:function(text,t){this.snackbarText=text,this.snackbarStatus=t,this.snackbar=!0}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.store,t.data,n=t.params,e.next=3,l.a.getById("/api/v1/test",n.id);case 3:return r=e.sent,e.abrupt("return",{test:r.data});case 5:case"end":return e.stop()}}),e)})))()}},v=(n(967),n(39)),m=n(969),f=n(43),h=n.n(f),x=n(290),k=n(321),w=n(325),_=n(337),y=n(348),C=n(327),O=n(295),j=n(986),A=n(324),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"page"}},[n("HeaderBar",{attrs:{title:"Gerenciar Meus Cursos","back-page":!0}}),t._v(" "),n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{staticStyle:{"text-align":"-webkit-left"},attrs:{xs10:"",sm8:"",md4:""}},[n("v-container",[n("v-row",[n("v-col",[n("h3",[t._v("Teste")]),t._v(" "),n("v-form",{ref:"test",staticClass:"test-form",attrs:{"lazy-validation":""},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[n("v-text-field",{attrs:{rules:t.titleRules,label:"Título",required:""},model:{value:t.test.title,callback:function(e){t.$set(t.test,"title",e)},expression:"test.title"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.answerRules,label:"Alternativa Correta",required:""},model:{value:t.test.correctAlternative,callback:function(e){t.$set(t.test,"correctAlternative",e)},expression:"test.correctAlternative"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.alternativeRules,"prepend-inner-icon":"A:",required:""},model:{value:t.test.firstAlternative,callback:function(e){t.$set(t.test,"firstAlternative",e)},expression:"test.firstAlternative"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.alternativeRules,"prepend-inner-icon":"B:",required:""},model:{value:t.test.secondAlternative,callback:function(e){t.$set(t.test,"secondAlternative",e)},expression:"test.secondAlternative"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.alternativeRules,"prepend-inner-icon":"C:",required:""},model:{value:t.test.thirdAlternative,callback:function(e){t.$set(t.test,"thirdAlternative",e)},expression:"test.thirdAlternative"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.alternativeRules,"prepend-inner-icon":"D:",required:""},model:{value:t.test.fourthAlternative,callback:function(e){t.$set(t.test,"fourthAlternative",e)},expression:"test.fourthAlternative"}})],1),t._v(" "),n("v-btn",{staticClass:"btn-block btn-primary",on:{click:t.submit}},[t._v("\n              Salvar\n            ")])],1)],1)],1)],1),t._v(" "),n("v-snackbar",{attrs:{color:t.snackbarStatus,timeout:5e3,top:!0,right:!0},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.snackbarText)+"\n        "),n("v-btn",{attrs:{color:"#FFF",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n            Fechar\n        ")])],1),t._v(" "),n("client-only",[n("navigation-bar")],1)],1)],1)}),[],!1,null,"28aea602",null);"function"==typeof m.default&&Object(m.default)(component);e.default=component.exports;h()(component,{VBtn:x.a,VCol:k.a,VContainer:w.a,VFlex:_.a,VForm:y.a,VLayout:C.a,VRow:O.a,VSnackbar:j.a,VTextField:A.a})},297:function(t,e,n){var content=n(303);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("79745966",content,!0,{sourceMap:!1})},299:function(t,e,n){var content=n(308);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("d4fe8ae2",content,!0,{sourceMap:!1})},300:function(t,e,n){var content=n(310);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("f0f029ce",content,!0,{sourceMap:!1})},301:function(t,e,n){"use strict";var r={props:["title","backPage","route"],methods:{comeBackPage:function(){this.route?this.$router.push(this.route):this.$router.back()}}},o=(n(302),n(39)),c=n(43),l=n.n(c),d=n(290),v=n(289),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"head__bar"}},[e("v-btn",{staticClass:"btn-back",attrs:{text:"",icon:""},on:{click:this.comeBackPage}},[e("v-icon",[this._v("mdi-arrow-left")])],1),this._v(" "),e("h1",{staticClass:"h1__theme"},[this._v(this._s(this.title))])],1)}),[],!1,null,"7719e329",null);e.a=component.exports;l()(component,{VBtn:d.a,VIcon:v.a})},302:function(t,e,n){"use strict";var r=n(297);n.n(r).a},303:function(t,e,n){(e=n(28)(!1)).push([t.i,"*[data-v-7719e329]{font-family:Roboto,sans-serif}.h1__theme[data-v-7719e329]{font-size:1rem;line-height:1.2;font-weight:900;text-align:center;padding:0 2.5rem!important}#head__bar[data-v-7719e329]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;padding:1.5rem 0;position:relative;-webkit-box-align:center;align-items:center;background:transparent}[data-v-7719e329] .btn-back .theme--light.v-icon{color:var(--primary);font-size:35px}[data-v-7719e329] .btn-back{position:absolute;left:1rem}",""]),t.exports=e},306:function(t,e,n){"use strict";n(190),n(23),n(11),n(7),n(13),n(36),n(5);var r=n(4),o=n(312),c=n.n(o),l=n(110),d=n(109);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{menu:[{id:1,label:"Meu Perfil",icon:"mdi-account",link:"/aluno/perfil"},{id:2,label:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:3,label:"Meus Certificados",icon:"mdi-school",link:"/aluno/certificados"},{id:4,label:"Ranking",icon:"mdi-trophy",link:"/aluno/ranking"},{id:5,label:"O que é a new school?",icon:"mdi-library-books",link:"/sobre"},{id:6,label:"Cola com Nóix",icon:"mdi-gesture-double-tap",link:"/voluntarios"},{id:7,label:"Apoie a new school",icon:"mdi-volume-high",link:"/contribua"},{id:8,label:"Fale com a gente",icon:"mdi-phone-message-outline",link:"/contato"}]}},methods:m(m({},Object(l.b)("user",["clearInfoUser"])),{},{closeMenu:function(){document.getElementById("menu-btn").click()},logout:function(){var t=this;this.logoutSocial().then((function(){$nuxt._router.push("/login"),localStorage.clear(),t.clearInfoUser()}))},pushAdminOnlyOptions:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[1].link="/admin/listar-cursos",this.menu.push({id:9,label:"Dashboard",icon:"mdi-chart-bar",link:"/admin/dashboard"}))},logoutSocial:function(){return this.$auth.loggedIn?this.$auth.logout():Promise.resolve()}}),computed:{user:function(){return this.$store.state.user.data}},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.pushAdminOnlyOptions())},filters:{simplifyName:function(t){if(!t)return"";return t.split(" ").length>2?/^(\S*\s+\S+).*/.exec(t)[1]:t}},components:{Avatar:c.a}},h=(n(307),n(39)),x=n(43),k=n.n(x),w=n(290),_=n(289),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-page",attrs:{id:"page"}},[n("main",[n("section",{attrs:{id:"info"}},[n("div",{attrs:{id:"avatar"}},[n("div",{staticClass:"flex-center border-profile-photo"},[n("div",{staticClass:"flex-center profile-container"},[t.user.photo?n("img",{attrs:{src:t.user.photo}}):n("avatar",{attrs:{username:t._f("simplifyName")(t.user.name),size:90}})],1)])]),t._v(" "),n("div",{staticClass:"flex-center",attrs:{id:"flex-info-user"}},[n("h1",[t._v(t._s(t.user.name))]),t._v(" "),n("p",[t._v(t._s(t.user.type))]),t._v(" "),n("v-btn",{attrs:{id:"btnLogout",small:"",outlined:"",color:"error",width:"80px"},on:{click:t.logout}},[t._v("Sair")])],1),t._v(" "),n("div",{attrs:{id:"close"}},[n("v-icon",{attrs:{id:"close-btn",color:"primary"},on:{click:function(e){return t.closeMenu()}}},[t._v("mdi-close-circle")])],1)])]),t._v(" "),n("section",{staticClass:"menu-list"},t._l(t.menu,(function(e){return n("router-link",{key:e.id,staticClass:"item-menu",attrs:{tag:"div",to:e.link},nativeOn:{click:function(e){return t.closeMenu()}}},[n("div",[n("v-icon",{attrs:{color:"primary"}},[t._v(t._s(e.icon))])],1),t._v(" "),n("p",{staticClass:"text-menu"},[t._v(t._s(e.label))])])})),1)])}),[],!1,null,"7d737e5c",null),y=component.exports;k()(component,{VBtn:w.a,VIcon:_.a});var C={components:{SideMenu:y},data:function(){return{viewMenu:!1,auth:!1,menu:[{id:1,name:"Início",icon:"mdi-home-outline",link:"/aluno/home"},{id:2,name:"Perfil",icon:"mdi-account-outline",link:"/aluno/perfil"},{id:3,name:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:4,name:"Certificados",icon:"mdi-school-outline",link:"/aluno/certificados",class:""}]}},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},methods:{setViewMenu:function(){this.viewMenu=!this.viewMenu},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[0].link="/admin/home",this.menu[1].link="/admin/perfil",this.menu[2].link="/admin/listar-cursos",this.menu[3].link="/admin/certificados")}}},O=(n(309),n(1049)),j=Object(h.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.auth?n("div",[n("side-menu",{directives:[{name:"show",rawName:"v-show",value:t.viewMenu,expression:"viewMenu"}],staticClass:"intro-transition"}),t._v(" "),n("v-bottom-navigation",{attrs:{"scroll-target":"#page",fixed:"","scroll-threshold":"500",color:"write",horizontal:""}},[t._l(t.menu,(function(e){return n("v-btn",{key:e.id,staticClass:"btn-fixed menu__bottom",class:e.class,attrs:{to:e.link},on:{click:function(e){t.viewMenu=!1}}},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("v-icon",[t._v(t._s(e.icon))])],1)})),t._v(" "),n("v-btn",{staticClass:"btn-fixed",attrs:{id:"menu-btn"},on:{click:t.setViewMenu}},[n("span",[t._v("Outros")]),t._v(" "),n("v-icon",[t._v("mdi-apps")])],1)],2)],1):t._e()}),[],!1,null,"7d2ee64a",null);e.a=j.exports;k()(j,{VBottomNavigation:O.a,VBtn:w.a,VIcon:_.a})},307:function(t,e,n){"use strict";var r=n(299);n.n(r).a},308:function(t,e,n){(e=n(28)(!1)).push([t.i,".container-page[data-v-7d737e5c]{z-index:2}#btnLogout[data-v-7d737e5c]{margin-top:5px}.mdi-close-circle[data-v-7d737e5c]:before{color:var(--primary);position:absolute;right:22px;top:33px}.container-page>main[data-v-7d737e5c]{-webkit-box-pack:justify;justify-content:space-between;padding:.5rem;margin-top:1rem;width:100%}#info[data-v-7d737e5c],.container-page>main[data-v-7d737e5c]{display:-webkit-box;display:flex}#avatar[data-v-7d737e5c]{margin-right:1rem}.text-menu[data-v-7d737e5c]{text-transform:uppercase}.mdi-library-books[data-v-7d737e5c]:before{content:url(https://api.iconify.design/mdi-library-books.svg?color=rgb%28105%2C0%2C204%29&height=24);vertical-align:-.125em}h1[data-v-7d737e5c]{font-size:1rem;font-weight:500;color:#000;text-transform:capitalize}.menu-list[data-v-7d737e5c]{max-width:500px}.container-page[data-v-7d737e5c]{background-color:#fff;position:fixed;width:100%;height:100%;top:0;left:0}.row[data-v-7d737e5c]{margin-left:0}#close-btn[data-v-7d737e5c]{cursor:pointer;font-size:30px}#flex-info-user[data-v-7d737e5c]{-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:baseline;align-items:baseline}.flex-center[data-v-7d737e5c]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.border-profile-photo[data-v-7d737e5c]{height:95px;width:95px;border:1px solid #60c;border-radius:50px}.profile-container[data-v-7d737e5c]{width:85px;height:85px;border-radius:50px;overflow:hidden}.profile-container img[data-v-7d737e5c]{width:100%}.item-menu[data-v-7d737e5c]{width:100%;padding:13px;border-bottom:1px solid #e8e8e8;-webkit-box-align:center;align-items:center;color:var(--primary)!important;cursor:pointer}.item-menu[data-v-7d737e5c],.item-menu div[data-v-7d737e5c]{display:-webkit-box;display:flex}.item-menu div[data-v-7d737e5c]{width:50px;-webkit-box-pack:center;justify-content:center;margin-right:2rem}.item-menu[data-v-7d737e5c]:hover{background-color:#e8d1ff}.col-flex-center[data-v-7d737e5c]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:baseline;align-items:baseline}p[data-v-7d737e5c]{margin-bottom:0!important}h4[data-v-7d737e5c]{font-weight:600}@media(min-width:600px){#info[data-v-7d737e5c],.menu-list[data-v-7d737e5c]{margin:0 auto}}",""]),t.exports=e},309:function(t,e,n){"use strict";var r=n(300);n.n(r).a},310:function(t,e,n){(e=n(28)(!1)).push([t.i,"[data-v-7d2ee64a] .v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.v-icon[data-v-7d2ee64a]{margin-right:0!important;padding-top:5px}#page[data-v-7d2ee64a]{margin-bottom:5rem!important}.btn-fixed[data-v-7d2ee64a]{height:100%!important}.intro-transition[data-v-7d2ee64a]{-webkit-animation-name:intro;animation-name:intro;-webkit-animation-duration:.2s;animation-duration:.2s}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content{color:var(--primary)}.mdi-library[data-v-7d2ee64a]:before{content:url(https://api.iconify.design/ic:outline-local-library.svg?color=rgb%28112%2C112%2C112%29&height=24);vertical-align:-.125em}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content .mdi-library:before{content:url(https://api.iconify.design/ic:outline-local-library.svg?color=rgb%28102%2C0%2C204%29&height=24);vertical-align:-.125em}span[data-v-7d2ee64a]{font-size:8px;font-weight:400;color:#737373;margin-top:5px}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content span{color:var(--primary)}@media (max-width:375px){.v-btn[data-v-7d2ee64a]{min-width:55px!important;font-size:.6rem!important}}@media (max-width:415px){.v-btn[data-v-7d2ee64a]{font-size:.65rem!important}}.remove-certificates[data-v-7d2ee64a]{display:none}",""]),t.exports=e},695:function(t,e,n){var content=n(968);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("031ee5dd",content,!0,{sourceMap:!1})},696:function(t,e){},967:function(t,e,n){"use strict";var r=n(695);n.n(r).a},968:function(t,e,n){(e=n(28)(!1)).push([t.i,"[data-v-28aea602] .v-input__icon--prepend-inner{-webkit-box-pack:start;justify-content:flex-start}[data-v-28aea602] .v-input__icon--prepend-inner i{color:var(--primary);font-size:16px;font-weight:600;font-style:normal!important}.v-input[data-v-28aea602]{width:90%;height:50px}.v-input input[data-v-28aea602]{color:none}[data-v-28aea602] .v-messages__message{text-align:right;margin-top:-.3em}",""]),t.exports=e},969:function(t,e,n){"use strict";var r=n(696),o=n.n(r);e.default=o.a}}]);