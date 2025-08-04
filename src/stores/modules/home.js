import { getCategoriesData, getSuggestData, getHouseListData } from '@/services'
import { defineStore } from 'pinia'

const userHomeStore = defineStore('home', {
  state: () => ({
    hotSuggest: [],
    categories: [],
    houseList: [],
    currentPage: 1,
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
    async fetchHouseList() {
      const res = await getHouseListData(this.currentPage)
      this.houseList.push(...res.data)
      this.currentPage++
    },
  },
})

export default userHomeStore
