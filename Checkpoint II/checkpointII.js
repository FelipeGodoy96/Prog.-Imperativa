//-------------Passo 1 e Passo 2--------------/
function Estudante(nome, faltas, notas) {
  this.Nome = nome
  this.QtdFaltas = faltas
  this.Notas = notas
  this.calcularMedia = function () {
    var somatoria = 0
    for (let i = 0; i < this.Notas.length; i++) {
      somatoria += this.Notas[i]
    }
    return somatoria / this.Notas.length
  }
  this.faltas = function () {
    return this.QtdFaltas++
  }
}

//-------------Testando Passo 2-------------//

const estudante1 = new Estudante('Alessandra Carolina', 0, [10, 8, 9, 7])
const estudante2 = new Estudante('Ryan Fábio', 0, [9, 7, 7, 8])
const estudante3 = new Estudante('Luna Isabela', 1, [9, 9, 6, 7])
const estudante4 = new Estudante('Márcio Sebastião', 0, [7, 7, 8, 6])
const estudante5 = new Estudante('Stella Caroline', 2, [5, 4, 6, 7])

//-------------Passo 3, Passo 4, Passo 5 e Passo 6-------------//

var estudantes = [estudante1, estudante2, estudante3, estudante4, estudante5]

let curso = {
  nome: 'CTD',
  notaAprovação: 7,
  maxFaltas: 2,
  estudantes: estudantes,
  novoEstudante: function (nome, faltas, notas) {
    estudantes.push(new Estudante(nome, faltas, notas))
  },
  resultado: function resultado(estudante) {
    if (
      (estudante.calcularMedia() >= this.notaAprovação) &
      (estudante.QtdFaltas < this.maxFaltas)
    ) {
      return true
    } else if (
      (estudante.QtdFaltas =
        this.maxFaltas &
        (estudante.calcularMedia() >
          this.notaAprovação + this.notaAprovação / 100))
    ) {
      return true
    } else return false
  },
  aprovados: function aprovados() {
    var aprovados = []
    for (let i = 0; i < this.estudantes.length; i++) {
      var consultado = this.estudantes[i].Nome
      aprovados.push(consultado)
      aprovados.push(this.resultado(this.estudantes[i]))
    }
    return aprovados
  }
}

//-------------Testando Passo 4-------------//
curso.novoEstudante('Felipe Godoy', 0, [10, 10, 10, 10])

// //-------------Testando Passo 5-------------//
console.log(curso.resultado(estudante2))

//-------------Testando Passo 6-------------//
console.log(curso.aprovados())
