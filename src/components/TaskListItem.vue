<template>
 <div>

    <li :class="{completed:isCompleted}" @click="toggleComplete(taskId)">{{taskName}} {{taskDueDate}}</li>
    <button @click="deleteTask">Remove</button>
 </div>
</template>

<script>
export default {
    props: ['taskId','taskName', 'taskDueDate','isCompleted'],
    methods: {
        toggleComplete(taskId) {
            this.$store.dispatch('toggleComplete', {taskId: taskId})
        },
        deleteTask(taskId) {
            this.$store.dispatch('deleteTask', {taskId: taskId})
        }
    }
}
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>