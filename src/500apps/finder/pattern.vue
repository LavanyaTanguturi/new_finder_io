<template>
  <div  class="pattren-bg fd-pattren-cont" >
    <div class="">
      <span class="bgn2">Most common pattern:</span> <span class="pl-1 fd-black-color  d-inline font-1">{{ pattern }}</span>
    </div>
    <div class="">
      <span class="bgn2 ml-auto">Domain:</span
      ><span class="pl-0  fd-black-color d-inline font-1"><a class="fab ml-1 fa-google"></a> <img class="domain-logo" src="../../assets/google-logo.png" alt=""> {{ domain }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pattern: "",
      domain: "",
    };
  },
  mounted() {
    this.getPattern();
    this.domain = this.getTabURLHost();
  },
  methods: {
    getPattern() {
      // Make Axios request and get patter
      this.pattern = "first.last";
    },
  },
};
</script>

<style lang="css" scoped>
p {
  font-size: 20px;
}

</style>
