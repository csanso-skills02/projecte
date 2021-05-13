(self.webpackChunk=self.webpackChunk||[]).push([[523],{6387:(s,t,e)=>{"use strict";e.d(t,{Z:()=>a});const a="/images/logo.png?08065934e0f75240000e50469d70b902"},6523:(s,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>r});var a=e(6265),n=e(7619);const i={components:{Translation:a.Z},layout:n.Z,data:function(){return{form:this.$inertia.form({email:"",contrasenya:""})}},mounted:function(){console.log(this.$inertia)},methods:{submit:function(){this.form.post(this.$route("login.intent"))}}};const r=(0,e(1900).Z)(i,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"page"},[e("div",{staticClass:"inner"},[e("h1",[e("translation",{attrs:{value:"iniciar-sessio"}})],1),s._v(" "),e("form",{on:{submit:function(t){return t.preventDefault(),s.submit(t)}}},[e("div",{staticClass:"input-group"},[e("label",{attrs:{for:"login-email"}},[s._v("Email")]),s._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.form.email,expression:"form.email"}],attrs:{type:"text",id:"login-email"},domProps:{value:s.form.email},on:{input:function(t){t.target.composing||s.$set(s.form,"email",t.target.value)}}})]),s._v(" "),e("div",{staticClass:"input-group"},[e("label",{attrs:{for:"login-contrasenya"}},[e("translation",{attrs:{value:"contrasenya"}})],1),s._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.form.contrasenya,expression:"form.contrasenya"}],attrs:{type:"password",id:"login-contrasenya"},domProps:{value:s.form.contrasenya},on:{input:function(t){t.target.composing||s.$set(s.form,"contrasenya",t.target.value)}}})]),s._v(" "),e("button",{attrs:{type:"submit"}},[e("translation",{attrs:{value:"iniciar-sessio"}})],1)])])])}),[],!1,null,"03549168",null).exports},7986:(s,t,e)=>{"use strict";e.d(t,{Z:()=>a});const a=(0,e(1900).Z)({},(function(){var s=this,t=s.$createElement;return(s._self._c||t)("inertia-link",s._b({},"inertia-link",s.$attrs,!1),[s._t("default")],2)}),[],!1,null,null,null).exports},7619:(s,t,e)=>{"use strict";e.d(t,{Z:()=>c});var a=e(6265),n=e(7986);const i={data:function(){return{success:!0}},mounted:function(){this.flash.success?this.success=!0:this.success=!1},computed:{flash:function(){return this.$page.props.flash},flashMsg:function(){return this.flash.success||this.flash.error},success:function(){return!!this.flash.success}}};var r=e(1900);const o=(0,r.Z)(i,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return s.flashMsg?e("div",{staticClass:"flash-container"},[e("div",{staticClass:"flash",class:{success:s.success,error:!s.success}},[s._v("\n    "+s._s(s.flashMsg)+"\n  ")])]):s._e()}),[],!1,null,"4b1166ae",null).exports,l={components:{Translation:a.Z,CustomLink:n.Z,FlashMessage:o}};const c=(0,r.Z)(l,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"page"},[a("header",[a("div",{staticClass:"left"},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:e(6387).Z,alt:"logo"}})]),s._v(" "),a("nav",[a("custom-link",{attrs:{href:s.$route("home")}},[a("translation",{attrs:{value:"inici"}})],1),s._v(" "),a("custom-link",{attrs:{href:s.$route("espais.index")}},[a("translation",{attrs:{value:"espais"}})],1),s._v(" "),a("custom-link",{attrs:{href:s.$route("lang.change",{abbr:"eng"})}},[s._v("\n          English\n        ")]),s._v(" "),a("custom-link",{attrs:{href:s.$route("lang.change",{abbr:"cat"})}},[s._v("\n          Catala\n        ")]),s._v(" "),a("custom-link",{attrs:{href:s.$route("lang.change",{abbr:"esp"})}},[s._v("\n          Espanyol\n        ")])],1)]),s._v(" "),a("div",{staticClass:"right"},[s.$page.props.user?a("div",{staticClass:"userInfo"},[s._v("\n        "+s._s(s.$page.props.user.nom)+" "+s._s(s.$page.props.user.llinatges)+"\n      ")]):s._e(),s._v(" "),s.$page.props.user?a("custom-link",{attrs:{href:s.$route("logout")}},[a("translation",{attrs:{value:"tancar-sessio"}})],1):a("custom-link",{attrs:{href:s.$route("login")}},[a("translation",{attrs:{value:"iniciar-sessio"}})],1)],1)]),s._v(" "),a("flash-message"),s._v(" "),s._t("default")],2)}),[],!1,null,"d490fa34",null).exports},6265:(s,t,e)=>{"use strict";e.d(t,{Z:()=>o});const a=JSON.parse('{"inici":"Inici","espais":"Espais","ver":"Veure","email":"Correu electronic","contrasenya":"Contrasenya","iniciar-sessio":"Iniciar Sessió","tancar-sessio":"Tancar Sessió"}'),n=JSON.parse('{"inici":"Inicio","espais":"Espacios","ver":"Ver","email":"Correo electronico","contrasenya":"Contraseña","iniciar-sessio":"Iniciar Sessión","tancar-sessio":"Cerrar Sessión"}'),i=JSON.parse('{"inici":"Home","espais":"Spaces","ver":"View","email":"Email","contrasenya":"Password","iniciar-sessio":"Login","tancar-sessio":"Logout"}'),r={props:{value:String},computed:{text:function(){var s=this.$page.props.lang;return"cat"===s?a[this.value]||"N/A":"esp"===s?n[this.value]||"N/A":"eng"===s?i[this.value]||"N/A":void 0}}};const o=(0,e(1900).Z)(r,(function(){var s=this,t=s.$createElement;return(s._self._c||t)("div",{directives:[{name:"frag",rawName:"v-frag"}]},[s._v(s._s(s.text))])}),[],!1,null,null,null).exports}}]);