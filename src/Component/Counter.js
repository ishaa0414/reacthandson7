import { useSelector, useDispatch } from "react-redux";
import {
  increamentCounterAction,
  decrementCounterAction,
  resetCounterAction,
} from "../Redux/Actions/CounterActions";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterReducer.count);

  return (
    <div style={{ textAlign: "center" }}>
      {" "}
      <h1 style={{ color: "white" }}> COUNTER </h1>
      <hr />
      <br />{" "}
      <h2
        style={{
          border: "1px solid brown",
          width: "70px",
          marginLeft: "115px",
        }}
      >
        {count}
      </h2>{" "}
      <button
        onClick={() => {
          dispatch(increamentCounterAction());
        }}
      >
        {" "}
        <em>Increase</em>{" "}
      </button>{" "}
      &nbsp; &nbsp; &nbsp;{" "}
      <button
        onClick={() => {
          dispatch(decrementCounterAction());
        }}
      >
        {" "}
        <em>Decrease</em>{" "}
      </button>{" "}
      <br />
      <br />{" "}
      <button
        onClick={() => {
          dispatch(resetCounterAction());
        }}
      >
        {" "}
        <strong>Reset</strong>{" "}
      </button>{" "}
    </div>
  );
};

export default Counter;
