import * as React from 'react';
import { Link } from 'react-router-dom';

const DaySeven = () => {
  return (
    <>
      <h2>Elige un villancico para cantar</h2>
      <Link to='/anton'>
        Anton Tiruliruliru
      </Link>
      <Link to='/tutaina'>
        Tutaina
      </Link>
      <Link to='/nanita'>
        La Nanita Nana
      </Link>
      <Link to='/campana'>
        Campana sobre campana
      </Link>
      <Link to='/peces'>
        Los peces en el río
      </Link>
    </>
  )
};

export default DaySeven;