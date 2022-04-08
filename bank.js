function Account(number, type, balance, owner) {
  this.number = number
  this.type = type
  this.balance = balance
  this.owner = owner
}

let teste = {
  number: 123456,
  type: 'Corrente',
  balance: 500,
  owner: 'João da Silva'
}
// console.log(teste)

let conta1 = new Account(5486273622, 'Corrente', 27771, 'Abigael Natte')
let conta2 = new Account(1183971869, 'Poupança', 8675, 'Ramon Connell')
let conta3 = new Account(9582019689, 'Poupança', 27363, 'Jarret Lafuente')
let conta4 = new Account(1761924656, 'Poupança', 32415, 'Ansel Ardley')
let conta5 = new Account(7401971607, 'Poupança', 18789, 'Jacki Shurmer')
let conta6 = new Account(630841470, 'Corrente', 28776, 'Jobi Mawtus')
let conta7 = new Account(4223508636, 'Corrente', 2177, 'Thomasin Latour')
let conta8 = new Account(185979521, 'Poupança', 25994, 'Lonnie Verheijden')
let conta9 = new Account(3151956165, 'Corrente', 7601, 'Alonso Wannan')
let conta10 = new Account(2138105881, 'Poupança', 33196, 'Bendite Huggett')

var list = [
  conta1,
  conta2,
  conta3,
  conta4,
  conta5,
  conta6,
  conta7,
  conta8,
  conta9,
  conta10
]

var banco = {
  clientes: list,
  consultarCliente: function checkClientByName(input) {
    var returnedObject = ''
    for (i = 0; i < this.clientes.length; i++) {
      if (input == this.clientes[i].owner) {
        returnedObject = this.clientes[i]
        return returnedObject
      }
    }
  },
  deposito: function deposit(name, value) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (name == this.clientes[i].owner) {
        this.clientes[i].balance += value
        console.log(
          'Deposit success, your new balance is: ' + this.clientes[i].balance
        )
      }
    }
  },
  saque: function withdraw(name, value) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (name == this.clientes[i].owner) {
        if (this.clientes[i].balance - value < 0) {
          console.log('Insufficient funds.')
        } else {
          this.clientes[i].balance -= value
          console.log(
            'Withdrawal success, your new balance is: ' +
              this.clientes[i].balance
          )
        }
      }
    }
  }
}

console.log(banco.consultarCliente('Abigael Natte'))

banco.deposito('Abigael Natte', 500)

banco.saque('Abigael Natte', 999999999)
