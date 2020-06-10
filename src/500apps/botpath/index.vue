<template>
  <div class="">
    <div class="border border-primary m-2">
      <Recorder></Recorder>
    </div>
    <br />
    <div class="border border-primary m-2">
      <Player></Player>
    </div>
  </div>
</template>

<script>
import Player from "./player";
import Recorder from "./recorder";
export default {
  data() {
    return {};
  },
  components: {
    Player,
    Recorder,
  },
  mounted() {},
};
</script>

<style lang="css" scoped>
p {
  font-size: 20px;
}
</style>
