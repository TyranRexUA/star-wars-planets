
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { IS_ELECTRON } from '../../constants/general';
import Preloader from '../Preloader/Preloader';
import { requestPlanetDetails, clearCurrentPlanet } from './../../redux/currentPlanetReducer';
import InfoField from './InfoField/InfoField';
import s from './PlanetPage.module.scss';

const PlanetPage = ({ match, requestPlanetDetails, clearCurrentPlanet, details, isLoading, history }) => {

  useEffect(() => {
    requestPlanetDetails(match.params.id, history);
    return () => {
      clearCurrentPlanet();
    }
  }, [match.params.id, requestPlanetDetails, clearCurrentPlanet, history]) // when change url(planet/:id)

  useEffect(() => {
    window.electron?.ipcRenderer.send('changeTitle', details.name || '')
  }, [details.name])

  return (isLoading
    ? <Preloader style={{ height: `calc(100vh - ${IS_ELECTRON ? 120 : 70}px)` }} />
    : (
      <div className={s.PlanetPage}>
        <div className={s.InfoBlock}>
          {Object.entries(details)
            .filter(([key, values]) => values && values.length > 0)
            .map(([key, values]) => {
              return <InfoField key={key} propertyName={key} values={values} />
            }
            )}

        </div>
        <img src={require('./../../img/star-wars-gif.gif').default} alt='' />
      </div>
    )
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
    { requestPlanetDetails, clearCurrentPlanet }
  )
)(React.memo(PlanetPage))