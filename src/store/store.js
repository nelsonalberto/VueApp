//Importing the module vuex
import { createStore } from 'vuex'
//Store that increment or decrement a quantity.
export const store = createStore({
    state:{
        count: 0
    },
    mutations:{
        increment(state){
            state.count++;
        },
        decrement(state){
            state.count--;
        }
    }
});

//Indicating the commits associated with the mutations
store.commit('increment');
store.commit('decrement');