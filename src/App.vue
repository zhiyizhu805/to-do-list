<template>
  <h1>To DO LIST</h1>
  <task-input></task-input>
  <select v-model="sortOption">
    <option value="sortByName">Sort By Name</option>
    <option value="sortByDateAsc">Sort By Date Ascending</option>
    <option value="sortByDateDesc">Sort By Date Descending</option>
    <option value="sortByCompleted">Sort By Completed</option>
  </select>
  <task-list :allTasks="sortedTasks()"></task-list>
  <button @click="deleteCompletedTasks">Clear Completed</button>
  <button @click="deleteAllTasks">Clear All</button>
  <p>Pening Task:{{ pendingTasksNumber }}</p>
</template>

<script>
import TaskList from "./components/TaskList.vue";
import TaskInput from "./components/TaskInput.vue";
export default {
  data() {
    return {
      sortOption: "sortByCompleted",
    };
  },
  components: {
    TaskList,
    TaskInput,
  },
  computed: {
    allTasks() {
      return this.$store.getters.AllTasks;
    },
    pendingTasksNumber() {
      return this.allTasks.filter((task) => !task.isCompleted).length;
    },
  },
  methods: {
    deleteCompletedTasks() {
      this.$store.dispatch("deleteCompletedTasks");
    },
    deleteAllTasks() {
      this.$store.dispatch("deleteAllTasks");
    },
    sortedTasks() {
      switch (this.sortOption) {
        case "sortByName":
          return this.allTasks.sort((a, b) => {
            return a.taskName.localeCompare(b.taskName);
          });
        case "sortByDateAsc":
          return this.allTasks.sort((a, b) => {
            return new Date(a.taskDueDate) - new Date(b.taskDueDate);
          });
        case "sortByDateDesc":
          return this.allTasks.sort((a, b) => {
            return new Date(b.taskDueDate) - new Date(a.taskDueDate);
          });
        case "sortByCompleted":
          return this.allTasks.sort((a, b) => {
            return a.isCompleted - b.isCompleted;
          });
      }
    },
  },
};
</script>
