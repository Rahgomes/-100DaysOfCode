import React from 'react';

export default function Form(props) {
    const {
        onChangeInitialAmount,
        onChangeMonthlyRate,
        onChangePeriod,
        valueInitialAmount,
        valueMonthlyRate,
        valuePeriod
    } = props;

    return (
        <React.Fragment>
            <form>
                <div className="row">
                    <div className="col s4">
                        <label htmlFor="InitialAmount">Montante inicial</label>
                        <input
                            id="InitialAmount"
                            type="number"
                            min="-100000"
                            step="100"
                            max="100000"
                            value={valueInitialAmount}
                            onChange={({ target }) => onChangeInitialAmount(target.value)}
                        />
                    </div>
                    <div className="col s4">
                        <label htmlFor="MonthlyRate">Taxa de juros mensal</label>
                        <input
                            id="MonthlyRate"
                            type="number"
                            min="-12"
                            step="0.1"
                            max="12"
                            value={valueMonthlyRate}
                            onChange={({ target }) => onChangeMonthlyRate(target.value)}
                        />
                    </div>
                    <div className="col s4">
                        <label htmlFor="Period">Período (meses)</label>
                        <input
                            id="Period"
                            type="number"
                            min="1"
                            max="36"
                            value={valuePeriod}
                            onChange={({ target }) => onChangePeriod(target.value)}
                        />
                    </div>
                </div>
            </form>
        </React.Fragment>
    )
}
