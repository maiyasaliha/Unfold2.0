// AppContext.js
import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [publicVariable, setPublicVariable] = useState(null);

  return (
    <AppContext.Provider value={{ publicVariable, setPublicVariable }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
