import React from 'react';
import LinkWrapper from '../../utils/LinkWrapper';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper red darken-4">
                <LinkWrapper to='/' className="brand-logo" activeStyle={{}}>Livraria do Rah</LinkWrapper>
                <ul className="right">
                    <li><LinkWrapper to='/autores'>Autores</LinkWrapper></li>
                    <li><LinkWrapper to='/livros'>Livros</LinkWrapper></li>
                    <li><LinkWrapper to='/sobre'>Sobre</LinkWrapper></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;