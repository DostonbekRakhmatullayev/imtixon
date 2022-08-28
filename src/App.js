import { Route, Routes } from "react-router-dom";
import "./App.css";
import { RegisterHook } from "./hook/RegisterHook";
import { UseAuth } from "./hook/UseAuth";
import { Main } from "./Main/Main";
import { Login } from "./Pages/Login/Login";
import {Register} from "./Pages/Register/Register"
import { Registers } from "./Registers";
function App() {
  const { token } = UseAuth();
  const {registers} = RegisterHook()


      if (registers) {
    
        if (token) {
          return <Main />;
        }
        <Routes>
        <Route  path="/"  element={<Register/>}/>
        {/* <Route  path="/aaa"  element={<Login/>}/> */}
      </Routes>
        return <Login/>
        
       
      }else {
        <Routes>
        {/* <Route  path="/"  element={<Register/>}/> */}
        <Route  path="/"  element={<Login/>}/>
      </Routes>
        return <Register/>
      }
}
export default App;
