

export default function generateMissedDescription(from, type, to, via, controlled = true) {

  let output = ""

  if (!controlled) {
    if (type === 'missed') {
      output = `Missed Call: ${from} tried to call ${to} through ${via}`
    } else if (type === 'answered') {
      output = `Answered: ${from} called ${to} through ${via}`
    } else if (type === 'voicemail') {
      to ?
        output = `Missed Call: ${from} left ${to} a voicemail through ${via}`
        :
        output = `Missed Call: ${from} left a voicemail through ${via}`
    }
  } else {
    if (type === 'missed') {
      output = `tried to call ${to} through ${via}`
    } else if (type === 'answered') {
      output = `called ${to} through ${via}`
    } else if (type === 'voicemail') {
      to ?
        output = `left ${to} a voicemail through ${via}`
        :
        output = `left a voicemail through ${via}`
    }
  }

  if (controlled && output.length > 25) {
    output = output.substring(0, 24) + '...'
  }

  return output
}