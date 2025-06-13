
    let numeroDigitado;
    let resultado;

    // Solicita entrada do usuário
    numeroDigitado = parseInt(prompt("Digite um número: "));
    
    resultado = numeroDigitado % 2;

    if (numeroDigitado === 0) {
        resultado = "0";
    } else if (resultado !== 0) {
        resultado ="Ímpar";
    } else {
        resultado= "Par";
    }

    alert("O " + numeroDigitado+ " é " + resultado );