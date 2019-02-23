import React from 'react';
import { Description } from '../description/Description';
import './Title.scss';

export class Title extends React.Component {
    public render() {
        let title = 'Unsplash';
        return (
        <div className='App__descall'>
            <h1 className='App__title'>{title}</h1>
            <Description />
        </div>

        )

    }
}