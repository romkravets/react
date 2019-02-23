import React from 'react';
import './moreButton.scss';

export class MoreButton extends React.Component {
    public render() {
       return (
        <div className="More-button">
                <button className="More-button__item">More</button>
            </div>
        );

    }
}