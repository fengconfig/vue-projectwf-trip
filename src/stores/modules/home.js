import { getHomeCategories, getSuggestData } from "@/services"
import { defineStore } from "pinia"

const userHomeStore = defineStore('home', {
  state: () => ({
    hotSuggest: [],
    categories: []
  }),
  actions: {
    async fetchHotSuggests() {
      const res = await getSuggestData()
      this.hotSuggest = res
    },
    async fetchCategories() {
      const res = await getHomeCategories()
      this.categories = res
    },
  },
})

export default userHomeStore