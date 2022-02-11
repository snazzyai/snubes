import create from 'zustand';

type ToggleStore = {
  isNavToggled: boolean
  navToggle: () => void
};

type FormStore = {
  company: string
  name: string
  dialCode: string
  phone: string
  email: string
  formIsSubmitted: boolean
  updateCompany: (value:string) => any
  updateName: (value:string) => any
  updateDialCode: (value:string) => any
  updatePhone: (value:string) => any
  updateEmail: (value:string) => any
  setFormIsSubmitted: () => any
};

const useToggleStore = create<ToggleStore>((set) => ({
  isNavToggled: false,
  navToggle: () => set((state) => ({ isNavToggled: !state.isNavToggled })),
}));

const useFormStore = create<FormStore>((set) => ({
  company: '',
  name: '',
  dialCode: '',
  phone: '',
  email: '',
  formIsSubmitted: false,
  updateCompany: (value) => set((state) => ({ ...state, company: value })),
  updateName: (value) => set((state) => ({ ...state, name: value })),
  updateDialCode: (value) => set((state) => ({ ...state, dialCode: value })),
  updatePhone: (value) => set((state) => ({ ...state, phone: value })),
  updateEmail: (value) => set((state) => ({ ...state, email: value })),
  setFormIsSubmitted: () => set((state) => ({ ...state, formIsSubmitted: true })),
}));

export { useToggleStore, useFormStore };
