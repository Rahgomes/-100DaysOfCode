class MediaAluno {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._nomeAluno = $("#nome");
        this._nota1 = $("#n1");
        this._nota2 = $("#n2");
        this._nota3 = $("#n3");
        this._nota4 = $("#n4");    

        this._impressaoNomeAluno = $("#nomeAluno");
        this._impressaoNota1 = $("#notaAluno1");
        this._impressaoNota2 = $("#notaAluno2");
        this._impressaoNota3 = $("#notaAluno3");
        this._impressaoNota4 = $("#notaAluno4");
        this._media = $("#mediaTotalAluno");    
    }

    calculaMediaAluno(event) {
        
        event.preventDefault();

        let calcMediaAluno = new Media(
            parseFloat(this._nota1.value),
            parseFloat(this._nota2.value),
            parseFloat(this._nota3.value),
            parseFloat(this._nota4.value)
        );

        this._impressaoNomeAluno.textContent = this._nomeAluno.value;
        this._impressaoNota1.textContent = this._nota1.value;
        this._impressaoNota2.textContent = this._nota2.value;
        this._impressaoNota3.textContent = this._nota3.value;
        this._impressaoNota4.textContent = this._nota4.value;
        this._media.textContent = calcMediaAluno.operacaoMedia;

        this._nomeAluno.value = "";
        this._nota1.value = "";
        this._nota2.value = "";
        this._nota3.value = "";
        this._nota4.value = "";
        this._nomeAluno.focus();
    }
}