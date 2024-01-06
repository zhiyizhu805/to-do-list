export default {
    addTask(state, payload) {
        state.tasks.push(payload);
    },
    deleteTask(state, payload) {
        console.log(payload.taskId)
        const taskIndex = state.tasks.findIndex(task => task.taskId === payload.taskId);
        state.tasks.splice(taskIndex, 1);
    },
    // updateTask(state, payload) {
    //     const taskIndex = state.tasks.findIndex(task => task.taskId === payload.taskId);
    //     state.tasks[taskIndex].taskName = payload.taskName;
    //     state.tasks[taskIndex].isCompleted = payload.isCompleted;
    // }
    toggleComplete(state, payload) {
        const taskIndex = state.tasks.findIndex(task => task.taskId === payload.taskId);
        state.tasks[taskIndex].isCompleted = !state.tasks[taskIndex].isCompleted;
    },
    deleteCompletedTasks(state) {
        state.tasks = state.tasks.filter(task => !task.isCompleted);
    },
    deleteAllTasks(state) {
        state.tasks = [];
    }
}