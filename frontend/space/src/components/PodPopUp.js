import React, { useState, useEffect } from 'react';
import { Popup as ReactPopup } from 'reactjs-popup';
import axios from 'axios';
import styled from 'styled-components';

const PopupContent = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  text-align: center;
  margin-bottom: 16px;
`;

const PopupImage = styled.img`
  width: 550px;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Subtitle = styled.h3`
  text-align: center;
  color: #555;
  font-size: 18px;
  margin-top: 0;
`;

const DateText = styled.p`
  text-align: center;
  font-size: 16px;
  color: #777;
`;

const PodPopUp = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [apodData, setApodData] = useState({});

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Fetch APOD data from NASA's API
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=X6hVXZsFPx97Jr0LSgKILdd674bBqKwO5Wz7xlXM')
      .then((response) => {
        setApodData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching APOD data:', error);
      });
  }, []); // Fetch data once when the component mounts

  return (
    <ReactPopup
      position="center center"
      modal
      open={isOpen}
      closeOnDocumentClick={false} /* Prevent closing on outside click */
      closeOnEscape={true} /* Allow closing on "Escape" key */
    >
      <PopupContent className="popup-content">
        <Title>{apodData.title}</Title> {/* Display APOD title */}
        <ImageWrapper>
          <PopupImage src={apodData.url} alt="" /> {/* Display APOD image */}
        </ImageWrapper>
        <Subtitle>Do you know NASA sends you a new picture each day as a greeting?</Subtitle>
        <DateText>Date: {apodData.date}</DateText> {/* Display APOD date */}
        <a href="https://example.com/see-more">See More</a>

        <CloseButton
          className="close-button"
          onClick={handleClose}
        >
          &times;
        </CloseButton>
      </PopupContent>
    </ReactPopup>
  );
};

export default PodPopUp;
