export const INCREAMENT_COUNTER = "INCREAMENT_COUNTER";
export const DECREAMENT_COUNTER = "DECREAMENT_COUNTER";
export const RESET_COUNTER = "RESET_COUNTER";

export const increamentCounterAction = () => {
  console.log("increamentCounterAction called");
  return {
    type: INCREAMENT_COUNTER,
  };
};

export const decrementCounterAction = () => {
  console.log("decrementCounterAction called");
  return {
    type: DECREAMENT_COUNTER,
  };
};

export const resetCounterAction = () => {
  console.log("resetCounterAction called");
  return {
    type: RESET_COUNTER,
  };
};