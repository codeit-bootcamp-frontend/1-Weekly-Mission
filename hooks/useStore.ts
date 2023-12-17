import { User } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  user: User[];
  setUser: (payload: User[]) => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: [],
      setUser: (payload) => set((state) => ({ user: (state.user = payload) })),
    }),
    {
      name: "userData",
    }
  )
);

export default useUserStore;
