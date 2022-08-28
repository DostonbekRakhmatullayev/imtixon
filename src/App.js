import "./App.css";
import { RegisterHook } from "./hook/RegisterHook";
import { UseAuth } from "./hook/UseAuth";
import { Main } from "./Main/Main";
import { Login } from "./Pages/Login/Login";
import { Register } from "./Pages/Register/Register";
// import { Registers } from "./Registers";
function App() {
  const { token } = UseAuth();
  const { registers } = RegisterHook();

  if (registers) {
    if (token) {
      return <Main />;
    }
    return <Login />;
  }
    return <Register />;

}
export default App;
