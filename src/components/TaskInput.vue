<template>
  <section>
    <form @submit.prevent="addTask">
      <input type="text" placeholder="New Task" v-model.trim="taskName" @blur="clearValidity"/>
      <p v-if="!isTaskNameValid">Task Name cannot be empty.</p>
      <input type="date" placeholder="New Task" v-model.trim="taskDueDate" @blur="clearValidity"/>
      <p v-if="!isTaskDueDateValid">Please select task due date.</p>
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
      isTaskNameValid: true,
      isTaskDueDateValid: true,
      isFormValid: true,
    };
  },
  methods: {
    clearValidity() {
      this.isTaskNameValid = true;
      this.isTaskDueDateValid = true;
    },
    validateInput() {
      if (this.taskName === "") {
        this.isTaskNameValid = false;
        this.isFormValid = false;
      } if (this.taskDueDate === null) {
        this.isTaskDueDateValid = false;
        this.isFormValid = false;
      }
    },
    addTask() {
      this.isTaskNameValid = true;
      this.isTaskDueDateValid = true;
      this.isFormValid = true;
      this.validateInput();
      if (!this.isFormValid) {
        return;
      }
      this.$store.dispatch("addTask", {
        taskId: new Date().toISOString(),
        taskName: this.taskName,
        taskDueDate: this.taskDueDate,
        isCompleted: false,
      });
        this.taskName = "";
        this.taskDueDate = null;
    },
  },
};
</script>
