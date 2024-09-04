const INDICE = 12;
let SOMA = 0;
let K = 1;

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animateAndCalculate() {
    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;

        process.stdout.write(`K: ${K}, SOMA: ${SOMA}\r`);
        
        await delay(500);
    }

    console.log(`\nResultado Final: SOMA = ${SOMA}`);
}

animateAndCalculate();
