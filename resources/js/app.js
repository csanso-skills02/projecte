require("./bootstrap");

import Vue from "vue";
import frag from "vue-frag";
import VueMeta from "vue-meta";
import PortalVue from "portal-vue";
import vClickOutside from "v-click-outside";
import { Inertia } from "@inertiajs/inertia";
import { InertiaProgress } from "@inertiajs/progress";
import { App, plugin as InertiaPlugin } from "@inertiajs/inertia-vue";

Vue.prototype.$route = route;

Vue.use(VueMeta);
Vue.use(PortalVue);
Vue.use(vClickOutside);
Vue.use(InertiaPlugin);

Vue.directive("frag", frag);

InertiaProgress.init();

const el = document.getElementById("app");

new Vue({
  render: h =>
    h(App, {
      props: {
        initialPage: JSON.parse(el.dataset.page),
        resolveComponent: name =>
          import(`./Pages/${name}`).then(module => module.default),
      },
    }),
  data: {
    width: window.innerWidth,
    height: window.innerHeight,
    href: window.location.href,
    uri: window.location.pathname,
  },
  mounted() {
    Inertia.on("navigate", event => {
      this.href = window.location.href;
      this.uri = window.location.pathname;
    });

    document.addEventListener("resize", this.onResize);
  },
  beforeDestroy() {
    document.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    },
  },
}).$mount(el);
