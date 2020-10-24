import React from 'react';
import HeroSection from '../../components/HeroSection';
import { homeObjOne, homeObjTwo } from './data';

function Home() {
  return (
    <>
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjOne} />

    </>
  );
}

export default Home;
