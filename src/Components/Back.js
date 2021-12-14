import * as React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Back = ({ url }) => {
  return (
    <>
      <Link to={url}>
        Atrás
      </Link>
    </>
  )
};

Back.propTypes = {
  url: PropTypes.string.isRequired
};

export default Back;