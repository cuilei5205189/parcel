function sum(a, b) {
  console.log(10)
  window.a = 'cuieli'
  console.log(this)
}
sum()

export { sum }
