let login = "ramos@gmail.com"
let senha = "****"
let loginDigitado = prompt("Login: ");
let senhaDigitado = prompt("Senha: ");

if(login == loginDigitado && senha == senhaDigitado){
    alert("Seja Bem-Vindo(a)")
}

else if(login != loginDigitado){
    alert("Login incorreto!")
}
else{
    alert("Senha incorreta!")
}

