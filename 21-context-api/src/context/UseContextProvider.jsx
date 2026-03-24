import React, { useState } from "react";
import UserContext from "./UseContext";

const UseContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UseContext.provider value={{ user, useState }}>
      {children}
    </UseContext.provider>
  );
};

export default UseContextProvider;
