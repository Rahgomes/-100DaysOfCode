import React, { Component } from 'react';

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: ''
        }

        this.state = this.stateInicial;
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    submitFormulario = () => {
        this.props.escutadorDeSubmit(this.state);
        this.setState(this.stateInicial);
    }

    render() {
        const { nome, livro, preco } = this.state;

        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        {/* <label htmlFor="nome">Nome</label> */}
                        <input
                            className="validate"
                            placeholder="Digite o nome do autor do livro..."
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.escutadorDeInput} />
                    </div>
                    <div className="input-field col s4">
                        {/* <label htmlFor="livro">Livro</label> */}
                        <input
                            className="validate"
                            placeholder="Qual o título do livro..."
                            id="livro"
                            type="text"
                            name="livro"
                            value={livro}
                            onChange={this.escutadorDeInput} />
                    </div>
                    <div className="input-field col s4">
                        {/* <label htmlFor="preco">Preço</label> */}
                        <input
                            className="validate"
                            placeholder="Digite o preço cobrado no livro..."
                            id="preco"
                            type="text"
                            name="preco"
                            value={preco}
                            onChange={this.escutadorDeInput} />
                    </div>
                </div>

                <button onClick={this.submitFormulario} type="button" className="waves-effect red darken-4 waves-light btn">Salvar
                </button>
            </form>
        )
    }
}

export default Formulario;