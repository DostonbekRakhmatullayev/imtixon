import { useContext } from "react";
import { RegisterContext } from "../context/RedisterContext";

export const RegisterHook = ()=>{
  const {registers,setRegisters} = useContext(RegisterContext)
  return {registers,setRegisters}
}