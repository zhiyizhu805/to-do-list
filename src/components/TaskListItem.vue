<template>
  <div>
    <li :class="{ completed: isCompleted }" @click="toggleComplete(taskId)">
      <ph-square :size="32" v-if="!isCompleted" /><ph-check-square
        :size="32"
        v-else
      />
      <span>{{ taskName }}</span
      ><span> {{ taskDueDate }}</span>
    </li>
      <button @click="deleteTask(taskId)"><ph-trash :size="32" /></button>
  </div>
</template>

<script>
export default {
  props: ["taskId", "taskName", "taskDueDate", "isCompleted"],
  methods: {
    toggleComplete(taskId) {
      this.$store.dispatch("toggleComplete", { taskId: taskId });
    },
    deleteTask(taskId) {
      this.$store.dispatch("deleteTask", { taskId: taskId });
    },
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
button {
  border: none;
  background: none;
  cursor: pointer;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
