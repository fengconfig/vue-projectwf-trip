import { BASE_URL, TIMEOUT } from './config'
import axios from 'axios'

class WFRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout,
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

