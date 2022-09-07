export default function formatDate(date) {
  const months  = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const dateObj = new Date(date)

  let output = `${months[dateObj.getMonth()].toUpperCase()}, ${dateObj.getDate()} ${dateObj.getFullYear()}`
  return output
}