<template>
    <li :class="{completed:isCompleted}">{{taskName}} <button>Remove</button></li>
</template>

<script>
export default {
    props: ['taskId','taskName', 'isCompleted']
}
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>