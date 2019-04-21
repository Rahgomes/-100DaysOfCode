class Operacoes {
    constructor(num1, num2) {

        this._num1 = num1;
        this._num2 = num2;
    }

    get soma() {
        return this._num1 + this._num2;
    }

    get subtracao() {
        return this._num1 - this._num2;
    }

    get multiplicacao() {
        return this._num1 * this._num2;
    }

    get divisao() {
        return this._num1 / this._num2;
    }
}