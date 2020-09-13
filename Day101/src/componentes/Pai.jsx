import React from 'react';
// import Filho from './Filho';
import { ChildrenWithProps } from '../utils/utils';

export default props =>
    <div>
        <h1>Pai:</h1>
        <ul>
            <li>{props.nome} {props.sobrenome}</li>
        </ul>
        <hr />
        <h2>Filhos:</h2>
        <ul>
            {ChildrenWithProps(props)}

            {/* Para apenas um filho, com mais filhos necessário usar o Children.map */}
            {/* <li>{React.cloneElement(props.children, {
                ...props, ...props.children.props
            })}</li> */}

        </ul>
        {/* <ul>
            <li><Filho nome="Ramon" sobrenome={props.sobrenome} /></li>
            <li><Filho {...props} /></li>
            <li><Filho {...props} nome="Carla" /></li>
        </ul> */}
    </div>