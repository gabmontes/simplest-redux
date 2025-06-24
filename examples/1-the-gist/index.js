// See https://github.com/reduxjs/redux/tree/v4.2.1?tab=readme-ov-file#the-gist

const { createStore } = require("../../src/simplest-redux");

function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

let store = createStore(counter);
store.subscribe(() => console.log(store.getState()));
store.dispatch({ type: "INCREMENT" }); // Prints 1
store.dispatch({ type: "INCREMENT" }); // Prints 2
store.dispatch({ type: "DECREMENT" }); // Prints 1
