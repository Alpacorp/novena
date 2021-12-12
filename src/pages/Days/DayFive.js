import React, { useState } from 'react';
import { data } from '../../Data/data.json';

const DayFive = () => {

  const [counter, setCounter] = useState(0);

  let dataInfo = data.filter((item) => item.id === counter);

  const next = () => {
    setCounter(counter + 1);
  };

  const before = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h2>Los Gozos</h2>
      <p>Dulce Jesús mío,</p>
      <p>mi niño adorado,</p>
      <small>!Ven a nuestras almas,</small>
      <small>ven no tardes tanto!</small>
      {
        counter <= 1 ?
          ''
          :
          <button onClick={before}>
            Anterior
          </button>
      }
      {
        counter < 12 ?
          <button onClick={next}>
            Siguiente
          </button>
          : ''
      }
      <hr />
      {
        !dataInfo || dataInfo === 'undefined' || dataInfo === '' || dataInfo.length === 0 ? 'No existe' : dataInfo[0].message
      }
    </>
  );
};

export default DayFive;