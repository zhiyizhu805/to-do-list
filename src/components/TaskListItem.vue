<template>
  <div>
    <li :class="{ completed: isCompleted }" @click="toggleComplete(taskId)">
      <ph-square :size="32" v-if="!isCompleted" /><ph-check-square
        :size="32"
        v-else
      />
      <span class="task-name">{{ taskName }}</span
      ><span> {{ taskDueDate }}</span>
    </li>
      <base-button class="flat" @click="deleteTask(taskId)"><ph-trash :size="32" /></base-button>
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
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.task-name {
  width: 50%;
}

</style>
