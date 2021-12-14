import * as React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import backButton from '../assets/components/botonvolver.svg';

const Back = ({ url }) => {
  return (
    <>
      <Link to={url}>
        <img src={backButton} alt="volver" className='back' />
      </Link>
    </>
  )
};

Back.propTypes = {
  url: PropTypes.string.isRequired
};

export default Back;