(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NotRedux = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  return {
    createStore(reducer, preloadedState) {
      let state = preloadedState;
      const listeners = [];
      const dispatch = function (action) {
        state = reducer(state, action);
        listeners.forEach((fn) => fn());
      };
      dispatch({});
      return {
        dispatch,
        getState: () => state,
        subscribe: function (fn) {
          listeners.push(fn);
        },
      };
    },
  };
});
