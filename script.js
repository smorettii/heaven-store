const quantidade = document.querySelector("#quantidade")
const resultado = document.querySelectorAll("#resultado")
function calcular_preco(robux) {
    const taxaDeConversao = 24 / 1000;
    const precoTotal = robux * taxaDeConversao;
    return precoTotal;
}
function calcular_com_taxa(valorDesejado) {
    const valorNecessario = valorDesejado / 0.70;

    return valorNecessario;
}
;(async () => {
    while (true) {
        if (Number(quantidade.value) > 0) {
            for (v of resultado) {
                v.style.opacity = '1'
            }
            document.querySelector('.comtaxa').textContent = `${Number(quantidade.value)} robux com taxa ficam no total de R$ ${String(calcular_preco(calcular_com_taxa(Number(quantidade.value))).toFixed(2)).replace(".",",")}`
            document.querySelector('.semtaxa').textContent = `${Number(quantidade.value)} robux sem taxa ficam no total de R$ ${String(calcular_preco(Number(quantidade.value)).toFixed(2)).replace(".",",")}`
            
        } else {
            for (v of resultado) {
                v.style.opacity = '0'
            }
        }
        await new Promise(result => setTimeout(result, 10))
    }
})();
