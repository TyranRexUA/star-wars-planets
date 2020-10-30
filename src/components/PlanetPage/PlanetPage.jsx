
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
    }, [match.params.id, requestPlanetDetails]) // when change url(planet/:id)

    return (isLoading
        ? <Preloader style={{height: 'calc(100vh - 30px)'}}/>
        : <div className={s.PlanetPage}>

            <div className={s.InfoBlock}>

                {Object.entries(details)
                .filter(([key, values]) => values && values.length > 0)
                .map(([key, values]) => {
                        return <InfoField key={key} propertyName={key} values={values} />
                    }
                )}

            </div>

            <img src={require('./../../img/star-wars-gif.gif').default} alt=''/>

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