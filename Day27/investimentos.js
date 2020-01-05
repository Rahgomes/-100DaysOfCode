let investimento = [100, 250, 500, 1000, 2000]

let conversaoCash = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

let resultadoPoupanca = investimento.map(function (e) {
    return e * 0.05 + e
}).map(conversaoCash)

let resultadoCDB = investimento.map(function (e) {
    return e * 0.5 + e
}).map(conversaoCash)

let resultadoLciLca = investimento.map(function (e) {
    return e * 0.3 + e
}).map(conversaoCash)

console.log("Juros Poupança ao mês");
console.log(resultadoPoupanca);
console.log("-----------------------------");
console.log("Juros CDB ao mês");
console.log(resultadoCDB);
console.log("-----------------------------");
console.log("Juros LCI / LCA ao mês");
console.log(resultadoLciLca);
