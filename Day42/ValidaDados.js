export class ValidaDados {
    constructor(nome, cpf, idade, funcao){
        this._nome = this.validaNome(nome);
        this._cpf = this.validaCPF(cpf);
        this._idade = this.validaIdade(idade);
    }
    
    validaNome(nome){
        let espacoVazio = " ";
        if(nome.toString().length == espacoVazio || typeof nome == "number"){
            throw new Error("Nome inválido, ou vazio!!!")
        }
        return this._nome = nome;
    }

    validaCPF(cpf) {
        if (cpf.toString().length != 11) {
            throw new Error("CPF inválido!!!")
        }
        return this._cpf = cpf;
    }

    validaIdade(idade){
        if(typeof idade == "string"){
            throw new Error("Idade inválida!!!");
        }
        return this._idade = `${idade} anos`;
    }
}