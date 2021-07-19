//Importing the module vuex
import { createStore } from 'vuex'
import Http from "axios";
//Store that increment or decrement a quantity.
export const store = createStore({
    state:{
        count: 0,
        countries: ['El Salvador', 'United States', 'Mexico'],
        users: []
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
        },
        getUsers(state)
        {
          Http.get("https://jsonplaceholder.typicode.com/users")
              .then((response) => state.users = response.data)
        }
    },
    actions:
    {
        getUsers(context) 
        {
            context.commit('getUsers');
        },
        setIncrement(context)
        {
            context.commit('increment');
        },
        setDecrement(context)
        {
            context.commit('decrement');
        }
    }
});