import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Preloader from '../Preloader/Preloader';
import { requestMorePlanets, requestPlanets } from './../../redux/planetsReducer';
import Card from './../Card/Card';
import s from './Library.module.scss';
import cn from 'classnames';

const Library = ({ planets, requestPlanets, requestMorePlanets, next, isGlobalLoading, isLoading }) => {

    useEffect(() => {
        if (planets.length === 0) {
            requestPlanets();
        }
    })

    const PlanetUrlToID = (url) => +url.match(/(?<=planets\/)\d+/i);

    return (isGlobalLoading
        ? <Preloader style={{height: '100vh'}}/>
        : <>
            <div className={s.Library}>
                {planets.map(planet => (
                    <Card
                        key={PlanetUrlToID(planet.url)}
                        id={PlanetUrlToID(planet.url)}
                        //id={fromUrlToID(planet.url)}
                        name={planet.name}
                        climate={planet.climate}
                        population={planet.population}
                    />
                ))}
            </div>

            {next &&
                <div className={cn(s.showMoreBtn, { [s.showMoreBtn_preloader]: isLoading })}
                    onClick={() => {
                        if (!isLoading) requestMorePlanets(next)
                    }}
                >
                    {!isLoading && 'SHOW MORE'}
                </div>
            }
        </>
    )
};

const mapStateToProps = (state) => ({
    planets: state.planets.planets,
    next: state.planets.next,
    isLoading: state.planets.isLoading,
    isGlobalLoading: state.planets.isGlobalLoading,
});

export default connect(
    mapStateToProps,
    { requestMorePlanets, requestPlanets }
)(React.memo(Library))