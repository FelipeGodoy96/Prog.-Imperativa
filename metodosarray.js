let listaCompras = ['Banana', 'Batata', 'Maçã', 'Pêra', 'Sorvete']

//JOIN

console.log(
  'O método Join junta os elementos do Array usando um separador que especificarmos. Se não especificado, usará vírgulas por padrão'
)

console.log(listaCompras.join())
console.log(listaCompras.join(' - \n'))

//POP

console.log(
  'O método Pop elimina o último elemento do Array e retorna o elemento eliminado'
)

console.log(listaCompras.pop())
console.log(listaCompras)
//PUSH

console.log(
  'O método Push adiciona um ou mais elementos no final do Array e retorna a nova quantidade de elementos do Array'
)
console.log(listaCompras)
console.log(listaCompras.push('Frango', 'Peixe', 'Óleo'))
console.log(listaCompras)

//SHIFT

console.log(
  'O método Shift elimina o primeiro elemento do Array e retorna o elemento eliminado'
)

console.log(listaCompras.shift())
console.log(listaCompras)

//UNSHIFT

console.log(
  'O método Unshift adiciona um ou mais elementos ao início do Array e retorna a nova quantidade de elementos do Array'
)

console.log(listaCompras.unshift('Banana'))
console.log(listaCompras)
