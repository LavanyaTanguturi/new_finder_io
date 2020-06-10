<template>
  <div>
    Today's hrs
    {{ today }}

    Weekly
    {{ weekly }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      weekly: "weekly",
      today: "today",
    };
  },
  mounted() {
    // Get Activities
    this.getToday();
    this.getWeekly();
  },
  methods: {
    getToday() {
      this.today = "0";
    },

    getWeekly() {
      this.weekly = "0";
    },
  },
};
</script>

<style lang="css" scoped>
p {
  font-size: 20px;
}
</style>
