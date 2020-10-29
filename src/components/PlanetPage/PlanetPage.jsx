
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { requestPlanetDetails } from './../../redux/currentPlanetReducer';
import InfoField from './InfoField/InfoField';

const PlanetPage = ({ match, requestPlanetDetails, details, ...props }) => {

    console.log(details)

    useEffect(() => {
        requestPlanetDetails(match.params.id);
    }, [match.params.id])

    return (
        <div>

            {Object.entries(details).map(([key, values]) => (
                <InfoField key={key} propertyName={key} values={values}/>
            ))}

        </div>
    )
};

const mapStateToProps = (state) => ({
    details: {
        name: state.currentPlanet.name,
        rotation_period: state.currentPlanet.rotation_period,
        diameter: state.currentPlanet.diameter,
        climate: state.currentPlanet.climate,
        gravity: state.currentPlanet.gravity,
        terrain: state.currentPlanet.terrain,
        population: state.currentPlanet.population,
        residents: state.currentPlanet.residents,
    },
    isLoading: state.currentPlanet.isLoading,
});

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        { requestPlanetDetails }
    )
)(React.memo(PlanetPage))