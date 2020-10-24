import React from 'react';
import HeroSection from '../../components/HeroSection';
import { homeObjOne, homeObjThree } from './data';
import Pricing from '../Pricing';

function Services() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Services;
