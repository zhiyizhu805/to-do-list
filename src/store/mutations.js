export default {
    addTask(state, payload) {
        state.tasks.push(payload);
    },
    deleteTask(state, payload) {
        const taskIndex = state.tasks.findIndex(task => task.taskId === payload.taskId);
        state.tasks.splice(taskIndex, 1);
    },
    // updateTask(state, payload) {
    //     const taskIndex = state.tasks.findIndex(task => task.taskId === payload.taskId);
    //     state.tasks[taskIndex].taskName = payload.taskName;
    //     state.tasks[taskIndex].isCompleted = payload.isCompleted;
    // }
}