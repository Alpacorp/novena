import React from 'react';
import { data } from '../../Data/data.json';

const DayFive = () => {
  return (
    <>
      <h2>Los Gozos</h2>
      <p>Dulce Jesús mío,</p>
      <p>mi niño adoradol,</p>
      <small>!Ven a nuestras almas,</small>
      <small>ven no tardes tanto!</small>
      {
        data.map((gozo) => console.log("gozo", gozo))
      }
      {console.log("un gozo", data[1].oracion)}
    </>
  );
}

export default DayFive;