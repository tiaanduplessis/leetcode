const MAX_INT = 2147483647

function reverseStr (str = '') {
  return str
    .split('')
    .reverse()
    .join('')
}

function reverse (x = 0) {
  let result
  const xStr = x.toString()

  if (xStr.includes('-')) {
    result = Number(`-${reverseStr(xStr.slice(1))}`)
  } else {
    result = Number(reverseStr(xStr))
  }

  if (result > MAX_INT || result < -MAX_INT) {
    return 0
  }

  return result
}
