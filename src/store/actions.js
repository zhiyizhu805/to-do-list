export default {
    addTask(context, payload) {
        context.commit('addTask', payload);
    },
    deleteTask(context, payload) {
        context.commit('deleteTask', payload);
    },
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