import React from 'react';
import s from './InfoField.module.scss';

const InfoField = ({ propertyName, values }) => (

    <div className={s.InfoField}>

        <span className={s.name}>
            {propertyName && propertyName.toUpperCase().replace('_', ' ')}
        </span>

        <div className={s.values}>

            {Array.isArray(values)
                ? values.map(value => (
                    <span key={value}>
                        {value}
                    </span>
                ))
                : <span>
                    {values}
                </span>
            }

        </div>

    </div>
    
);

export default InfoField;