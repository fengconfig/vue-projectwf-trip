import wfRequest from '../request'
export function getSuggestData() {
  return wfRequest.get({
    url: '/home/hotSuggests',
  })
}

export function getCategoriesData() {
  return wfRequest.get({
    url: '/home/categories',
  })
}

export function getHouseListData(page) {
  return wfRequest.get({
    url: '/home/houselist',
    params: {
      page: page
    }
  })
}
