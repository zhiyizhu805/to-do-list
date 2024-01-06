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
}