import React from 'react';
import { formatNumer } from '../../helpers/formatHelpers';
import css from './header.module.css';

export default function Header({ onChangeFilter, filter, countryCount, totalPopulation }) {
    const handleInputChange = (event) => {
        const newText = event.target.value;
        onChangeFilter(newText);
    }

    return (
        <div className={css.flexRow}>
            <input type="text" value={filter} placeholder='Digite o país desejado' onChange={handleInputChange} />
                | <span className={css.countries}>Países: <strong>{countryCount}</strong></span>
                | <span className={css.population}>População: <strong>{formatNumer(totalPopulation)}</strong></span>
        </div>
    )
}
