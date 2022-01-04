import React from 'react';
import styles from './Side.module.scss';

interface SideProps {
  position: 'left' | 'right';
}

export const Side: React.FC<SideProps> = (props) => {
  const positionStyle =
    props.position === 'left' ? styles.sideLeft : styles.sideRight;

  return (
    <div className={`${styles.side} ${positionStyle}`}>{props.children}</div>
  );
};
