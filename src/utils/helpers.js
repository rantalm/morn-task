export const camelCaseToSpace = (str) => {
  const res = str.replace(/([A-Z])/g, ' $1')
  return res.charAt(0).toUpperCase() + res.slice(1)
}

export const formatDateFromTS = (ts) => {
  const d = new Date(ts)
  return `${d.getHours()}:${d.getMinutes()}, ${d.toDateString()}`
}

export const isEmptyObject = (obj) => {
  return obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype
}
