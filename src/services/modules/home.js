import wfRequest from "../request";
export function getSuggestData() {
  return wfRequest.get({
    url: '/home/hotSuggests'
  }).then(res => res.data)
}

export function getHomeCategories() {
  return wfRequest.get({
    url: '/home/categories'
  }).then(res => res.data)
}