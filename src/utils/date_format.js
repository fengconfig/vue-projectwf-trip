import datejs from 'dayjs'

export function formatMouthDay(date, formatStr = 'MM月DD日') {
  return datejs(date).format(formatStr)
}

export function getDiffDays(startDate, endDate) {
  return datejs(endDate).diff(startDate, 'day')
}
