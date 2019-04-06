var btnDados = document.querySelector("#enviar-dados");

var nome = document.querySelector("#nome");
var email = document.querySelector("#email");
var telefone = document.querySelector("#telefone");
var endereco = document.querySelector("#endereco");
var mensagem = document.querySelector("#mensagem");

var dadosNome = document.querySelector("#input-nome");
var dadosEmail = document.querySelector("#input-email");
var dadosTelefone = document.querySelector("#input-telefone");
var dadosEndereco = document.querySelector("#input-endereco");
var dadosMensagem = document.querySelector("#input-mensagem");

btnDados.addEventListener("click", enviarDadosFormulario);

function enviarDadosFormulario(e){
    e.preventDefault();
    
    dadosNome.textContent = nome.value;
    dadosEmail.textContent = email.value;
    dadosTelefone.textContent = telefone.value;
    dadosEndereco.textContent = endereco.value;
    dadosMensagem.textContent = mensagem.value;
}