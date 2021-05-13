require("./bootstrap");

import Vue from "vue";
import frag from "vue-frag";
import VueMeta from "vue-meta";
import PortalVue from "portal-vue";
import vClickOutside from "v-click-outside";
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
  render: (h) =>
    h(App, {
      props: {
        initialPage: JSON.parse(el.dataset.page),
        resolveComponent: (name) =>
          import(`./Pages/${name}`).then((module) => module.default),
      },
    }),
}).$mount(el);
