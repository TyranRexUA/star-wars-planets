
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Preloader from '../Preloader/Preloader';
import { requestPlanetDetails } from './../../redux/currentPlanetReducer';
import InfoField from './InfoField/InfoField';
import s from './PlanetPage.module.scss';

const PlanetPage = ({ match, requestPlanetDetails, details, isLoading, ...props }) => {

    useEffect(() => {
        requestPlanetDetails(match.params.id);
    }, [match.params.id])

    return (isLoading
        ? <Preloader style={{height: '100vh'}}/>
        : <div className={s.PlanetPage}>
            
            {Object.entries(details).map(([key, values]) => {
                if (values && values.length > 0) {
                    return <InfoField key={key} propertyName={key} values={values} />
                }
            })}

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