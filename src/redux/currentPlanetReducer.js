import swapi from './../API/swapi';

const SET_PLANET_DETAILS = 'currentPlanet/SET_PLANET_DETAILS',
  SET_PLANET_RESIDENTS = 'currentPlanet/SET_PLANET_RESIDENTS',
  CLEAR_CURRENT_PLANET = 'currentPlanet/CLEAR_CURRENT_PLANET',
  TOGGLE_IS_LOADING = 'currentPlanet/TOGGLE_IS_LOADING';

const initialState = {
  name: null,
  rotation_period: null,
  diameter: null,
  climate: null,
  gravity: null,
  terrain: null,
  population: null,
  residents: [],
  isLoading: false,
};

const currentPlanetReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLANET_DETAILS: // add planet details to state, whitout residents property
      return {
        ...state,
        name: action.payload.name,
        rotation_period: action.payload.rotation_period,
        diameter: action.payload.diameter,
        climate: action.payload.climate,
        gravity: action.payload.gravity,
        terrain: action.payload.terrain,
        population: action.payload.population,
      };
    case SET_PLANET_RESIDENTS: // add residents property
      return {
        ...state,
        residents: action.payload,
      };
    case TOGGLE_IS_LOADING: // show preloader
      return {
        ...state,
        isLoading: action.isLoading
      };
    case CLEAR_CURRENT_PLANET:
      return initialState;
    default: return state;
  }
}

export default currentPlanetReducer;
const setPlanetDetails = (data) => ({ type: SET_PLANET_DETAILS, payload: data });
const setPlanetResidents = (data) => ({ type: SET_PLANET_RESIDENTS, payload: data });
const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading });
export const clearCurrentPlanet = () => ({ type: CLEAR_CURRENT_PLANET });

export const requestPlanetDetails = (id) => {
  return async (dispatch) => {
    dispatch(toggleIsLoading(true));
    swapi.getPlanetDetails(id).then(async (response) => {
      await Promise.all( // add residents property such as array of names (from array of urls)
        response.residents.map(person => swapi.getPerson(person))
      ).then((residentsResponse) => {
        dispatch(setPlanetResidents(residentsResponse.map(({ name }) => name)))
      })
      dispatch(setPlanetDetails(response));
    }).catch(() => {
      window.location.hash = '#/error'
    }).finally(() => {
      dispatch(toggleIsLoading(false));
    })
  }
};