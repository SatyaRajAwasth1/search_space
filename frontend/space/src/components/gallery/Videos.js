// components/Videos.js
import React from 'react';

const mockVideoUrls = [
  'https://www.youtube.com/embed/dQw4w9WgXcQ',
  'https://www.youtube.com/embed/dQw4w9WgXcQ',
  'https://www.youtube.com/embed/dQw4w9WgXcQ',
  // Add more video URLs here
];

const Videos = () => {
  return (
    <div className="gallery">
      {mockVideoUrls.map((videoUrl, index) => (
        <div className="gallery-item" key={index}>
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title={`Video ${index}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default Videos;
