function fibonacciPertence(numero) {
    
    let a = 0, b = 1;
    if (numero === 0 || numero === 1) {
        return `${numero} pertence à sequência de Fibonacci.`;
    }
    while (b < numero) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    if (b === numero) {
        return `${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `${numero} não pertence à sequência de Fibonacci.`;
    }
}

let numero = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci:"));
alert(fibonacciPertence(numero));
