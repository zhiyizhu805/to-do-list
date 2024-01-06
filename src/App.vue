<template>
  <h1>To DO LIST</h1>
  <task-input></task-input>
  <task-list :allTasks=allTasks></task-list>
  <button @click="deleteCompletedTasks">Clear Completed</button>
  <button @click="deleteAllTasks">Clear All</button>
  <p>Pening Task:</p>
</template>

<script>
import TaskList from "./components/TaskList.vue";
import TaskInput from "./components/TaskInput.vue";
export default {
  components: {
    TaskList,
    TaskInput
  },
  computed: {
    allTasks() {
      return this.$store.getters.AllTasks;
    },

},
methods: {
  deleteCompletedTasks() {
    this.$store.dispatch("deleteCompletedTasks");
  },
  deleteAllTasks() {
    this.$store.dispatch("deleteAllTasks");
  },
},
};

</script>
