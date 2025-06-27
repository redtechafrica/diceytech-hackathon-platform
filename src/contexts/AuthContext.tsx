import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  avatar?: string;
  role: 'talent' | 'organization';
  profileCompleteness: number;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (userData: any) => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('diceytech_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      let mockUser: User;
      
      // Check for dummy admin login
      if (email === 'admin' && password === 'admin') {
        mockUser = {
          id: 'admin',
          name: 'Admin User',
          email: 'admin@diceytech.com',
          username: 'admin',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
          role: 'talent',
          profileCompleteness: 100
        };
      } else {
        // Regular mock user for any other credentials
        mockUser = {
          id: '1',
          name: 'David Ogundepo',
          email: email,
          username: 'david_ogundepo',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
          role: 'talent',
          profileCompleteness: 75
        };
      }
      
      localStorage.setItem('diceytech_user', JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: any) => {
    setIsLoading(true);
    try {
      // This would be replaced with actual API call
      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        name: userData.fullName,
        email: userData.email,
        username: userData.username,
        role: 'talent',
        profileCompleteness: 25
      };
      
      localStorage.setItem('diceytech_user', JSON.stringify(newUser));
      setUser(newUser);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('diceytech_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
