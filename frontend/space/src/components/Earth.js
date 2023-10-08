import React, { useState } from 'react';
import myImage from '../Images/earth.png';
import styled, { keyframes } from 'styled-components';
import ImageGallery from './gallery/ImageGallery'; // Import the ImageGallery component

const audioFile = '../rsc/cosmos_sound.mp3';
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const EarthPage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url(${require('../Images/Background.png')});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const CenterContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const EarthImage = styled.img`
  max-width: 80%;
  height: auto;
  animation: ${rotate} 200s linear infinite;
`;

const EarthText = styled.div`
  font-size: 24px;
  color: white;
  margin-top: 16px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Buttons = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 22px;
  cursor: pointer;
  background-color: #3498db;
  color: white;
  border: none;
`;

const DropdownContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;

const Dropdown = styled.select`
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

const AudioContainer = styled.div`
  text-align: center;
  margin-top: 20px;
  animation: heartbeat 2s linear infinite;
`;

const AudioPlayer = styled.audio`
  width: 100%;
  max-width: 300px;
`;

const Earth = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState('earth');
  const [isImageGalleryOpen, setIsImageGalleryOpen] = useState(false); // State to control image gallery

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownChange = (event) => {
    setSelectedPlanet(event.target.value);
  };

  const openImageGallery = () => {
    setIsImageGalleryOpen(true);
  };

  const closeImageGallery = () => {
    setIsImageGalleryOpen(false);
  };

  return (
    <EarthPage className="earth-page">
      <ButtonContainer>
        {/* Open the image gallery when the "Image" button is clicked */}
        <Buttons onClick={openImageGallery}>Image</Buttons>
        <Buttons>Videos</Buttons>
        <Buttons>Temperature</Buttons>
        <Buttons>Humidity</Buttons>
        <Buttons>Weather</Buttons>
      </ButtonContainer>
      <CenterContainer>
        <EarthImage src={myImage} alt="Earth" />
        <EarthText>Earth</EarthText>
        <AudioContainer>
          <AudioPlayer controls autoPlay>
            <source src={audioFile} type="audio/mpeg" />
            Your browser does not support the audio element.
          </AudioPlayer>
        </AudioContainer>
      </CenterContainer>
      <DropdownContainer>
        <Dropdown value={selectedPlanet} onChange={handleDropdownChange}>
          <option value="earth">Earth</option>
          <option value="moon">Moon</option>
          <option value="mars">Mars</option>
          <option value="asteroids">Asteroids</option>
        </Dropdown>
      </DropdownContainer>

      {/* Conditionally render the ImageGallery component */}
      {isImageGalleryOpen && <ImageGallery onClose={closeImageGallery} />}
    </EarthPage>
  );
};

export default Earth;
