<template>
  <section>
    <form @submit.prevent="addTask">
      <input type="text" placeholder="New Task" v-model="taskName" />
      <input type="date" placeholder="New Task" v-model="taskDueDate" />
      <button>Add</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      taskName: "",
      taskDueDate: null,
    };
  },
  methods: {
    addTask() {
      this.$store.dispatch("addTask", {
        taskId: new Date().toISOString(),
        taskName: this.taskName,
        taskDueDate: this.taskDueDate,
        isCompleted: false,
      });
    },
  },
};
</script>
