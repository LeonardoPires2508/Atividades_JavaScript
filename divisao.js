//6. Ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles.
alert("Ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles.")
let num1 = Number(prompt('Digite o primeiro valor: '))
let num2 = Number(prompt('Digite o segundo valor: '))
let quociente = num1/num2
let resto = num1 % num2
alert("O quociente da divisão e: " + quociente + " e o resto é igual a: " + resto)