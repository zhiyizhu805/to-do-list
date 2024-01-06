<template>
  <section>
    <select v-model="sortOption" @change="changeOption">
      <option value="sortByName">Sort By Name</option>
      <option value="sortByDateAsc">Sort By Date Ascending</option>
      <option value="sortByDateDesc">Sort By Date Descending</option>
      <option value="sortByCompleted">Sort By Completed</option>
    </select>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sortOption: "sortByCompleted",
    };
  },
  methods: {
    changeOption() {
      this.$emit("change-option", this.sortOption);
    },
  },
};
</script>

<style scoped>
select {
  padding: 0.5rem;
  /* border-radius: 0.5rem; */
  border: none;
  font-size: 1rem;
  font-family: inherit;
  cursor: pointer;
}
section {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
}
</style>
