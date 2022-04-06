let classificacao = function () {
  if (IMCdepurado < 18.5) {
    return 'magreza'
  } else if (IMCdepurado > 18.5 && IMCdepurado < 25) {
    return 'normal'
  } else if (IMCdepurado > 25 && IMCdepurado < 30) {
    return 'sobrepeso'
  } else if (IMCdepurado > 30 && IMCdepurado < 40) {
    return 'obesidade'
  } else if (IMCdepurado > 40) {
    return 'obesidade grave'
  } else return console.log('validação de classificação indefinida')
}
let testeLogico = function () {
  if (plano[codCliente] != null || plano[codCliente] != undefined) {
    return ' (' + plano[codCliente] + ')'
  } else {
    return ' (plano expirado)'
  }
}

let nome = ['José', 'Carlos', 'Aline', 'Ana']
let sobrenome = ['da Silva', 'de Souza', 'Ferreira', 'Paula']
let idade = ['27', '28', '33', '26']
let peso = [83.5, 80.1, 63.7, 55.0]
let altura = [1.7, 1.76, 1.53, 1.62]
let plano = ['Ouro', 'Diamante', null, 'Prata']
function IMC(weight, height) {
  return peso[weight] / (altura[height] * altura[height])
}

let codCliente = ''

codCliente = 0
weight = codCliente
height = codCliente

let IMCdepurado = IMC(weight, height)
while (codCliente < nome.length) {
  console.log(
    nome[codCliente] +
      ' ' +
      sobrenome[codCliente] +
      testeLogico() +
      ' tem ' +
      idade[codCliente] +
      ' anos e seu Índice de Massa Corporal é de ' +
      IMCdepurado.toFixed(2) +
      '. Sua classificação é ' +
      classificacao() +
      '.'
  )
  codCliente++
  IMCdepurado++
}
