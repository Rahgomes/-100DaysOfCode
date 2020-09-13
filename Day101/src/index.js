import React from 'react';
import ReactDOM from 'react-dom';

// import Primeiro from './componentes/Primeiro';
// import BomDia from './componentes/BomDia';
// import {BoaTarde, BoaNoite} from './componentes/multiplos';
// import Multi from './componentes/multiplos';
// import Saudacao from './componentes/Saudacao';
import Pai from './componentes/Pai';
import Filho from './componentes/Filho';

ReactDOM.render(<div>
    <Pai nome="Paulo" sobrenome="da Silva">
        <Filho nome="Ramon" />
        <Filho nome="Paulo" />
        <Filho nome="José" />
    </Pai>
</div>, document.getElementById('root'));