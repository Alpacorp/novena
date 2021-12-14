import * as React from 'react';
import PropTypes from 'prop-types';
import StarRed from '../assets/brands/estrellaroja.svg';

const BrandLogo = ({ src }) => {
  return (
    <>
      <div className='brandLogo'>
        <img src={src} alt="logo empresa" />
        <img src={StarRed} alt="estrella roja" className='starRed' />
      </div>
    </>
  )
};

BrandLogo.propTypes = {
  src: PropTypes.string.isRequired
}

export default BrandLogo;