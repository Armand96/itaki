import { create } from "zustand";

interface LoadingState {
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

const useLoading = create<LoadingState>((set) => ({
    loading: true,
    setLoading: (loading) => set({ loading }),
}));

export default useLoading;
