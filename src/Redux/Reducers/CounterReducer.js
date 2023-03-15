import {
    INCREAMENT_COUNTER,
    DECREAMENT_COUNTER,
    RESET_COUNTER,
  } from "../Actions/CounterActions";
  
  const inititalState = {
    count: 0,
  };
  
  const CounterReducer = (state = inititalState, action) => {
    switch (action.type) {
      case INCREAMENT_COUNTER: {
        console.log("INCREAMENT_COUNTER reducer called", state, action);
        return { ...state, count: state.count + 1 };
      }
  
      case DECREAMENT_COUNTER: {
        console.log("DECREAMENT_COUNTER redcer called", state, action);
        return { ...state, count: state.count - 1 };
      }
      case RESET_COUNTER: {
        console.log("RESET_COUNTER redcer called", state, action);
        return { ...state, count: 0 };
      }
      default: {
        return state;
      }
    }
  };
  
  export default CounterReducer;