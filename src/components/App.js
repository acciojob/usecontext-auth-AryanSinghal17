
import React, { createContext, useContext, useState } from "react";
import "./../styles/App.css";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAuth = () => {
    setIsAuthenticated((prev) => !prev);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const Auth = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <div>
      <h2>Robot Verification</h2>

      <input
        type="checkbox"
        checked={isAuthenticated}
        onChange={toggleAuth}
      />

      <label>I am not a robot</label>

      {isAuthenticated ? (
        <h3>You are authenticated!</h3>
      ) : (
        <h3>Please verify that you are not a robot.</h3>
      )}
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <div>
        <Auth />
      </div>
    </AuthProvider>
  );
};

export default App;
