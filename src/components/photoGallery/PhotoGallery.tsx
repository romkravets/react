import React from 'react';
import './PhotoGallery.scss';
import { GalleryItems } from '../GalleryItems/GalleryItems';

export class PhotoGallery extends React.Component {
    public render() {
        return (
        <div className='Photo-gallery'>
            <GalleryItems />
        </div>

        );

    }
}