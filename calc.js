function adicionar(a, b) {
  return a + b
}
var a = 5
var b = 5
console.log('somar: ' + adicionar(a, b) + '(' + a + '+' + b + ')')

//-----------------

function subtração(a, b) {
  return a - b
}
a = 10
b = 3
console.log('subtração: ' + subtração(a, b) + '(' + a + '-' + b + ')')

//-----------------

function multiplicação(a, b) {
  return a * b
}
a = 10
b = 2
console.log('multiplicação: ' + multiplicação(a, b) + '(' + a + '*' + b + ')')

//-----------------

function divisão(a, b) {
  return a / b
}
a = 15
b = 2
console.log('divisão: ' + divisão(a, b) + '(' + a + '/' + b + ')')

//-----------------

console.log('Teste de Operações/Calculator')

function quadradoDoNumero(a) {
  return multiplicação(a, a)
}
a = 24

console.log('Quadrado: ' + quadradoDoNumero(a) + '(' + a + '²)')

function mediaDeTresNumeros(a, b, c) {
  return (a + b + c) / 3
}

a = 4
b = 8
c = 672
console.log(
  'Média de ' + a + ', ' + b + ', ' + c + ': ' + mediaDeTresNumeros(a, b, c)
)

function calculaPorcentagem(a, b) {
  return (a * b) / 100
}

console.log(calculaPorcentagem(300, 15))

function geradorDePorcentagem(a, b) {
  return (a / b) * 100
}

console.log(geradorDePorcentagem(2, 200) + '%')
