// GalleryContainer.js
import React, { useState, useEffect } from 'react';
import Gallery from './Gallery';

const GalleryContainer = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from an API or any other source
    // For this example, we'll create sample data
    const fetchData = async () => {
      try {
        // Replace this with your image data source
        const response = await fetch('https://api.example.com/images');
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchData();
  }, []);

  return <Gallery images={images} />;
};

export default GalleryContainer;
