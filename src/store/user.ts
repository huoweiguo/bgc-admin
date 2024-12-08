import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: {},
    token: 'hashgsgasgsgag'
  }),
  actions: {
    // Define actions here
    setToken(token: string) {
      this.token = token
    },

    setUserInfo(userInfo: object) {
      this.userInfo = userInfo
    }
  },
  getters: {
    // Define getters here
  }
})
