// ATENÇÃO!! --  esse script deverá ser execcutado no navegador.
//Linkar em algum .html ou chamar pelo nome do script no console do navegador.

// FORM: https://docs.google.com/forms/d/e/1FAIpQLScQzfKeTT3ZHkNc68ctElcDDLVgm5Kr-C35MgZM9qyWG7JI2Q/viewform

var opcoes = [
  '',
  {
    nome: 'pipoca',
    defaultTime: 10
  },
  {
    nome: 'macarrão',
    defaultTime: 8
  },
  {
    nome: 'carne',
    defaultTime: 15
  },
  {
    nome: 'feijão',
    defaultTime: 12
  },
  {
    nome: 'brigadeiro',
    defaultTime: 8
  }
]

function microwave() {
  alert(
    'Escolha entre um dos itens para preparar: \n1 = Pipoca \n2 = Macarrão\n3 = Carne\n4 = Feijão\n5 = Brigadeiro\n0 = Cancelar'
  )
  let opcaoComida = ''
  opcaoComida = prompt()
  if (opcaoComida > 0 && opcaoComida < 6) {
    alert('Você escolheu ' + opcoes[opcaoComida].nome + '.')
  } else if (opcaoComida > 5) {
    alert('Opção inválida!')
  } else {
    alert('Operação cancelada.')
  }
  alert(
    'O tempo padrão para o preparo de ' +
      opcoes[opcaoComida].nome +
      ' é ' +
      opcoes[opcaoComida].defaultTime +
      ' segundos. Para prosseguir digite 1, ou o valor desejado em segundos.'
  )
  let opcaoTime = ''
  opcaoTime = prompt()
  if (
    opcaoTime == 1 ||
    opcaoTime == opcoes[opcaoComida].defaultTime ||
    (opcaoTime > opcoes[opcaoComida].defaultTime &&
      opcaoTime <= 2 * opcoes[opcaoComida].defaultTime)
  ) {
    alert('Prato preparado com sucesso!\nBom apetite :)')
  } else if (
    opcaoTime > 2 * opcoes[opcaoComida].defaultTime &&
    opcaoTime <= 3 * opcoes[opcaoComida].defaultTime
  ) {
    alert('O prato ' + opcoes[opcaoComida].nome + ' queimou.')
  } else if (opcaoTime > 3 * opcoes[opcaoComida].defaultTime) {
    alert(
      'KABOOOOOOOOOOOOOOOoOoOoOoOOoOMmm!!!!!!\nVocê explodiu o microondas :('
    )
  } else alert('O tempo para preparo é insuficiente.')
}
