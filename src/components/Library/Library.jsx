import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { requestMorePlanets, requestPlanets } from './../../redux/planetsReducer';

const Library = ({ planets, requestPlanets }) => {

    useEffect(() => {
        requestPlanets();
    }, [])

    return (
        <div>
            { planets.map(planet => (
                <div id={+planet.url.match(/(?<=planets\/)\d+/i)} key={+planet.url.match(/(?<=planets\/)\d+/i)}>
                    Name { planet.name }
                    Climate { planet.climate }
                    Population { planet.population }
                </div>
            ))}
        </div>
    )
};

const mapStateToProps = (state) => ({
    planets: state.planets.planets,
    next: state.planets.next,
    isLoading: state.planets.isLoading,
});

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        { requestMorePlanets, requestPlanets }
    )
)(Library)