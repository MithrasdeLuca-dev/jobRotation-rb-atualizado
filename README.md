# 1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);


Ao final do processamento, qual será o valor da variável SOMA?

## Resposta: O resultado do algorítmo irá imprimir 91. 



# 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

## Resposta: 

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
console.log(calcule(13))



# 3) Descubra a lógica e complete o próximo elemento:

a) 1, 3, 5, 7, ___ Resposta:9 

b) 2, 4, 8, 16, 32, 64, ____ Resposta: 128

c) 0, 1, 4, 9, 16, 25, 36, ____ Resposta: 49

d) 4, 16, 36, 64, ____ Resposta: 100

e) 1, 1, 2, 3, 5, 8, ____ Resposta: 13

f) 2,10, 12, 16, 17, 18, 19, ____



# 4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?

IMPORTANTE:

a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)

c) Explique como chegou no resultado.

## Resposta: Os dois veiculos estarão a mesma distância da cidade de Ribeirão Preto pois se encontrarão no mesmo local.



# 5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;

# Resposta:

const palavra = "bola"
let list = []

const normal = () => {
  for (let i = palavra.length - 1; i >= 0; i--) {
    list = list + palavra[i]
  }
  console.log(list)
}

normal()
