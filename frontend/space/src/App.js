import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import image from './Images/space.png';
import background from './Images/Background.png';
import icon from './Images/icon.png';
import logo from './Images/logo.png';
import PodPopUp from './components/PodPopUp';
import { useNavigate } from 'react-router-dom'; 
import Earth from './components/Earth';
import Moon from './components/Moon';
import Mars from './components/Mars';
import Asteroids from './components/Asteroids';

const containerStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundColor: 'black',
  height: '1000px',
  position: 'relative',
};

const searchStyle = {
  position: 'absolute',
  top: '80%',
  left: '35%',
  outline: 'none',
  border: 'none',
};

function App() {
  const navigate = useNavigate(); 
  const [searchTerm, setSearchTerm] = useState('');

  const handleSuggestionClick = (suggestion) => {
    // Programmatically navigate to the corresponding page when a suggestion is clicked
    navigate.push(`/${suggestion}`);
  };

  return (
    <>
      <PodPopUp />
      <div style={containerStyle}>
        <img src={image} style={{ width: '887px', height: '490', paddingLeft: '250px' }} />
        <img src={logo} style={{ width: '100px', height: '100px', position: 'absolute', top: '40px', left: '30px' }} />
      </div>
      <div className='search' style={searchStyle}>
        <img src={icon} style={{ width: '30px', height: '40px', position: 'absolute', left: '10px', top: '10px' }} />
        <input
          type='search'
          style={{ height: '64px', width: '433px', borderRadius: '40px', fontSize: '21px', paddingLeft: '63px' }}
          list="suggestions" // Add the 'list' attribute
          onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm
        />
        <datalist id="suggestions">
          <option value="earth" onClick={() => handleSuggestionClick('earth')} />
          <option value="moon" onClick={() => handleSuggestionClick('moon')} />
          <option value="asteroids" onClick={() => handleSuggestionClick('asteroids')} />
          <option value="mars" onClick={() => handleSuggestionClick('mars')} />
        </datalist>
        <Link
          to={`/${searchTerm}`} // Use dynamic path based on searchTerm
          style={{
            borderRadius: '20px',
            height: '50px',
            width: '157px',
            fontSize: '18px',
            fontWeight: 'bold',
            backgroundColor: 'black',
            color: 'white',
            outline: 'none',
            position: 'absolute',
            right: '65px',
            border: 'none',
            top: '7px',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Search Space
        </Link>
        <h2 style={{ color: 'white', textAlign: 'center', paddingTop: '20px' }}>"Secrets of the universe at your fingertips"</h2>
      </div>
      <Routes>
  <Route path="/earth" element={<Earth />} />
  <Route path="/moon" element={<Moon />} />
  <Route path="/asteroids" element={<Asteroids />} />
  <Route path="/mars" element={<Mars />} />
  {/* ... other routes */}
</Routes>

    </>
  );
}

export default App;
