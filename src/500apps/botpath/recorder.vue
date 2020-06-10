<template>
  <div>
    Recorder
    <b-form @submit.stop.prevent>
      <label for="url">Enter your URL</label>
      <b-input v-model="url" type="url" :state="validation" id="url"></b-input>
      <b-form-invalid-feedback :state="validation">
        Please enter a valid URL (starting with http://)
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="validation">
        Click start to start recording.
      </b-form-valid-feedback>
      <b-button type="submit" variant="primary" :disabled="!validation" @click="record">Start</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  computed: {
    validation() {
      const pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
          "(\\#[-a-z\\d_]*)?$",
        "i"
      ); // fragment locator

      return !!pattern.test(this.url);
    },
  },
  data() {
    return {
      url: "",
    };
  },
  mounted() {
    // Get Activities
    this.url = this.getTabURL();
  },
  methods: {
    record(e) {
      e.preventDefault();
      console.log("Post message");
      // Send an event to parent - to launch
      window.parent.postMessage(
        {
          message: "500apps",
          app: "botpath",
          event: "botpath-record",
          url: this.url,
        },
        "*"
      );
    },
  },
};
</script>

<style lang="css" scoped>
p {
  font-size: 20px;
}
</style>
