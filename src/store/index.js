import { createStore } from "vuex";

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const store = createStore({
  state() {
    return {
      tasks: [
        {
          taskId: "t1",
          taskName: "Learn Vue",
          taskDueDate: "2024-01-14",
          isCompleted: false,
        },
        {
          taskId: "t2",
          taskName: "Learn React",
          taskDueDate: "2024-01-15",
          isCompleted: true,
        },
        {
          taskId: "t3",
          taskName: "Learn JavaScript",
          taskDueDate: "2024-01-16",
          isCompleted: true,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
});

export default store;
