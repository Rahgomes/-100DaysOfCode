import React from 'react';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper red darken-4">
                <a href="/" className="brand-logo">Livraria Rah</a>
                <ul className="right">
                    <li><a href="/" title="Autores">Autores</a></li>
                    <li><a href="/" title="Livros">Livros</a></li>
                    <li><a href="/" title="Sobre">Sobre</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;