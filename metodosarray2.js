//map()
let pares = [2, 4, 6, 8, 10]

pares.map(function (valor) {
  return console.log(valor + 1)
})

//forEach()
let animais = ['Penguin', 'Shark', 'Monkey', 'Cat', 'Dog', 'Rat', 'Bird']

let animales = []

animais.forEach(function (valor) {
  return animales.push('The animal is ' + valor)
})
console.log(animales)

animais.forEach(function (valor) {
  return console.log('The animal is ' + valor)
})

//filter()

let nomes = ['Maria', 'João', 'José', 'Maria', 'Pedro']

nomes.filter(function (valor) {
  return console.log(valor == 'Maria')
})

//reduce()

let numeros = [1, 5, 9, 3, 7]

console.log(
  numeros.reduce(function (acumulador, valor) {
    return acumulador + '--' + valor
  })
)
