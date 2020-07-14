const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button');

    botaoDeleta.innerText = 'Deletar';
    botaoDeleta.classList.add('delete-button');
    botaoDeleta.addEventListener('click', deletarTarefa)

    return botaoDeleta;
}

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target;
    
    const tarefaCompleta = botaoDeleta.parentElement;

    tarefaCompleta.remove();

    return botaoDeleta;
}

export default BotaoDeleta;