import React from 'react';
import s from './NotFound404.module.scss'
import { NavLink } from 'react-router-dom';

const NotFound404 = () => (
    <div className={s.NotFound404}>
        <div className={s.contentWrapper}>
            <div className={s.title}>404</div>
            <div>whoops! <span>NOT FOUND</span></div>
            <NavLink className={s.mainPageBtn} to='/' >
                MAIN PAGE
            </NavLink>
        </div>
    </div>
)

export default NotFound404;