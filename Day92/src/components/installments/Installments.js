import React from 'react';
import Installment from './Installment';
import { formatCurrency, formatPercent } from "../../helpers/formatHelpers";

export default function Installments({ paymentControl }) {
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
            {
                paymentControl.map(({mes, valorMensal, valorMensalMaisJuros, valorJuroMensal}) => (
                    <Installment key={mes}>
                        <div className="card horizontal z-depth-2 #ffe57f amber accent-1">
                            <div className="card-stacked">
                                <div className="card-content">
                                    <div className="right-align">
                                        <h5>{mes}</h5>
                                    </div>
                                    <p>{formatCurrency(valorMensal)}</p>
                                    <p>
                                        {valorMensalMaisJuros > 0
                                            ? "+" + formatCurrency(valorMensalMaisJuros)
                                            : valorMensalMaisJuros === 0
                                                ? formatCurrency(valorMensalMaisJuros)
                                                : formatCurrency(valorMensalMaisJuros)}
                                    </p>
                                    <p>{formatPercent(valorJuroMensal)}</p>
                                </div>
                            </div>
                        </div>
                    </Installment>
                ))
            }
        </div>
    )
}
