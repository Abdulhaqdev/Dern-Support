import { User } from '@/types';

// This is a mock auth service for demonstration purposes
// In a real app, this would be replaced with JWT or NextAuth integration

// Mock user data
const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '555-123-4567',
    role: 'personal',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@acme.com',
    phone: '555-987-6543',
    role: 'business',
    companyName: 'Acme Inc',
    companySize: 50,
    createdAt: new Date().toISOString(),
  },
];

// Mock login
export const login = async (email: string, password: string): Promise<{ user: User; token: string } | null> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const user = mockUsers.find(u => u.email === email);
  
  if (user && password === 'password') { // In a real app, compare hashed passwords
    // Generate a mock JWT token
    const token = `mock_jwt_token_${user.id}_${Date.now()}`;
    
    // Store token in localStorage (in a real app, consider HttpOnly cookies)
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth_token', token);
      localStorage.setItem('user', JSON.stringify(user));
    }
    
    return { user, token };
  }
  
  return null;
};

// Mock register
export const register = async (userData: Partial<User>, password: string): Promise<{ user: User; token: string }> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Create new user
  const newUser: User = {
    id: `${mockUsers.length + 1}`,
    name: userData.name || '',
    email: userData.email || '',
    phone: userData.phone || '',
    role: userData.role || 'personal',
    companyName: userData.companyName,
    companySize: userData.companySize,
    createdAt: new Date().toISOString(),
  };
  
  // In a real app, would store in database
  mockUsers.push(newUser);
  
  // Generate a mock JWT token
  const token = `mock_jwt_token_${newUser.id}_${Date.now()}`;
  
  // Store token in localStorage (in a real app, consider HttpOnly cookies)
  if (typeof window !== 'undefined') {
    localStorage.setItem('auth_token', token);
    localStorage.setItem('user', JSON.stringify(newUser));
  }
  
  return { user: newUser, token };
};

// Mock logout
export const logout = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
  }
};

// Get current user
export const getCurrentUser = (): User | null => {
  if (typeof window !== 'undefined') {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      return JSON.parse(userJson);
    }
  }
  return null;
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  if (typeof window !== 'undefined') {
    return !!localStorage.getItem('auth_token');
  }
  return false;
};