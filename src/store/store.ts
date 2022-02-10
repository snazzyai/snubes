import create from 'zustand';

type Store = {
  isNavToggled: boolean
  navToggle: () => void
};
const useStore = create<Store>((set) => ({
  isNavToggled: false,
  navToggle: () => set((state) => ({ isNavToggled: !state.isNavToggled })),
}));

export default useStore;
