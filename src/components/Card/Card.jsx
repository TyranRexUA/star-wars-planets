import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Card.module.scss';

const Card = ({ id, name, climate, population }) => {

    return (
        <NavLink className={s.Card} to={`/planet/${id}`}>
            <div className={s.Card__property}>
                <div className={s.name}>
                    Name
                </div>
                <div className={s.value}>
                    {name}
                </div>
            </div>

            <div className={s.Card__property}>
                <div className={s.name}>
                    Climate
                </div>
                <div className={s.value}>
                    {climate}
                </div>
            </div>

            <div className={s.Card__property}>
                <div className={s.name}>
                    Population
                    </div>
                <div className={s.value}>
                    {population}
                </div>
            </div>

        </NavLink>
    )
};

export default React.memo(Card);