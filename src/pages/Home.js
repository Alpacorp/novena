import * as React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <p>Sigue cada paso  y reza en familia</p>
      <p>Acá van los iconos</p>
      <Link to='/dayone'>
        Día uno
      </Link>
      <Link to='/daytwo'>
        Día dos
      </Link>
      <Link to='/daythree'>
        Día tres
      </Link>
      <Link to='dayfour'>
        Día cuatro
      </Link>
      <Link to='dayfive'>
        Día cinco
      </Link>
      <Link to='daySix'>
        Día seis
      </Link>
      <Link to='dayseven'>
        Día siete
      </Link>
    </>
  )
};

export default Home;