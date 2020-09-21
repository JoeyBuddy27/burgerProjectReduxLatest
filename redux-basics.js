const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
	counter: 0
}

//Reducer 
const rootReducer = (state = initialState, action) => {
	return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Dispatching Action
store.disptach({type: 'INC_COUNTER' });
store.disptach({type: 'ADD_COUNTER', value: 10});
console.log(store.getState())

//Subscription