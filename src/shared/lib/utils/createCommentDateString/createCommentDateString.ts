export const createCommentDateString = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const dayOfMonth = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  return `${hours}:${minutes} ${dayOfMonth}.${month}.${year}`
}
