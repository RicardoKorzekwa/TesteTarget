const readline = require('readline');

const numeroPredefinido = 21;

function fibonacciAteNumero(num) {
    let fibSeq = [0, 1];
    let i = 2;
    while (true) {
        let nextFib = fibSeq[i - 1] + fibSeq[i - 2];
        if (nextFib > num) break;
        fibSeq.push(nextFib);
        i++;
    }
    return fibSeq;
}

function verificaNumeroFibonacci(num) {
    const fibSeq = fibonacciAteNumero(num);
    if (fibSeq.includes(num)) {
        console.log(`O número ${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    rl.question('Você quer digitar um número para verificar (s/n)? ', (resposta) => {
        if (resposta.toLowerCase() === 's') {
            rl.question('Digite o número a ser verificado: ', (numeroDigitado) => {
                const numero = parseInt(numeroDigitado);
                verificaNumeroFibonacci(numero);
                rl.close();
            });
        } else {
            verificaNumeroFibonacci(numeroPredefinido);
            rl.close();
        }
    });
}

main();
