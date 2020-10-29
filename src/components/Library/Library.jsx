import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { requestMorePlanets, requestPlanets } from './../../redux/planetsReducer';
import Card from './../Card/Card'

const Library = ({ planets, requestPlanets }) => {

    useEffect(() => {
        if (planets.length === 0) {
            requestPlanets();
        }
    })

    const UrlToID = (url) => +url.match(/(?<=planets\/)\d+/i);

    console.log('+++')

    return (
        <div>
            { planets.map(planet => (
                <Card
                    key={UrlToID(planet.url)}
                    id={UrlToID(planet.url)}
                    //id={fromUrlToID(planet.url)}
                    name={planet.name}
                    climate={planet.climate}
                    population={planet.population}
                />
            ))}
        </div>
    )
};

const mapStateToProps = (state) => ({
    planets: state.planets.planets,
    next: state.planets.next,
    isLoading: state.planets.isLoading,
});

export default connect(
    mapStateToProps,
    { requestMorePlanets, requestPlanets }
)(React.memo(Library))