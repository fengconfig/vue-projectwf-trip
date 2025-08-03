import wfRequest from '../request'

export function getCityAll() {
  return wfRequest.get({
    url: '/city/all'
  })
}
