import React from 'react';
import HeroSection from '../../components/HeroSection';
import { homeObjOne } from './data';

function Products() {
  return (
    <>
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Products;
