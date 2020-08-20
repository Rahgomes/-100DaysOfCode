import React from 'react';
import Country from './Country';
import css from './countries.module.css';

export default function Countries({ countries }) {
    return (
        <div>
            <ul className={css.flexRow}>
                {
                    countries.map(country => {
                        return <li className={css.listItem} key={country.id}><Country country={country} /></li>
                    })
                }
            </ul>
        </div>
    )
}
