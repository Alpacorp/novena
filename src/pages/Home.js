import * as React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { chico, duende, galleta, monigote, mujer, santa, pinguino } from '../assets';

const Home = () => {
  return (
    <>
      <p>Sigue cada paso  y reza en familia</p>
      <div className='mainMenu'>
        <Link to='/stepone' className='menuOption'>
          <img src={chico} alt="chico" />
        </Link>
        <Link to='/steptwo' className='menuOption'>
          <img src={duende} alt="duende" />
        </Link>
        <Link to='/stepthree' className='menuOption'>
          <img src={galleta} alt="galleta" />
        </Link>
        <Link to='/stepfour' className='menuOption'>
          <img src={monigote} alt="monigote" />
        </Link>
        <Link to='/stepfive' className='menuOption'>
          <img src={mujer} alt="mujer" />
        </Link>
        <Link to='/stepSix' className='menuOption'>
          <img src={santa} alt="santa" />
        </Link>
        <Link to='/stepseven' className='menuOption'>
          <img src={pinguino} alt="pinguino" />
        </Link>
      </div>
    </>
  )
};

export default Home;