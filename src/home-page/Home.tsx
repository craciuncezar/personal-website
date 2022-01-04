import React from 'react';
import { Email } from './email/Email';
import { Home3DText } from './home-3D-text/Home3DText';
import { MySocials } from './social/MySocials';

export const Home = () => {
  return (
    <>
      <MySocials />
      <Home3DText />
      <Email />
    </>
  );
};
