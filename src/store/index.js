import {createStore} from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const store = createStore({
    state() {
        return {
            events:[{taskName:"Learn Vue",isCompleted:false},
            {taskName:"Learn React",isCompleted:false},
            {taskName:"Learn JavaScript",isCompleted:false},
            ]
        }
    },
    mutations,
    actions,
    getters
})


export default store;