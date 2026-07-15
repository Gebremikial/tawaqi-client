import { create } from 'zustand';
import type { User } from '../types/user';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: Pick<User, 'id' | 'email' | 'name'>) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user) =>
    set({
      user: {
        ...user,
        username: user.email,
        role: 'talent',
        is_verified: true,
        is_active: true,
        created_at: new Date().toISOString(),
      },
      isAuthenticated: true,
    }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));
