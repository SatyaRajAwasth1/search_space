import React from 'react';
import './App.css';
import image from './Images/Earth.png';
import background from './Images/Background.png'
import icon from './Images/icon.png'
import logo from './Images/logo.png';
import Info from './Info';
import { Routes, Route, Link } from 'react-router-dom';
const containerStyle = { 
  backgroundImage:`url(${background})`,
  backgroundSize:'cover',
  backgroundColor:'black',
  height:'1000px',
  position:'relative'
};

const searchStyle={
  position:'absolute',
  top:'75%',
  left:'35%',
  outline:'none',
  border:'none',
}

function App() {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate('/info');
  // };
  return (
    <>
      <div style={containerStyle}>
      <img src={image} style={{width:'887px', height:'490',  paddingTop:'60px', paddingLeft:'250px'}}/>
      <img src={logo} style={{width:'100px', height:'100px', position:'absolute', top:'20px', left:'30px'}}/>
    </div> 
    <div className='search' style={searchStyle}>
    <img src={icon} style={{width:'30px', height:'40px', position:'absolute', left:'20px', top:'10px'}}/>
    <input type='search' style={{height:'64px', width:'433px', borderRadius:'40px', fontSize:'21px', paddingLeft:'63px'}}/>
     {/* <button style={{borderRadius:'20px', height:'50px', width:'157px', fontSize:'18px', fontStyle:'bold', backgroundColor:'black', color:'white',outline:'none', position:'absolute', right:'10px', border:'none', top:'7px'}}onClick={handleClick}>Search Space</button>*/}
     <Link
          to="/info" // Use Link component for navigation
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
            right: '10px',
            border: 'none',
            top: '7px',
            textDecoration: 'none', // Remove underline
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Search Space
        </Link>
      <h2 style={{color:'white', textAlign:'center', paddingTop:'20px'}}>"Secrets of universe at your fingertips"</h2>
    </div>
    
    </>
    
   
  );
}

export default App;
