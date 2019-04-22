class Media {

    constructor(nota1, nota2, nota3, nota4) {

        this._nota1 = nota1;
        this._nota2 = nota2;
        this._nota3 = nota3;
        this._nota4 = nota4;
    }

    get operacaoMedia() {
        return ( this._nota1 
        + this._nota2 
        + this._nota3 
        + this._nota4 )
         / 4;
    }
}