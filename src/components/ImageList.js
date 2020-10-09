import React from 'react';

const ImageList = (props) => {
    const images = props.images.map((each)=> {
        return <img src={each.urls.regular} />
    });

    return (<div>{images}</div>);
}

export default ImageList;