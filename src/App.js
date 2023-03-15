
import store from "./Redux/Store";
import { Provider } from "react-redux";
import RouterComponent from "./Component/Router";

function App() {

  
  return (
    <>
   <Provider store={store}>
      <div className="App">
       <RouterComponent />
      </div>
    </Provider>
    </>
  );
}

export default App;
