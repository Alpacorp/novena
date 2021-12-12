import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Anton, Campana, Nanita, Peces, Tutaina } from '../pages/Sings';
import { DayOne, DayTwo, DayThree, DayFour, DayFive, DaySix, DaySeven } from '../pages/Days'
import Home from '../pages/Home';
import Layout from './Layout';

const Container = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dayone' element={<DayOne />} />
          <Route path='/daytwo' element={<DayTwo />} />
          <Route path='/daythree' element={<DayThree />} />
          <Route path='/dayfour' element={<DayFour />} />
          <Route path='/dayfive' element={<DayFive />} />
          <Route path='/daysix' element={<DaySix />} />
          <Route path='/anton' element={<Anton />} />
          <Route path='/tutaina' element={<Tutaina />} />
          <Route path='/nanita' element={<Nanita />} />
          <Route path='/campana' element={<Campana />} />
          <Route path='/peces' element={<Peces />} />
          <Route path='/dayseven' element={<DaySeven />} />
        </Routes>
      </Layout>
    </>
  )
}

export default Container;