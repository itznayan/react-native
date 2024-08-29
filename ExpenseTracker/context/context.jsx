import { createContext } from "react";

export const context = createContext();

const Ctx = ({ children }) => {
  const value = { name: "Jonny", age: 20 };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default Ctx;
