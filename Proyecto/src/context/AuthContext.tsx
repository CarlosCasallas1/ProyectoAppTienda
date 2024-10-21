import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  loggedInUserName: string | null;
  setLoggedInUserName: React.Dispatch<React.SetStateAction<string | null>>;
  logout: () => void; // Añadimos la función logout al tipo
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [loggedInUserName, setLoggedInUserName] = useState<string | null>(null);

  // Definir la función logout que limpia el estado de loggedInUserName
  const logout = () => {
    setLoggedInUserName(null);
  };

  return (
    <AuthContext.Provider value={{ loggedInUserName, setLoggedInUserName, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
