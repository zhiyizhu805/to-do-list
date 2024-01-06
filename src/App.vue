<template>
  <h1>To DO LIST</h1>
  <input type="text" placeholder="New Task" />
  <button>Add</button>
  <task-list></task-list>
  <button>Clear Completed</button>
  <button>Clear All</button>
  <p>Pening Task:</p>
</template>

<script>
import TaskList from "./components/TaskList.vue";
export default {
  components: {
    TaskList,
  },
};
</script>
