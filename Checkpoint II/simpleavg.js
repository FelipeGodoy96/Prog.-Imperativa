function calcMedia(array) {
  var somatoria = 0
  for (let i = 0; i < array.length; i++) {
    somatoria += array[i]
  }
  return somatoria / array.length
}

let teste = [5, 2, 3, 4]

console.log(calcMedia(teste))
