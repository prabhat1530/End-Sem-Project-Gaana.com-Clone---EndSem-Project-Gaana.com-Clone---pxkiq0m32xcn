import React, { createContext, useState, useContext } from 'react';

// Create a context with default value
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

// Create a custom hook to use the auth context
export const useAuth = () => {
    return useContext(AuthContext);
};