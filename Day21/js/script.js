var formEnvia = {
    envia: function(){
        $("#enviar").click(function(event) {
            event.preventDefault();

            let span_nome = document.querySelector("#span_nome");
            let span_telefone = document.querySelector("#span_telefone");
            let span_email = document.querySelector("#span_email");
            let span_endereco = document.querySelector("#span_endereco");
            let span_cidade = document.querySelector("#span_cidade");

            let nome = document.querySelector("#nome");
            let telefone = document.querySelector("#telefone");
            let email = document.querySelector("#email");
            let endereco = document.querySelector("#endereco");
            let cidade = document.querySelector("#cidade");

            span_nome.textContent = nome.value;
            span_telefone.textContent = telefone.value;
            span_email.textContent = email.value;
            span_endereco.textContent = endereco.value;
            span_cidade.textContent = cidade.value;
        });
    }
};

formEnvia.envia();