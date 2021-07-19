//Importing the module vuex
import { createStore } from 'vuex'
//Store that increment or decrement a quantity.
export const store = createStore({
    state:{
        count: 0,
        countries: ['El Salvador', 'United States', 'Mexico']
    },
    //We need to use  the mapGetters in the component where we need it.
    getters:
    {
        getContries:(state) => state.countries
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