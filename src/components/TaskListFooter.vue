<template>
  <section>
    <p><span class="title">Pening Task:</span><span>{{ pendingTasksNumber }}</span></p>
    <p><span  class="title">Task Completion Rate:</span> <span>{{ completionRate }}%</span></p>
  </section>
</template>


<script>
export default {
    props: ["pendingTasksNumber", "completionRate"],
}
</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    gap:1rem;
    margin-bottom: 2rem;
}
p{
    display: flex;
    justify-content: space-between;
    padding-right: 2rem;
}
/* .title{
    width: 35%;
} */
</style>