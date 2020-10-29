import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ id, name, climate, population }) => {

    return (
        <NavLink to={`/planet/${id}`}>
            <div>
                Name 
                <span>
                    {name}
                </span>
            </div>

            <div>
                Climate 
                <span>
                    {climate}
                </span>
            </div>

            <div>
                Population 
                <span>
                    {population}
                </span>
            </div>
            
        </NavLink>
    )
};

export default React.memo(Card);