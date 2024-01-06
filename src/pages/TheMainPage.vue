<template>
  <div>
    <task-list-header></task-list-header>
    <task-input></task-input>
    <task-filter @change-option="sortOption = $event"></task-filter>
    <task-list :allTasks="sortedTasks()"></task-list>
    <base-button @click="deleteCompletedTasks">Clear Completed</base-button>
    <base-button @click="deleteAllTasks">Clear All</base-button>
    <p>Pening Task:{{ pendingTasksNumber }}</p>
  </div>
</template>

<script>
import TaskListHeader from "../components/TaskListHeader.vue";
import TaskList from "../components/TaskList.vue";
import TaskInput from "../components/TaskInput.vue";
import TaskFilter from "../components/TaskFilter.vue";
export default {
  data() {
    return {
      sortOption: "sortByCompleted",
    };
  },
  components: {
    TaskList,
    TaskInput,
    TaskFilter,
    TaskListHeader
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


<style scoped>
div {
  margin: 0 auto;
  width: 80%;
  max-width: 600px;
  padding: 1rem;
  /* border-radius: 5px; */
  border: 5px solid #7678ed;
  background-color: white;
  margin-top: 4rem;
}
</style>