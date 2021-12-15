import React from 'react';
import Back from './Back';
import './Components.css';
import backButton from '../assets/components/botonvolver.svg';

const Header = () => {
  return (
    <div className='header'>
      <Back url='/' src={backButton} />
    </div>
  )
};

export default Header;