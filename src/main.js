import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Bootstrap
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Get Mixin
import { mixin500apps } from "./500apps/mixin";
Vue.mixin(mixin500apps);

Vue.config.productionTip = false;

console.log(process.env);

// Start directly if not in iframe - this is for testing
if (!inIframe()) {
  Vue.prototype.$tab = { url: "http://vuejs.org" };
  Vue.prototype.$token = {
    value:
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqd3QiLCJlbWFpbCI6InNpdmEuc3VyZWRkeUB5b3BtYWlsLmNvbSIsInRlbmFudF9pZCI6IjQwODciLCJ1c2VyX2lkIjoiNTgzMiIsInVzZXJfaW1nIjoiIiwicmVnaW9uIjoidXMxIn0.iPI1TfAL-wiCLfO0cXCb9An0GnRDyq2xSsuF705WDTA",
  };
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app");
} else {
  window.addEventListener("message", function(e) {
    // We will add for parent communication
    console.log(e.data);

    // Check if it is coming from our own - webpack sends a bunch of events
    if (!e.data.message || e.data.message != "500apps") return;

    Vue.prototype.$user = e.data.user;
    Vue.prototype.$tab = e.data.tab;
    Vue.prototype.$xpath_data = e.data.data;
    Vue.prototype.$token = e.data.token;

    new Vue({
      router,
      render: (h) => h(App),
    }).$mount("#app");
  });
}

function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}
