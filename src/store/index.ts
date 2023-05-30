import { create } from 'zustand'

const useAuthStore = create((set) => ({
    loggedIn: true,
    login: () => set({ loggedIn: true }),
    logout: () => set({ loggedIn: false })
}))

export default useAuthStore