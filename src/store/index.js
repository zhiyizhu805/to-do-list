import {createStore} from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const store = createStore({
    state() {
        return {
            tasks:[{taskId:'t1',taskName:"Learn Vue",isCompleted:false},
            {taskId:'t2',taskName:"Learn React",isCompleted:true},
            {taskId:'t3',taskName:"Learn JavaScript",isCompleted:true},
            ]
        }
    },
    mutations,
    actions,
    getters
})


export default store;