import { ValidaDados } from "./ValidaDados.js";

export class DadosFuncionario extends ValidaDados {
    constructor(nome, cpf, idade, funcao) {
        super(nome, cpf, idade);        
        this._funcao = funcao;
    }
}