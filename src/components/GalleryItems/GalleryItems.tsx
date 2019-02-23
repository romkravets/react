import React from 'react';
import '../photoGallery/PhotoGallery.scss';

export class GalleryItems extends React.Component {
    public render() {
       return (
        <div className="Photo-gallery__items">
                <div className="Photo-gallery__item"></div>
                <div className="Photo-gallery__item"></div>
                <div className="Photo-gallery__item"></div>
                <div className="Photo-gallery__item"></div>
                <div className="Photo-gallery__item"></div>
                <div className="Photo-gallery__item"></div>
            </div>
        );

    }
}