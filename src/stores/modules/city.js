import { getCityAll } from '@/services'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const useCityStore = defineStore('city', () => {
  const allCities = ref({})
	const currentCity = ref({})

  async function fetchAllCitiesData() {
    const res = await getCityAll()
    allCities.value = res.data
  }

  return {
    allCities,
    fetchAllCitiesData,
		currentCity
  }
})

export default useCityStore
