import React from 'react';
import ReactDOM from 'react-dom';

// import Primeiro from './componentes/Primeiro';
// import BomDia from './componentes/BomDia';
// import {BoaTarde, BoaNoite} from './componentes/multiplos';
// import Multi from './componentes/multiplos';
import Saudacao from './componentes/Saudacao';

ReactDOM.render(<Saudacao tipo={'Bom dia'} nome={'Ramon'} />, document.getElementById('root'));