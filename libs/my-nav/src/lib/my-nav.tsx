// import styles from './my-nav.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
/* eslint-disable-next-line */
export interface MyNavProps {}

export function MyNav(props: MyNavProps) {
  const handleChangeRoute = (route: string) => {
    window.location.href = window.location.origin + '/apps' + route;
  }
  return (
    <nav>
      <ul style={{display: 'flex', gap: '20px', listStyle: 'none', color: 'blue'}}>
        <li onClick={() => handleChangeRoute('/demo1')}>Home</li>
        <li onClick={() => handleChangeRoute('/demo1')}>App 1</li>
        <li onClick={() => handleChangeRoute('/demo2')}>App 2</li>
      </ul>
    </nav>
  );
}

export default MyNav;
