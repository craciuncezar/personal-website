import React, { useEffect } from 'react';
import * as THREE from 'three';
import { Environment } from './Environment';
import styles from './Home3DText.module.scss';

export const Home3DText = () => {
  useEffect(() => {
    loadEnvironment();
  }, []);

  return <div className={styles.magic} id='magic'></div>;
};

function loadEnvironment() {
  const manager = new THREE.LoadingManager();
  manager.onLoad = function () {
    new Environment(typo, particle, {
      text: 'Cezar\nCraciun',
      amount: 1000,
      particleSize: 1,
      particleColor: 0xffffff,
      textSize: 10,
      area: 300,
      ease: 0.1
    });
  };

  let typo: THREE.Font;
  const loader = new THREE.FontLoader(manager);
  loader.load(
    'https://res.cloudinary.com/dydre7amr/raw/upload/v1612950355/font_zsd4dr.json',
    (font) => {
      typo = font;
    }
  );
  const particle = new THREE.TextureLoader(manager).load(
    'https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png'
  );
}
