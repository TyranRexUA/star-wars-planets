import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Preloader from '../Preloader/Preloader';
import { requestMorePlanets, requestPlanets, searchPlanets } from './../../redux/planetsReducer';
import Card from './../Card/Card';
import s from './Library.module.scss';
import cn from 'classnames';
import { IS_ELECTRON } from '../../constants/general';

const Library = ({ planets, requestPlanets, requestMorePlanets, next, isGlobalLoading, isLoading, match, searchPlanets }) => {

  useEffect(() => {
    if (match.params.searchValue) {
      searchPlanets(match.params.searchValue);
    } else {
      requestPlanets();
    }
  }, [match.params.searchValue, searchPlanets, requestPlanets])

  const PlanetUrlToID = (url) => +url.match(/(?<=planets\/)\d+/i);

  return (isGlobalLoading
    ? <Preloader style={{ height: `calc(100vh - ${IS_ELECTRON ? 120 : 70}px)` }} />
    : <>
      {planets.length === 0 &&
        <div className={s.NotFound}>
          PLANETS NOT FOUND
        </div>
      }

      <div className={s.Library}>
        {planets.map(planet => (
          <Card
            key={PlanetUrlToID(planet.url)}
            id={PlanetUrlToID(planet.url)}
            name={planet.name}
            climate={planet.climate}
            population={planet.population}
          />
        ))}
      </div>

      {next &&
        <div className={cn(s.showMoreBtn, { [s.showMoreBtn_preloader]: isLoading })} // showMoreButton which show more planets
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

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { requestMorePlanets, requestPlanets, searchPlanets }
  )
)(React.memo(Library));