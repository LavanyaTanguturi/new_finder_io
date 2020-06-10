<template>
  <div class="fd-w-bg">
    <div v-if="emails" class="fd-tabCont">
      <div v-if="emails.length == 0">No results found</div>
      <b-tabs v-else content-class="fd-tabs">
        <b-tab title="All" active><EmailResults :emails="emails" showCategory="false"></EmailResults></b-tab>
        <b-tab title="Personal"><EmailResults :emails="getPersonalEmails()"></EmailResults></b-tab>
        <b-tab title="General"><EmailResults :emails="getGenericEmails()"></EmailResults></b-tab>
      </b-tabs>

      <!-- search box -->

      <input type="text" class="fd-search-box" >
    </div>
    <div v-else>
      Loading
    </div>
  </div>
</template>

<script>
import EmailResults from "./email-results";
export default {
  data() {
    return {
      emails: undefined,
      domain: "",
    };
  },
  components: { EmailResults },
  mounted() {
    this.domain = this.getTabURLHost();
    this.getEmails();
  },
  methods: {
    getEmails() {
      // Make Axios request and get pattern
      console.log("ok" + "/c/ds/" + this.domain);
      this.getURL("/c/ds/" + this.domain).then((data) => (this.emails = data));
      console.log(this.emails);
    },
    getAllEmails() {
      return this.emails;
    },
    getPersonalEmails() {
      return this.emails.filter((item) => item.category.toLowerCase() === "personal");
    },
    getGenericEmails() {
      return this.emails.filter((item) => item.category.toLowerCase() !== "personal");
    },
  },
};
</script>

<style lang="css" scoped>
p {
  font-size: 20px;
}
.fd-w-bg{
  background: #fff;
}
</style>
