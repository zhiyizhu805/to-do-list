<template>
  <ul>
    <task-list-item
      v-for="task in allTasks"
      :key="task.taskId"
      :taskId="task.taskId"
      :taskName="task.taskName"
      :taskDueDate="task.taskDueDate"
      :isCompleted="task.isCompleted"
    ></task-list-item>
  </ul>
</template>

<script>
import TaskListItem from "./TaskListItem.vue";

export default {
  props: ["allTasks"],
  components: {
    TaskListItem,
  },
};
</script>
