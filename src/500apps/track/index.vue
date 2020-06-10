<template>
  <div>
    <Summary></Summary>
    <Activities></Activities>

    <AddManual></AddManual>
  </div>
</template>

<script>
import Summary from "./summary";
import Activities from "./activities";
import AddManual from "./add-manual";
export default {
  data() {
    return {};
  },
  components: {
    Summary,
    Activities,
    AddManual,
  },
  mounted() {},
};
</script>

<style lang="css" scoped>
p {
  font-size: 20px;
}
</style>
