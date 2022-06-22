import React from 'react';
import s from './Error.module.scss'
import { NavLink } from 'react-router-dom';

const Error = () => (
  <div className={s.error}>
    <div className={s.contentWrapper}>
      <div className={s.title}>ERROR</div>
      <div>whoops! <span>Houston, we have a problem</span></div>
      <NavLink className={s.mainPageBtn} to='/' >
        MAIN PAGE
      </NavLink>
    </div>
  </div>
)

export default Error;