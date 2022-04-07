
export function debounce(fn: Function, delay = 200) {
  let timer: any
  return (...params: any[]) => {
    clearTimeout(timer)

    timer = setTimeout(() => {
      fn(...params)
    }, delay)
  }
}