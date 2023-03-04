const palavra = "bola"
let list = []

const normal = () => {
  for (let i = palavra.length - 1; i >= 0; i--) {
    list = list + palavra[i]
  }
  console.log(list)
}

normal()
