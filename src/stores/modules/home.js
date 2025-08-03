import { getCategoriesData, getSuggestData } from '@/services'
import { defineStore } from 'pinia'

const userHomeStore = defineStore('home', {
  state: () => ({
    hotSuggest: [],
    categories: [],
  }),
  actions: {
    async fetchHotSuggests() {
      const res = await getSuggestData()
      this.hotSuggest = res.data
    },
    async fetchCategories() {
      const res = await getCategoriesData()
      this.categories = res.data
    },
  },
})

export default userHomeStore
