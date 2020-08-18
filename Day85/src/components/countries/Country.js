import React from 'react';
import css from './countries.module.css';

export default function Country({ country }) {
    const { name, flag } = country;
    return (
        <div className={css.border}>
            <img className={css.flag} src={flag} alt={name} title={name} />
            <span>{name}</span>
        </div>
    )
}
