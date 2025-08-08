import userMainStore from '@/stores/modules/main'
import { BASE_URL, TIMEOUT } from './config'
import axios from 'axios'

const mainStore = userMainStore()
class WFRequest {

  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout,
    })

    this.instance.interceptors.request.use((config) => {
      mainStore.isLoading = true
      return config
    }, (err) => {
      return err
    })

    this.instance.interceptors.response.use((config) => {
      mainStore.isLoading = false
      return config
    }, (err) => {
      mainStore.isLoading = false
      return err
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get(config) {
    return this.request({
      method: 'get',
      ...config,
    })
  }

  post(config) {
    return this.request({
      method: 'post',
      ...config,
    })
  }

}

export default new WFRequest(BASE_URL, TIMEOUT)

