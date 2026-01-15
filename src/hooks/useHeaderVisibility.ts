import { create } from 'zustand';

interface HeaderVisibilityState {
  isVisible: boolean;
  hide: () => void;
  show: () => void;
}

export const useHeaderVisibility = create<HeaderVisibilityState>((set) => ({
  isVisible: true,
  hide: () => set({ isVisible: false }),
  show: () => set({ isVisible: true }),
}));
