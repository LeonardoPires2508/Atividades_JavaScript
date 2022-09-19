//8. Faça um algoritmo que calcule e apresente o valor do volume de uma lata de óleo, dado seu raio e sua altura.
alert("apresente o valor do volume de uma lata de óleo, dado seu raio e sua altura.")
const pi = 3.14
let raio = Number(prompt("Digite o raio da lata de óleo: "))
let altura = Number(prompt("Digite a altura da lata de óleo: "))
let volume = pi * Math.pow(raio, 2) * altura
alert('O volume da lata de óleo é igual a: '+ volume + " m³.")