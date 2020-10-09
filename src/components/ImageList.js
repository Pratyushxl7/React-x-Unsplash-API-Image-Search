import './imageList.css';
import React from 'react';
import ImageCard from './imageCard';

const ImageList = (props) => {
    const images = props.images.map((each)=> {
        return <ImageCard key={each.id} image={each}/>
    });

    return (<div className='image-list'>{images}</div>);
}

export default ImageList;