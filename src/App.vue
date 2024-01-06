<template>
  <h1>To DO LIST</h1>
  <input type="text" placeholder="New Task" />
  <button>Add</button>
  <ul>
    <event-list-item
      v-for="task in AllTasks"
      :key="task.taskId"
      :taskId="task.taskId"
      :taskName="task.taskName"
      :isCompleted="task.isCompleted"
    ></event-list-item>
  </ul>
  <button>Clear Completed</button>
  <button>Clear All</button>
  <p>Pening Task:</p>
</template>

<script>
import EventListItem from "./components/TaskListItem.vue";
export default {
  components: {
    EventListItem,
  },
  computed: {
    AllTasks() {
      return this.$store.getters.AllTasks;
    },
  },
};
</script>
