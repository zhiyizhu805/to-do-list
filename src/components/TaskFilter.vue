<template>
  <select v-model="sortOption" @change="changeOption">
    <option value="sortByName">Sort By Name</option>
    <option value="sortByDateAsc">Sort By Date Ascending</option>
    <option value="sortByDateDesc">Sort By Date Descending</option>
    <option value="sortByCompleted">Sort By Completed</option>
  </select>
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
