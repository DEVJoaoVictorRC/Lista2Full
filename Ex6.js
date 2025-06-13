const reposta1 = "Pedro"
const reposta2 = "Vasco"
const reposta3 = "Mercúrio"

contador = 0

let pergunta1 = prompt("Quem descobriu o Brasil?");

if(pergunta1 == reposta1){
    alert("Certa Resposta!")
    contador++
}

let pergunta2 = prompt("Qual o maior time da Galáxia?");

if(pergunta2 == reposta2){
    alert("Certa Resposta!")
    contador++
}

let pergunta3 = prompt("Qual o planeta mais próximo do sol ?")

if(pergunta3 == reposta3){
    alert("Certa Resposta!")
    contador++
}

else if(pergunta1 != reposta1 && pergunta2 != reposta2 && pergunta3 != reposta3){
    alert("Você Perdeu!!")
}

alert("Fim de Jogo, Você acertou " + contador + " perguntas.")



