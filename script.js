const quantidade = document.querySelector("#quantidade")
const resultado = document.querySelector("#resultado")
function calcular_preco(robux) {
    const taxaDeConversao = 23 / 1000;
    const precoTotal = robux * taxaDeConversao;
    return precoTotal;
}
;(async () => {
    while (true) {
        if (Number(quantidade.value) > 0) {
            resultado.style.opacity = '1'
            resultado.textContent = `${Number(quantidade.value)} robux ficam no total de R$ ${String(calcular_preco(Number(quantidade.value)).toFixed(2)).replace(".",",")}`
        } else {
            resultado.style.opacity = '0'
        }
        await new Promise(result => setTimeout(result, 10))
    }
})();