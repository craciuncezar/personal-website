import React from 'react';
import { Side } from '../side/Side';
import styles from './Email.module.scss';

const email = 'craciuncezar1996@gmail.com';

export const Email = () => {
  return (
    <Side position='right'>
      <div className={styles.email}>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </Side>
  );
};
