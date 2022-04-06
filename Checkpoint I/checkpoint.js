let pipoca = {
  nome: 'pipoca',
  defaultTime: 10
}

let macarrao = {
  nome: 'macarrão',
  defaultTime: 8
}

let carne = {
  nome: 'carne',
  defaultTime: 15
}

let feijao = {
  nome: 'feijão',
  defaultTime: 12
}

let brigadeiro = {
  nome: 'brigadeiro',
  defaultTime: 8
}

function microwave(opcao, tempo) {
  console.log('Você escolheu ' + opcao.nome + '!')
  {
    if (tempo > 2 * opcao.defaultTime && tempo <= 3 * opcao.defaultTime) {
      console.log('O prato ' + opcao.nome + ' queimou.')
    } else if (tempo > 3 * opcao.defaultTime) {
      console.log(
        'KABOOOOOOOOOOOOOOOoOoOoOoOOoOMmm!!!!!!\nVocê explodiu o microondas :('
      )
    } else if (tempo < opcao.defaultTime) {
      console.log('O tempo para preparo é insuficiente.')
    } else {
      console.log('Prato preparado com sucesso!\nBom apetite :)')
    }
  }
}

microwave(pipoca, 25)
