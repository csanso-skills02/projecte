(self.webpackChunk=self.webpackChunk||[]).push([[273],{6387:(s,t,e)=>{"use strict";e.d(t,{Z:()=>i});const i="/images/logo.png?08065934e0f75240000e50469d70b902"},7273:(s,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>a});const i={layout:e(7619).Z,computed:{espai:function(){return this.$page.props.item||{}},comentaris:function(){return this.espai.comentaris},nom:function(){return this.$page.props.item.nom||""},municipi:function(){var s,t;return(null===(s=this.$page.props.item)||void 0===s||null===(t=s.municipi)||void 0===t?void 0:t.nom)||""},tipu:function(){var s,t;return(null===(s=this.$page.props.item)||void 0===s||null===(t=s.tipu)||void 0===t?void 0:t.nom)||""},desc:function(){var s;return(null===(s=this.$page.props.item)||void 0===s?void 0:s.desc)||""},imatge:function(){return this.espai.imatges[0].imatge}}};const a=(0,e(1900).Z)(i,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("article",{staticClass:"page"},[e("div",{staticClass:"details"},[e("div",{staticClass:"left"},[e("img",{attrs:{src:s.imatge,alt:""}})]),s._v(" "),e("div",{staticClass:"right"},[e("h1",{staticClass:"page-title"},[s._v(s._s(s.nom))]),s._v(" "),e("p",{staticClass:"info"},[s._v(s._s(s.tipu)+" en "+s._s(s.municipi))]),s._v(" "),e("p",{staticClass:"desc"},[s._v(s._s(s.desc))])])]),s._v(" "),e("div",{staticClass:"comments"},s._l(s.comentaris,(function(t){return e("article",{key:t.id},[e("h3",[s._v(s._s(t.usuari.nom)+" "+s._s(t.usuari.llinatges))]),s._v(" "),e("p",[s._v(s._s(t.text))])])})),0)])}),[],!1,null,"552ffc35",null).exports},7986:(s,t,e)=>{"use strict";e.d(t,{Z:()=>i});const i=(0,e(1900).Z)({},(function(){var s=this,t=s.$createElement;return(s._self._c||t)("inertia-link",s._b({},"inertia-link",s.$attrs,!1),[s._t("default")],2)}),[],!1,null,null,null).exports},7619:(s,t,e)=>{"use strict";e.d(t,{Z:()=>l});var i=e(6265),a=e(7986);const n={data:function(){return{success:!0}},mounted:function(){this.flash.success?this.success=!0:this.success=!1},computed:{flash:function(){return this.$page.props.flash},flashMsg:function(){return this.flash.success||this.flash.error},success:function(){return!!this.flash.success}}};var r=e(1900);const c=(0,r.Z)(n,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return s.flashMsg?e("div",{staticClass:"flash-container"},[e("div",{staticClass:"flash",class:{success:s.success,error:!s.success}},[s._v("\n    "+s._s(s.flashMsg)+"\n  ")])]):s._e()}),[],!1,null,"4b1166ae",null).exports,o={components:{Translation:i.Z,CustomLink:a.Z,FlashMessage:c}};const l=(0,r.Z)(o,(function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"page"},[i("header",[i("div",{staticClass:"left"},[i("div",{staticClass:"logo"},[i("img",{attrs:{src:e(6387).Z,alt:"logo"}})]),s._v(" "),i("nav",[i("custom-link",{attrs:{href:s.$route("home")}},[i("translation",{attrs:{value:"inici"}})],1),s._v(" "),i("custom-link",{attrs:{href:s.$route("espais.index")}},[i("translation",{attrs:{value:"espais"}})],1),s._v(" "),i("custom-link",{attrs:{href:s.$route("lang.change",{abbr:"eng"})}},[s._v("\n          English\n        ")]),s._v(" "),i("custom-link",{attrs:{href:s.$route("lang.change",{abbr:"cat"})}},[s._v("\n          Catala\n        ")]),s._v(" "),i("custom-link",{attrs:{href:s.$route("lang.change",{abbr:"esp"})}},[s._v("\n          Espanyol\n        ")])],1)]),s._v(" "),i("div",{staticClass:"right"},[s.$page.props.user?i("div",{staticClass:"userInfo"},[s._v("\n        "+s._s(s.$page.props.user.nom)+" "+s._s(s.$page.props.user.llinatges)+"\n      ")]):s._e(),s._v(" "),s.$page.props.user?i("custom-link",{attrs:{href:s.$route("logout")}},[i("translation",{attrs:{value:"tancar-sessio"}})],1):i("custom-link",{attrs:{href:s.$route("login")}},[i("translation",{attrs:{value:"iniciar-sessio"}})],1)],1)]),s._v(" "),i("flash-message"),s._v(" "),s._t("default")],2)}),[],!1,null,"d490fa34",null).exports},6265:(s,t,e)=>{"use strict";e.d(t,{Z:()=>c});const i=JSON.parse('{"inici":"Inici","espais":"Espais","ver":"Veure","email":"Correu electronic","contrasenya":"Contrasenya","iniciar-sessio":"Iniciar Sessió","tancar-sessio":"Tancar Sessió"}'),a=JSON.parse('{"inici":"Inicio","espais":"Espacios","ver":"Ver","email":"Correo electronico","contrasenya":"Contraseña","iniciar-sessio":"Iniciar Sessión","tancar-sessio":"Cerrar Sessión"}'),n=JSON.parse('{"inici":"Home","espais":"Spaces","ver":"View","email":"Email","contrasenya":"Password","iniciar-sessio":"Login","tancar-sessio":"Logout"}'),r={props:{value:String},computed:{text:function(){var s=this.$page.props.lang;return"cat"===s?i[this.value]||"N/A":"esp"===s?a[this.value]||"N/A":"eng"===s?n[this.value]||"N/A":void 0}}};const c=(0,e(1900).Z)(r,(function(){var s=this,t=s.$createElement;return(s._self._c||t)("div",{directives:[{name:"frag",rawName:"v-frag"}]},[s._v(s._s(s.text))])}),[],!1,null,null,null).exports}}]);