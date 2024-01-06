export default {
    addTask(context, payload) {
        // console.log(payload)
        context.commit('addTask', payload);
    },
    deleteTask(context, payload) {
        context.commit('deleteTask', payload);
    },
    // updateTask(context, payload) {
    //     context.commit('updateTask', payload);
    // }
    toggleComplete(context, payload) {
        context.commit('toggleComplete', payload);
    },
    deleteCompletedTasks(context) {
        context.commit('deleteCompletedTasks');
    },
    deleteAllTasks(context) {
        context.commit('deleteAllTasks');
    }
}