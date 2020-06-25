export class Cliente {
    static totalDeClientes = 0;

    get nome() {
        return this._nome;
    }

    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf, senha) {
        this._nome = nome;
        this._cpf = cpf;
        this._senha = senha;
        Cliente.totalDeClientes += 1;
    }

    autenticar(senha){
        return this._senha == senha;
    }
}