
export function debounce(callback, delay) {
  var timer
  return function (e) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback.call(this,e)
    }, delay)
  }
}