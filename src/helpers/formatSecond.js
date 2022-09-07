
export default function formatSecond(second) {
  if (second % 60 === 0) {
    if (second / 60 === 1) {
      return `${second / 60} min`;
    } else {
      return `${second / 60} mins`;
    }
  } else {
    if (second / 60 === 1) {
      return `${second % 60} min ${second - 60 * Math.floor(second / 60)} sec`
    } else {
      return `${second % 60} mins ${second - 60 * Math.floor(second / 60)} sec`
    }
  }
}