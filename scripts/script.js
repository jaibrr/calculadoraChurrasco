/* 
Quanto tempo dura o churrasco
men cis:
Carnes: 200g
Frango: 200g
Porco: 200g
Cerveja: 2 litro
Refrigerante: 700 ml
Água: 1 litro

women cis: 
Carnes: 150g
Frango: 150g
Porco: 100g
Cerveja: 1,5 litro 
Refrigerante: 500 ml
Água: 1 litro

vegs
Tomate: 50g
Abobrinha: 50g
Sal 18g para 1kg de carne

Acompanhamentos:
Pão de alho
Pão francês: 100g
Maionese: 100g
Alho: 2g
Vinagrete
Pimentão: 20g
Cebola: 20g
queijo coalho: 50g
Arroz: 80g


Crianças:
mulher/2

Duração do evento
 */

let inputWomen = document.getElementById('women');
let inputMen = document.getElementById('men');
let inputKids = document.getElementById('kids');

function check(){
    if(!isNaN(num)) alert("a variavel num é numérica");
}

function calc(){
    console.log("Calculating...")

    let wonMeat = 0.4
    let menMeat = 0.6
    let wonBeer = 1
    let menBeer = 1.5
    let side = .25
    let wonNoAlc = 0.5
    let menNoAlc = 0.8

    let women = inputWomen.value
    let men = inputMen.value
    let kids = inputKids.value

    let qtyMeat = Math.round(women * wonMeat + men * menMeat + kids * wonMeat/2,2)
    let qtyBeer = Math.round(women * wonBeer + men * menBeer)
    let qtyNoAlc = Math.round(women * wonNoAlc + men * menNoAlc + kids * wonNoAlc/2)
    let qtySide = Math.round(women * side + men * side + kids * side)

    result.innerHTML = `<h3 class="result-info">Você vai precisar de:</h3>`
    result.innerHTML += `<div class="result-block"><p> ${qtyMeat} kg de carne</p></div>`
    result.innerHTML += `<div class="result-block"><p> ${qtyBeer} litros de cerveja</p></div>`
    result.innerHTML += `<div class="result-block"><p>${qtyNoAlc} litros de bebidas não alcoolica</p></div>`
    result.innerHTML += `<div class="result-block"><p>${qtySide} kg de acompanhamentos</p></div>`
    
}