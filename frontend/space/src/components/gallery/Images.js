// components/Images.js
import React from 'react';

const mockImageUrls = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  // Add more image URLs here
];

const Images = () => {
  return (
    <div className="gallery">
      {mockImageUrls.map((imageUrl, index) => (
        <div className="gallery-item" key={index}>
          <img src={imageUrl} alt={`Image ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Images;
