let numero1 = 0
let numero2 = 1
let numeros = [0]

const calcule = (numero) => {
  for (let i = 0; numero2 <= numero;) {
    numeros.push(numero2)

    if (numero2 == numero) {
      break
    }
    i = numero1 + numero2
    numero1 = numero2
    numero2 = i
  }

  if (numero == numero2) {
    return "O" + numero + " pertence a sequência de Fibonacci"
  }
  return "O" + numero + " não pertence a sequência de Fibonacci"
}
console.log(calcule())

