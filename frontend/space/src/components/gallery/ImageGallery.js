import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // Import the styles for react-image-lightbox

import './PlanetSelector.css'; // You can remove this import if not needed

const ImageGallery = () => {
  const [planetImages, setPlanetImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    // Fetch planet images from your data source or API
    axios
      .get('https://images-api.nasa.gov/search?q=earth') // Replace with your API endpoint or data source
      .then((response) => {
        const images = response.data.collection.items
          .map((item) => item.links[0].href)
          .slice(0, 8); // Limit to 8 images
        setPlanetImages(images);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching planet images:', error);
        setIsLoading(false);
      });
  }, []);

  const openGallery = () => {
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  return (
    <div className="image-gallery">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="gallery-container">
          {planetImages.map((image, index) => (
            <div key={index} className="thumbnail-card">
              <img
                src={image}
                alt={`Image ${index}`}
                className="thumbnail"
                onClick={() => {
                  setCurrentImageIndex(index);
                  openGallery();
                }}
              />
            </div>
          ))}
        </div>
      )}
      {isGalleryOpen && (
        <div className="lightbox">
          <button onClick={closeGallery} className="close-button">
            Close Gallery
          </button>
          <Lightbox
            mainSrc={planetImages[currentImageIndex]}
            nextSrc={planetImages[(currentImageIndex + 1) % planetImages.length]}
            prevSrc={planetImages[(currentImageIndex + planetImages.length - 1) % planetImages.length]}
            onCloseRequest={closeGallery}
            onMovePrevRequest={() => setCurrentImageIndex((currentImageIndex + planetImages.length - 1) % planetImages.length)}
            onMoveNextRequest={() => setCurrentImageIndex((currentImageIndex + 1) % planetImages.length)}
          />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
