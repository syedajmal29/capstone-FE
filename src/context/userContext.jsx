// src/context/userContext.jsx
import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [applydetails,setapplydetails]=useState([]);

  const login = (userData) => {
    // Save the user data including the role
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout,setapplydetails,applydetails }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
