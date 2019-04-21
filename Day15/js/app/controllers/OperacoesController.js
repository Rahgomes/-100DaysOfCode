class OperacoesController {
    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputNum1 = $("#num1");
        this._inputNum2 = $("#num2");
    }

    realizarOperacao(event) {
        event.preventDefault();

        let operacoes = new Operacoes(
            parseFloat(this._inputNum1.value),
            parseFloat(this._inputNum2.value)
        )

        console.log("O resultado da operação soma é: " + operacoes.soma);
        console.log("O resultado da operação subtração é: " + operacoes.subtracao);
        console.log("O resultado da operação multiplicação é: " + operacoes.multiplicacao);
        console.log("O resultado da operação divisão é: " + operacoes.divisao);
    }
}