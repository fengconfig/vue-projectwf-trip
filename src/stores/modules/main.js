import { defineStore } from 'pinia'

const startDate = new Date()
const endDate = new Date(startDate.getTime() + 24 * 60 * 60 * 1000) // 加一天

const userMainStore = defineStore('main', {
  state: () => ({
    token: '',
    startDate: startDate,
    endDate: endDate,
    
    isLoading: false
  }),
})

export default userMainStore
