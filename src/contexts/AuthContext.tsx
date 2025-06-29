
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  avatar?: string;
  role: string;
  profileCompleteness: number;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('diceytech_user');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Dummy login logic
    if (email === 'admin' && password === 'admin') {
      const adminUser: User = {
        id: '1',
        name: 'Dolamu Sowunmi',
        email: 'admin@diceytech.com',
        username: 'dolamu',
        role: 'Admin',
        profileCompleteness: 100,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
      };
      setUser(adminUser);
      setIsAuthenticated(true);
      localStorage.setItem('diceytech_user', JSON.stringify(adminUser));
      return;
    }
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: 'John Doe',
      email: email,
      username: email.split('@')[0],
      role: 'User',
      profileCompleteness: 75
    };
    
    setUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem('diceytech_user', JSON.stringify(mockUser));
  };

  const register = async (userData: any) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: userData.fullName,
      email: userData.email,
      username: userData.username,
      role: 'User',
      profileCompleteness: 60
    };
    
    setUser(newUser);
    setIsAuthenticated(true);
    localStorage.setItem('diceytech_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('diceytech_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
