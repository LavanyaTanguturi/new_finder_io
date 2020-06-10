<template>
  <div>
    Player Select
    <VueCsvImport v-model="csv" :bots="bots" :map-fields="['array', 'of', 'field', 'names']"></VueCsvImport>

    <button @click="startBot()"></button>
  </div>
</template>

<script>
import VueCsvImport from "./csv-import";
import BotsJSON from "./test/twitter.json";

export default {
  data() {
    return {
      bots: [],
      csv: null,
    };
  },
  components: { VueCsvImport },
  mounted() {
    this.loadBots();
  },
  methods: {
    loadBots() {
      this.bots = BotsJSON;
      console.log(this.bots);
    },
  },
};
</script>

<style lang="css" scoped>
p {
  font-size: 20px;
}
</style>
