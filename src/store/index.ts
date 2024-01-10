import { create } from 'zustand';

interface UserState {
  email: string;
  setEmail: (updatedEmail: string) => void;
}

export const useUserStore = create<UserState>()((set) => ({
  email: '',
  setEmail: (updatedEmail) => {
    set(() => ({ email: updatedEmail }));
  },
}));
