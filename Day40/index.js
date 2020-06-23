class Pessoa {
    _nomeCompleto = "não consta este nome na base de dados";
    _cpf = "CPF incorreto";
    _idade;
    _ensino = "Sem estudo";
    cor;

    constructor(nomeCompleto, cpf, idade, ensino, cor) {
        this._nomeCompleto = nomeCompleto;
        this._cpf = cpf;
        this._idade = idade;
        this._ensino = ensino;
        this.cor = cor;
    }

    set nomeCompleto(novoNome) {
        let novosNomes = ["Ramon Gomes da Silva", "Jose da silva", "João das neves"]
        for (let i = 0; i < novosNomes.length; i++) {
            if (novoNome == novosNomes[i]) {
                this._nomeCompleto = novoNome;
            }
        }
    }

    get nomeCompleto() {
        return this._nomeCompleto;
    }

    set cpf(validaCPF) {
        if(validaCPF.toString().length == 11)
        this._cpf = validaCPF;
    }

    get cpf() {
        return this._cpf;
    }

    set idade(transformaIdade) {
        this._idade = `${transformaIdade} anos`;
    }

    get idade() {
        return this._idade;
    }

    set ensino(nivelEnsino) {
        let niveisDeEnsino = ["Ensino fundamental", "Ensino médio", "Ensino Superior"];
        for(let i = 0; i < niveisDeEnsino.length; i++) {
            if (nivelEnsino == niveisDeEnsino[i]) {
                this._ensino = nivelEnsino;
            }
        }
    }

    get ensino() {
        return this._ensino;
    }
}

const pessoa1 = new Pessoa("Ramon Gomes da Silva", 33333333356, 27, "Ensino Superior", "Pardo");
console.log(pessoa1);
