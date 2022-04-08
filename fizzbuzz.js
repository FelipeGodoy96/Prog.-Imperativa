function FizzBuzz(a, b) {
  for (let i = a; i <= b; i++) {
    let str = ''
    if (a % 2 == 0) {
      str = 'Buzz'
      console.log(a + ' ' + str)
    } else if (a % 2 == !0) {
      str = 'Fizz'
      console.log(a + ' ' + str)
    }
    a++
  }
}

FizzBuzz(1, 100)
