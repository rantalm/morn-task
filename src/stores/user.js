import { defineStore } from 'pinia'
import { login as _login } from '../utils/api'
import { useStorage } from '@vueuse/core'
import router from '../router'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      details: useStorage('vueUseUser', {})
    }
  },
  actions: {
    async login(email, password) {
      this.details = await _login(email, password)
      router.push({ name: 'welcom' })
    },
    reset() {
      this.details = {}
      this.$reset()
      router.push('/')
    }
  }
})
