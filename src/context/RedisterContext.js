import { createContext, useState } from "react";
import { useEffect } from "react";
export const RegisterContext = createContext();
export const RegisterProvider = ({ children }) => {
  const Local = JSON.parse(localStorage.getItem("registers"));
  const [registers, setRegisters] = useState(Local);
  console.log(registers);

  useEffect(() => {
    if (registers) {
      localStorage.setItem("registers", JSON.stringify(registers));
    } else {
      localStorage.removeItem("registers");
    }
  }, [registers]);

  return (
    <RegisterContext.Provider value={{ registers, setRegisters }}>
      {children}
    </RegisterContext.Provider>
  );
};
