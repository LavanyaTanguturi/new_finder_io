// define a mixin object
import axios from "axios";
var mixin500apps = {
  methods: {
    getDomain: function() {
      //return "https://beta.qa.500apps.io";
      return "";
    },
    getURL: function(url) {
      return axios
        .get(this.getDomain() + url, {
          headers: {
            token: this.$token.value,
          },
        })
        .then((response) => response.data);
    },
    getTabURL() {
      console.log(this.$tab);
      if (this.$tab) return this.$tab.url;
      return "https://500apps.com";
    },
    getTabURLHost() {
      const url = this.getTabURL();
      const host = new URL(url).host;
      return host;
    },
  },
};

export { mixin500apps };
