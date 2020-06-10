<template>
  <div class="fd-w-bg fd-bdy">
    <DomainPattern></DomainPattern>
    <EmailResults></EmailResults>
  </div>
</template>

<script>
import DomainPattern from "./pattern";
import EmailResults from "./emails";
export default {
  data() {
    return {};
  },
  components: {
    DomainPattern,
    EmailResults,
  },
  mounted() {},
};
</script>

<style lang="css" scoped>
p {
  font-size: 20px;
}
.fd-w-bg{
  background:#fff;
}
.fd-bdy{
  display:table;
  width: 100%;
  background: #fff;
}
</style>
