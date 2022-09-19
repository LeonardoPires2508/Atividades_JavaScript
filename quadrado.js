//2. Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo.
alert('Calculando a área de um quadrado')
let lado = Number(prompt("Digite o lado do quadrado: "))
let area = (lado ** 2)
let perímetro = lado * 4
alert("A área do quadrado é igual a: " + area + " m²" + ", e o seu perímetro é igual a: " + perímetro + " m")