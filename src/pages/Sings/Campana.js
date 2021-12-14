import * as React from 'react';
import Back from '../../Components/Back';

const Campana = () => {
  return (
    <>
      <Back url='/stepseven' />
      <h2>Campana sobre campana</h2>
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/IhO3Y1unYGE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </>
  )
};

export default Campana;