<template>
  <ul>
    <task-list-item
      v-for="task in AllTasks"
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
  props: ["AllTasks"],
  components: {
    TaskListItem,
  },
};
</script>
