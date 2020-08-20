import React, { useState, useEffect } from 'react'
import User from './User';
import css from './users.module.css';

export default function Users({ users }) {
    const [secondsVisible, setSecondsVisible] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setSecondsVisible(secondsVisible + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [secondsVisible]);

    return (
        <div>
            <p>Componente Users visível por {secondsVisible} segundos.</p>
            <ul className={css.flexListRow}>
                {users.map(user => {
                    const { login, name, picture } = user;
                    return <li key={login.uuid}><User user={user} /></li>
                })}
            </ul>
        </div>
    )
}
