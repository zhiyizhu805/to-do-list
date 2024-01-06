<template>
  <section>
    <form @submit.prevent="addTask">
      <div class="form-input">
        <input
          type="text"
          placeholder="New Task"
          v-model.trim="taskName"
          @blur="clearValidity"
        />
        <p v-if="!isTaskNameValid">Task Name cannot be empty.</p>
      </div>
      <div class="form-input">
        <input
          type="date"
          placeholder="New Task"
          v-model.trim="taskDueDate"
          @blur="clearValidity"
        />
        <p v-if="!isTaskDueDateValid">Please select task due date.</p>
      </div>
      <base-button class="flat">Add</base-button>
    </form>
  </section>
</template>

<script>
import BaseButton from "@/ui/BaseButton.vue";
export default {
  components: { BaseButton },
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
      }
      if (this.taskDueDate === null) {
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

<style scoped>
input {
  border: none;
  border-top: 2px solid #7678ed;
  border-bottom: 2px solid #7678ed;
  padding: 0.5rem;
  margin: 0.5rem;
  width: 100%;
}

form {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.form-input {
  width:100%;
}

section {
  margin-bottom: 2rem;
}

p{
  color: red;
  font-size: 0.8rem;
  margin: 0.5rem;
}
</style>
