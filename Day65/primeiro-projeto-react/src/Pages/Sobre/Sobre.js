import React, { Fragment } from 'react';
import Header from '../../Components/Header/Header';

const Sobre = () => {
    return (
        <Fragment>
            <Header/>
            <div className="container mb-10">
                <h1>Sobre</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </Fragment>
    )
}

export default Sobre;