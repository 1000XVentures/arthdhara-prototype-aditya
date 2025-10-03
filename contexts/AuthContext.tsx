"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  phone: string | null;
  login: (phone: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [phone, setPhone] = useState<string | null>(null);

  useEffect(() => {
    // Check if user is already authenticated (from localStorage)
    const savedAuth = localStorage.getItem("arthdhara_auth");
    if (savedAuth) {
      const { phone: savedPhone } = JSON.parse(savedAuth);
      setPhone(savedPhone);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (phoneNumber: string) => {
    setPhone(phoneNumber);
    setIsAuthenticated(true);
    localStorage.setItem(
      "arthdhara_auth",
      JSON.stringify({ phone: phoneNumber })
    );
  };

  const logout = () => {
    setPhone(null);
    setIsAuthenticated(false);
    localStorage.removeItem("arthdhara_auth");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, phone, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
