import wfRequest from "../request"

export function getDetailData(houseId) {
  return wfRequest.get({
    url: '/detail/infos',
    params: {
      houseId
    }
  })
}