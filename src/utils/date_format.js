import datejs from 'dayjs'

export function formatMouthDay(date) {
  return datejs(date).format('MM月DD日')
}

export function getDiffDays(startDate, endDate) {
  return datejs(endDate).diff(startDate, 'day')
}