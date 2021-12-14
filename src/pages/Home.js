import * as React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { one, two, three, four, five, six, seven } from '../assets';
import BrandLogo from '../Components/BrandLogo';
import Servientrega from '../assets/brands/logo-Servientrega.png';

const Home = () => {
  return (
    <>
      <BrandLogo src={Servientrega} />
      <p className='instructive'>Sigue cada paso  y reza en familia</p>
      <div className='mainMenu'>
        <Link to='/stepone' className='menuOption'>
          <img src={one} alt="chico" />
        </Link>
        <Link to='/steptwo' className='menuOption'>
          <img src={two} alt="duende" />
        </Link>
        <Link to='/stepthree' className='menuOption'>
          <img src={three} alt="galleta" />
        </Link>
        <Link to='/stepfour' className='menuOption'>
          <img src={four} alt="monigote" />
        </Link>
        <Link to='/stepfive' className='menuOption'>
          <img src={five} alt="mujer" />
        </Link>
        <Link to='/stepSix' className='menuOption'>
          <img src={six} alt="santa" />
        </Link>
        <Link to='/stepseven' className='menuOption'>
          <img src={seven} alt="pinguino" />
        </Link>
      </div>
    </>
  )
};

export default Home;