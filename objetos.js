function Account(number, type, balance, owner) {
  this.number = number
  this.type = type
  this.balance = balance
  this.owner = owner
}

const abigael = new Account(
  5486273622,
  'Conta Corrente',
  27771,
  'Abigael Natte'
)
const ramon = new Account(1183971869, 'Conta Poupança', 8675, 'Ramon Connell')
const jarret = new Account(
  9582019689,
  'Conta Poupança',
  27363,
  'Jarret Lafuente'
)
const ansel = new Account(1761924656, 'Conta Poupança', 32415, 'Ansel Ardley')
const jacki = new Account(7401971607, 'Conta Poupança', 18789, 'Jacki Shurmer')
const jobi = new Account(630841470, 'Conta Corrente', 28776, 'Jobi Mawtus')
const thomassin = new Account(
  4223508636,
  'Conta Corrente',
  2177,
  'Thomasin Latour'
)
const lonnie = new Account(
  185979521,
  'Conta Poupança',
  25994,
  'Lonnie Verheijden'
)
const alonso = new Account(3151956165, 'Conta Corrente', 7601, 'Alonso Wannan')
const benditte = new Account(
  2138105881,
  'Conta Poupança',
  33196,
  'Bendite Huggett'
)

const list = [
  abigael,
  ramon,
  jarret,
  ansel,
  jacki,
  jobi,
  thomassin,
  lonnie,
  alonso,
  benditte
]

let banco = {
  clientes: list
}

function consultarCliente(titular, list) {
  const objTitular = list.filter(element => element.titular == titular)

  return objTitular[0]
}

console.log(consultarCliente('Lonnie Verheijden', list))

function deposito(titular, valor, list) {
  let valorTotal = 0

  const novoValor = list.map(element => {
    if (element.titular == titular) {
      valorTotal = element.saldo + valor

      element.saldo = valorTotal
    }
    return valorTotal
  })

  return `Depósito realizado com sucesso, seu novo valor é de R$${valorTotal}`
}

console.log(deposito('Thomasin Latour', 100, list))

function saque(titular, valor, list) {
  let valorTotal = 0

  const novoValor = list.map(element => {
    if (element.titular == titular) {
      if (element.saldo === 0) {
        return 'Fundos insuficientes'
      } else {
        valorTotal = element.saldo - valor

        element.saldo = valorTotal
      }
    }
    return valorTotal
  })
  return `Extração feita com sucesso, seu novo saldo é: R$${valorTotal}`
}

console.log(saque('Jarret Lafuente', 150, list))
