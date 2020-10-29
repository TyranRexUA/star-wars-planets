import React from 'react';

export default ({ propertyName, values }) => {

    return (

        <div>
            <span>{propertyName && propertyName.toUpperCase().replace('_', ' ')}</span>
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
    )
};