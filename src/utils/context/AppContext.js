import React from "react";

const AppContext = React.createContext();

const contextReducer = (state, action) => ({...state, ...action});

const AppProvider = (props) => {
  const [parameter, setParameter] = React.useReducer(contextReducer, {
    page: "",
    status: "",
    name: "",
  });

  const value = [parameter, setParameter];
  return <AppContext.Provider value={value} {...props} />;
};

const useApp = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error(`useApp must be used within an AppProvider`);
  }
  return context;
};

export { AppProvider, useApp };