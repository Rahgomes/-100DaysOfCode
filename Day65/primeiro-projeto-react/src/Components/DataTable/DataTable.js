import React from 'react';

const DataTable = props => {
    let linhas = props.dados.map(dado =>
        <tr key={dado.id}>
            {props.colunas.map(coluna =>
                <td key={`${dado.id}${dado[coluna]}`}> {dado[coluna]} </td>
            )}
        </tr>
    );

    return (
        <table className='centered highlight'>
            <thead>
                <tr>
                    <th>{props.titulo}</th>
                </tr>
            </thead>
            <tbody>
                {linhas}
            </tbody>
        </table>
    );
}

export default DataTable;