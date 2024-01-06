<template>
  <section>
    <base-button @click="deleteCompletedTasks">Clear Completed</base-button>
    <base-button @click="deleteAllTasks">Clear All</base-button>
  </section>
</template>


<script>
export default {
  methods: {
    deleteCompletedTasks() {
      this.$store.dispatch("deleteCompletedTasks");
    },
    deleteAllTasks() {
      this.$store.dispatch("deleteAllTasks");
    },
}}

</script>

<style scoped>
section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
}

</style>