

let idoso = prompt("Qual sua idade?");
let gestante = prompt("Você é gestante?");
let deficiencia = prompt("Você possui deficiência?");

if(idoso >= 65 || gestante == "s" || deficiencia == "s"){
    alert("Vá para a fila preferencial")
}

else{
    alert("Vá para a fila comum")
}

