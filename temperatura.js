//7. Dado que a fórmula para conversão de Fahrenheit para Celsius é C = 5/9 (F – 32), ler um
//valor de temperatura em Fahrenheit e exibi-lo em Celsius

alert('Convertendo Fahrenheit em Celsius')
let temperaturaF = Number(prompt("Digiteo o valor da temperatura em Fahrenheit: "))
let temperaturaC = (5/9)*(temperaturaF - 32)
alert('Convertendo, temos que ' + temperaturaF +"° em Fahrenheit é igual a: " + temperaturaC + "° em Celsius")  