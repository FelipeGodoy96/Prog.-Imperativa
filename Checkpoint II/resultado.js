function resultado(estudante) {
  let notaAprovação = 7
  let maxFaltas = 2
  if (
    (estudante.calcularMedia() >= notaAprovação) &
    (estudante.QtdFaltas < maxFaltas)
  ) {
    return true
  } else if (
    (estudante.QtdFaltas =
      maxFaltas &
      (estudante.calcularMedia() > notaAprovação + notaAprovação / 100))
  ) {
    return true
  } else return false
}

console.log(resultado(estudante2))
