// Gallery.js
import React from 'react';

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img key={index} src={image.url} alt={`Image ${index}`} />
      ))}
    </div>
  );
};

export default Gallery;

/*

https://www.nasa.gov/wp-content/uploads/2022/04/297755main_gpn-2001-000009_full.jpg
https://www.nasa.gov/wp-content/uploads/2023/02/edu_visible_earth-a.jpg
https://images-assets.nasa.gov/image/iss040e080833/iss040e080833~medium.jpg
https://images-assets.nasa.gov/image/PIA24471/PIA24471~small.jpg
https://images-assets.nasa.gov/image/PIA24472/PIA24472~small.jpg
https://images-assets.nasa.gov/image/PIA14208/PIA14208~small.jpg
https://images-assets.nasa.gov/image/PIA00404/PIA00404~medium.jpg
https://images-assets.nasa.gov/image/PIA13998/PIA13998~medium.jpg
https://images-assets.nasa.gov/image/PIA00728/PIA00728~small.jpg
*/