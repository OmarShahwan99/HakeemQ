import React, { useState } from "react";

const AuthContext = React.createContext({
  token: null,
  register: (drInfo, token) => {},
  login: (drInfo) => {},
  logout: () => {},
  activate: () => {},
  unactivate: () => {},
  isAuth: false,
  isActive: false,
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [isActive, setIsActive] = useState(false);

  const doctorIsAuthenticated = !!token;

  const registerHandler = (drInfo, token) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("name", drInfo.name);
  };

  const loginHandler = (drInfo) => {
    setToken(drInfo.token);
    localStorage.setItem("token", drInfo.token);
    localStorage.setItem("name", drInfo.user);
    localStorage.setItem("userId", drInfo.id);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.clear();
  };

  const activateAccount = () => {
    setIsActive(true);
  };

  const unactivateAccount = () => {
    setIsActive(false);
  };

  const contextValue = {
    token: token,
    register: registerHandler,
    login: loginHandler,
    logout: logoutHandler,
    isAuth: doctorIsAuthenticated,
    isActive: isActive,
    activate: activateAccount,
    unactivate: unactivateAccount,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
