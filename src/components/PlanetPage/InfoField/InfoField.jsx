import React from 'react';
import s from './InfoField.module.scss';

const InfoField = ({ propertyName, values }) => {
  const displayValues = (Array.isArray(values) || values.split(', ').length < 2) ? values : values.split(', ');

  return (
    <div className={s.InfoField}>
      <span className={s.name}>
        {propertyName && propertyName.toUpperCase().replace('_', ' ')}
      </span>

      <div className={s.values}>
        {Array.isArray(displayValues)
          ? displayValues.map((item) => (
            <span key={item}>
              {item}
            </span>
          ))
          : <span>
            {values}
          </span>
        }
      </div>
    </div>
  )
};

export default InfoField;