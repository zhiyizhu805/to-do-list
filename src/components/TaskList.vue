<template>
  <ul>
    <task-list-item
      v-for="task in AllTasks"
      :key="task.taskId"
      :taskId="task.taskId"
      :taskName="task.taskName"
      :isCompleted="task.isCompleted"
    ></task-list-item>
  </ul>
</template>

<script>
import TaskListItem from "./TaskListItem.vue";

export default {
  components: {
    TaskListItem,
  },
  computed: {
    AllTasks() {
      return this.$store.getters.AllTasks;
    },
  },
};
</script>
