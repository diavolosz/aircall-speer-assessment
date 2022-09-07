

export default function generateMissedDescription(type, to, via) {

  let output = ""

  if (type === 'missed') {
    output = `tried to call ${to} on ${via}`
  } else if (type === 'answered') {
    output = `called ${to} on ${via}`
  } else if (type === 'voicemail') {
    to ?
      output = `left ${to} a voicemail on ${via}`
      :
      output = `left a voicemail on ${via}`
  }

  if (output.length > 25) {
    output = output.substring(0, 24) + '...'
  }

  return output
}