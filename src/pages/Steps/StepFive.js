import React, { useState } from 'react';
import { data } from '../../Data/data.json';

const StepFive = () => {

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
      {
        counter == 0 ? '' : `${counter} de 12`
      }
      <br />
      {
        !dataInfo || dataInfo === 'undefined' || dataInfo === '' || dataInfo.length === 0 ? '' : dataInfo[0].message
      }
      <br />
      <small>!Ven a nuestras almas,</small>
      <small>ven no tardes tanto!</small>
      <br />
      {
        counter <= 0 ?
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
    </>
  );
};

export default StepFive;