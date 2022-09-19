//3. Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.

alert("Calculando a área e perímetro de uma circunferência")
const pi = 3.14
let raio = Number(prompt("Digite o valor do raio da circunferência:"))
let area = pi * Math.pow(raio, 2)
let perímetro = 2 * pi * raio
alert('A área da circunferência é igual a: '+ area + "m² " + "e seu perímetro é: " + perímetro + "m.")
