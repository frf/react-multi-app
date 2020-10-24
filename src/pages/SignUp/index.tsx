import React from 'react';
import HeroSection from '../../components/HeroSection';
import { homeObjOne, homeObjThree } from './data';

function SignUp() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default SignUp;
